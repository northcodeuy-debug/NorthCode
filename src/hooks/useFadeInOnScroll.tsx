// hooks/useFadeInOnScroll.tsx

import { useEffect, useRef, useState } from 'react';
import React from 'react';

/**
 * Hook personalizado para aplicar un efecto de 'fade-in' al entrar en la vista.
 * Utiliza Intersection Observer API para detectar cuando un elemento es visible.
 * @returns {[React.RefObject<HTMLDivElement>, boolean]}
 * Devuelve una referencia y un estado booleano que indica si el elemento es visible.
 */


const useFadeInOnScroll = (): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(currentRef);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return [ref, isInView];
};

export default useFadeInOnScroll;