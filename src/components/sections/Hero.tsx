import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      gsap.from(".hero-name", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      });
      
      gsap.from(".hero-subtext", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.8
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="z-10 w-full max-w-[90vw] mx-auto flex flex-col justify-center h-full">
        <h1 className="hero-name font-display font-bold text-[12vw] leading-[0.86] tracking-[0.03em] uppercase text-foreground m-0 p-0">
          Medhashree<span className="sr-only"> Kallol</span>
        </h1>

        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between">
          <p className="hero-subtext font-sans text-base md:text-lg text-foreground/80 max-w-md font-light leading-relaxed md:pb-4">
            I build systems, experiments and visual experiences at the intersection of technology and curiosity.
          </p>
          <span
            aria-hidden="true"
            className="hero-name font-display font-bold text-[12vw] leading-[0.86] tracking-[0.03em] uppercase text-accent"
          >
            Kallol
          </span>
        </div>

        <div className="hero-subtext mt-20 md:mt-28 w-full border-t border-muted/20 pt-8 md:pt-10 font-sans text-xs tracking-[0.2em] text-muted uppercase">
          <span className="hidden md:inline">
            AI/ML <span className="mx-2">·</span> Software <span className="mx-2">·</span> Creative Technology
          </span>
          <span className="md:hidden flex flex-col gap-3">
            <span>
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-muted mr-3 align-middle"></span>AI/ML
              <span className="ml-6"><span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-muted mr-3 align-middle"></span>Software</span>
            </span>
            <span>
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-muted mr-3 align-middle"></span>Creative Technology
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};
