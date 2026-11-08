import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  className?: string;
};

/**
 * Paragraph whose words light up one by one as it scrolls through the viewport.
 * Words start dim and reach full opacity, so it works on both dark and light sections.
 * With prefers-reduced-motion the text is simply shown in full.
 */
export const ScrollReveal = ({ text, className }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const words = el.querySelectorAll('.reveal-word');
      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 55%',
            scrub: 0.6,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <p ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {text.split(' ').map((word, i, arr) => (
          <span key={i} className="reveal-word">
            {word}
            {i < arr.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    </p>
  );
};
