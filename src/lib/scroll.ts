import type Lenis from 'lenis';

// Shared handle so components outside App can drive Lenis' smooth scroll.
let instance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null) => {
  instance = lenis;
};

export const scrollToTop = () => {
  if (instance) {
    instance.scrollTo(0, { duration: 1.6 });
  } else {
    window.scrollTo({ top: 0 });
  }
};
