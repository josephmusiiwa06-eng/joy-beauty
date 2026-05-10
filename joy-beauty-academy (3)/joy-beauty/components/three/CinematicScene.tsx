'use client';

import { useEffect, useRef } from 'react';
// Import types only at build time — no runtime bundle cost
import type * as ThreeTypes from 'three';

interface CinematicSceneProps {
  className?: string;
}

export function CinematicScene({ className = '' }: CinematicSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let cleanupFn: (() => void) | undefined;

    const init = async () => {
      try {
        // Runtime dynamic imports (keep three.js out of initial bundle)
        const THREE = await import('three');
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        cleanupFn = setupScene(THREE, gsap, ScrollTrigger);
      } catch (e) {
        console.warn('3D scene failed to load:', e);
      }
    };

    init();

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="three-canvas"
      className={`fixed top-0 left-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );

  // ─── Scene setup extracted so it can use typed THREE ────────────────────────
  function setupScene(
    THREE: typeof ThreeTypes,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gsap: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ScrollTrigger: any
  ): () => void {
    if (!canvasRef.current) return () => {};

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // ── Scene & Camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // ── Lighting ──────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xff1b8d, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff1b8d, 2, 30);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xd4af37, 1.5, 25);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xff6bb5, 1, 20);
    pointLight3.position.set(0, 4, -2);
    scene.add(pointLight3);

    // ── Particle System ───────────────────────────────────────────────────────
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    const pinkColor = new THREE.Color(0xff1b8d);
    const goldColor = new THREE.Color(0xd4af37);
    const blushColor = new THREE.Color(0xe8b4cb);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const r = Math.random();
      const col = r < 0.5 ? pinkColor : r < 0.8 ? goldColor : blushColor;
      colors[i * 3]     = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      sizes[i]  = Math.random() * 3 + 0.5;
      speeds[i] = Math.random() * 0.5 + 0.1;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
    particleGeo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Floating Orbs ─────────────────────────────────────────────────────────
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    type OrbData = { mesh: ThreeTypes.Mesh; speed: number; angle: number };
    const orbData: OrbData[] = [];

    const orbConfigs: { pos: [number, number, number]; scale: number; color: number; geo: string }[] = [
      { pos: [2.5,  1.5, -2], scale: 0.40, color: 0xff1b8d, geo: 'sphere' },
      { pos: [-2.8,-1.0, -3], scale: 0.30, color: 0xd4af37, geo: 'torus'  },
      { pos: [0,    2.8, -4], scale: 0.25, color: 0xe8b4cb, geo: 'sphere' },
      { pos: [-1.5,-2.5, -2], scale: 0.35, color: 0xff6bb5, geo: 'torus'  },
      { pos: [3.5, -0.5, -5], scale: 0.50, color: 0xc4006a, geo: 'sphere' },
      { pos: [-3.5, 2.0, -6], scale: 0.40, color: 0xf0d060, geo: 'torus'  },
    ];

    orbConfigs.forEach((cfg, i) => {
      const geo =
        cfg.geo === 'sphere'
          ? new THREE.SphereGeometry(1, 32, 32)
          : new THREE.TorusGeometry(1, 0.3, 16, 100);

      const mat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        metalness: 0.8,
        roughness: 0.2,
        emissive: cfg.color,
        emissiveIntensity: 0.2,
        transparent: true,
        opacity: 0.6,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.setScalar(cfg.scale);
      mesh.position.set(...cfg.pos);
      orbGroup.add(mesh);

      orbData.push({ mesh, speed: 0.2 + i * 0.07, angle: Math.atan2(cfg.pos[1], cfg.pos[0]) });
    });

    // ── Crown Ring Motif ──────────────────────────────────────────────────────
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const outerRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.015, 16, 200),
      new THREE.MeshStandardMaterial({
        color: 0xd4af37, metalness: 1, roughness: 0.1,
        emissive: 0xd4af37, emissiveIntensity: 0.5,
      })
    );
    ringGroup.add(outerRing);

    const innerRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.008, 16, 200),
      new THREE.MeshStandardMaterial({
        color: 0xff1b8d, metalness: 0.9, roughness: 0.15,
        emissive: 0xff1b8d, emissiveIntensity: 0.8,
      })
    );
    ringGroup.add(innerRing);
    ringGroup.rotation.x = Math.PI / 2.5;

    // ── GSAP Scroll Timeline ──────────────────────────────────────────────────
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    });

    scrollTimeline
      .to(camera.position,   { z: 3.5, duration: 1 }, 0)
      .to(ringGroup.rotation,{ y: Math.PI * 2, duration: 2 }, 0)
      .to(particleMat,       { opacity: 0.9, duration: 1 }, 0)
      .to(camera.position,   { x: -1.5, y: 0.5, z: 4, duration: 1.5 }, 1)
      .to(orbGroup.rotation, { y: Math.PI, duration: 1.5 }, 1)
      .to(ambientLight,      { intensity: 0.5, duration: 1 }, 1)
      .to(camera.position,   { x: 0, y: 1.5, z: 5, duration: 1.5 }, 2.5)
      .to(camera.rotation,   { x: -0.2, duration: 1.5 }, 2.5)
      .to(particleMat,       { size: 0.1, duration: 1.5 }, 2.5)
      .to(camera.position,   { x: 0.5, y: 0, z: 7, duration: 1 }, 4)
      .to(ringGroup.scale,   { x: 1.5, y: 1.5, z: 1.5, duration: 1 }, 4)
      .to(pointLight1,       { intensity: 3, duration: 1 }, 4)
      .to(particleMat,       { opacity: 0.3, duration: 0.5 }, 5);

    // ── Mouse Parallax ────────────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x =  (e.clientX / window.innerWidth  - 0.5) * 0.5;
      targetMouse.y = -(e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ── Animation Loop ────────────────────────────────────────────────────────
    const clock = new THREE.Clock();

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      ringGroup.rotation.z     = mouse.x * 0.3;
      ringGroup.position.x     = mouse.x * 0.5;
      ringGroup.position.y     = mouse.y * 0.5;

      camera.position.x += (mouse.x * 0.3 - camera.position.x * 0.1) * 0.02;
      camera.position.y += (mouse.y * 0.2 - camera.position.y * 0.1) * 0.02;

      orbData.forEach((orb, i) => {
        orb.mesh.rotation.x = elapsed * (0.3 + i * 0.05);
        orb.mesh.rotation.y = elapsed * (0.2 + i * 0.03);
      });

      // Drift particles upward
      const pos = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += speeds[i] * 0.003;
        if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = -10;
        pos[i * 3]     += Math.sin(elapsed + i) * 0.001;
      }
      particleGeo.attributes.position.needsUpdate = true;

      pointLight1.intensity = 2 + Math.sin(elapsed * 1.5) * 0.5;
      pointLight2.intensity = 1.5 + Math.cos(elapsed * 0.8) * 0.3;
      outerRing.rotation.z  = elapsed * 0.1;
      innerRing.rotation.z  = -elapsed * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }
}
