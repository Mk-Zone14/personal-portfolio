import { useEffect, useRef, Fragment } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const interests = [
  "ARTIFICIAL INTELLIGENCE",
  "COMPUTER VISION",
  "MACHINE LEARNING",
  "FINTECH",
  "QUANT",
  "MATHEMATICS",
  "SPACE",
  "CREATIVE CODING"
];

export const Interests = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray('.interest-row');
      
      rows.forEach((row: any, i) => {
        const direction = i % 2 === 0 ? 1 : -1;
        
        gsap.to(row, {
          xPercent: -20 * direction,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-foreground text-background overflow-hidden flex flex-col justify-center min-h-screen">
      <div className="px-6 mb-16 max-w-[90vw] mx-auto w-full">
        <h2 className="font-sans text-sm tracking-[0.2em] uppercase font-bold text-background/50">
          Currently Obsessed With
        </h2>
      </div>

      <div className="flex flex-col gap-2 md:gap-4 whitespace-nowrap opacity-90 select-none">
        {interests.map((interest, idx) => (
          <div 
            key={idx} 
            className={`interest-row flex gap-8 md:gap-16 items-center ${idx % 2 === 0 ? '-ml-[10%]' : '-ml-[20%]'}`}
          >
            {[...Array(4)].map((_, i) => (
              <Fragment key={i}>
                <span className={`font-display font-bold text-6xl md:text-[8vw] leading-none tracking-tighter uppercase ${i % 2 !== 0 ? 'text-transparent' : ''}`} style={{ WebkitTextStroke: i % 2 !== 0 ? '1px var(--background)' : 'none' }}>
                  {interest}
                </span>
                <span className="font-sans text-xl md:text-3xl font-light text-background/30">✦</span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
