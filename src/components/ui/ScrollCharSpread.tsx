import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  className?: string;
};

/**
 * Heading whose letters start spread out from the centre (shifted and tilted
 * in 3D) and slide together into place as it scrolls into view.
 * Same effect as the text-scroll-animation component, built on the GSAP and
 * Lenis already in the project instead of adding framer-motion.
 */
export const ScrollCharSpread = ({ text, className }: Props) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(
      {
        wide: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        narrow: '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
      },
      (ctx) => {
        const { wide } = ctx.conditions as { wide: boolean };
        const step = wide ? 50 : 14;
        const chars = Array.from(el.querySelectorAll<HTMLElement>('.spread-char'));
        const center = Math.floor(chars.length / 2);

        chars.forEach((c, i) => {
          const d = i - center;
          gsap.fromTo(
            c,
            { x: d * step, rotationX: d * 50 },
            {
              x: 0,
              rotationX: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top 92%',
                end: 'top 40%',
                scrub: 0.6,
              },
            }
          );
        });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <h2
      ref={ref}
      className={className}
      aria-label={text}
      style={{ perspective: '500px' }}
    >
      <span aria-hidden="true">
        {text.split(' ').map((word, wi, words) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split('').map((ch, ci) => (
              <span key={ci} className="spread-char inline-block">
                {ch}
              </span>
            ))}
            {wi < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    </h2>
  );
};
