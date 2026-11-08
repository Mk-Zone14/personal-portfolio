import { useEffect, useState } from 'react';
import { scrollToTop } from '../../lib/scroll';

// Only appears once the reader is near the end of the page.
const SHOW_WITHIN_PX = 200;

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const distanceFromBottom =
        document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      setVisible(distanceFromBottom <= SHOW_WITHIN_PX);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-background text-foreground px-4 py-3 font-sans text-xs tracking-widest uppercase font-medium border border-foreground/20 hover:bg-foreground hover:text-background hover:border-background/30 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span aria-hidden="true">↑</span> Back to top
    </button>
  );
};
