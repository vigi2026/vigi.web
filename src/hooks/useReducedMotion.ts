import { useState, useEffect } from 'react';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [userOverrideReducedMotion, setUserOverrideReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const isReduced = prefersReducedMotion || userOverrideReducedMotion;

  const toggleReducedMotion = () => {
    setUserOverrideReducedMotion(prev => !prev);
  };

  return {
    isReducedMotion: isReduced,
    toggleReducedMotion,
    userOverrideReducedMotion
  };
}
