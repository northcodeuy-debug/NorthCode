// src/hooks/useFadeInOnScroll.ts

/**
 * @fileoverview Custom Hook para animaciones de entrada suave (Fade In) mediante IntersectionObserver.
 * @module hooks/useFadeInOnScroll
 */

import { useState, useEffect, useRef, type RefObject } from 'react';

export const useFadeInOnScroll = (): [RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(currentRef); // Detiene la observación tras activarse
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.15 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return [ref, isInView];
};