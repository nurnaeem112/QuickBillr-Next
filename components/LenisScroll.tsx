import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface LenisScrollProps {
  children: React.ReactNode;
}

export const LenisScroll: React.FC<LenisScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with correct options
    const lenis = new Lenis({
      duration: 3.5,
      easing: (t) => {
        // Smooth start and end (easeInOutCubic)
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      },
      smoothWheel: true,
      wheelMultiplier: 0.6,
      touchMultiplier: 1.5,
      lerp: 0.08,
      infinite: false,
      autoRaf: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      // Remove smoothTouch as it's not a valid option
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};