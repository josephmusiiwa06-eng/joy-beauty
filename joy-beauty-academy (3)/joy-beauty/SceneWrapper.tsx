'use client';

import dynamic from 'next/dynamic';

// This wrapper is a Client Component, so ssr:false is allowed here
const CinematicScene = dynamic(
  () => import('./CinematicScene').then((m) => m.CinematicScene),
  {
    ssr: false,
    loading: () => null, // canvas is decorative; show nothing while loading
  }
);

export function SceneWrapper() {
  return <CinematicScene />;
}
