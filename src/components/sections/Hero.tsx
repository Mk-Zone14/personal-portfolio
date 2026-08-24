import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
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
        <h1 
          ref={textRef} 
          className="font-display font-bold text-[12vw] leading-[0.8] tracking-tighter uppercase text-foreground m-0 p-0 overflow-hidden text-balance"
        >
          MEDHASHREE
        </h1>
        
        <div className="hero-subtext mt-12 flex flex-col md:flex-row md:items-end justify-between w-full max-w-[90vw] gap-8 border-t border-muted/20 pt-8">
          <div className="font-sans text-xs tracking-[0.2em] text-muted uppercase">
            AI/ML <span className="mx-2">·</span> Software <span className="mx-2">·</span> Creative Technology
          </div>
          <div className="font-sans text-sm md:text-base text-foreground/80 max-w-md font-light leading-relaxed">
            I build systems, experiments and visual experiences at the intersection of technology and curiosity.
          </div>
        </div>
      </div>
    </section>
  );
};
