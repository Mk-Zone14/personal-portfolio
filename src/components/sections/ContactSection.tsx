

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-foreground text-background pt-36 pb-24 md:pt-44 md:pb-32 px-6 flex flex-col justify-between">
      <div className="max-w-[90vw] mx-auto w-full flex-grow flex flex-col justify-center">
        <h2 className="font-display font-bold text-[12vw] uppercase tracking-tighter leading-[0.8] mb-16 max-w-full text-balance hover:scale-[1.02] transition-transform duration-500 origin-left">
          LET'S BUILD<br/>SOMETHING<br/>INTERESTING.
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 font-sans text-sm tracking-widest uppercase font-medium">
          <a href="mailto:medhashreekallol14@gmail.com" className="hover:text-background/50 transition-colors border-b border-transparent hover:border-background/50 pb-1 w-fit">
            Email
          </a>
          <a href="https://github.com/Mk-Zone14" target="_blank" rel="noreferrer" className="hover:text-background/50 transition-colors border-b border-transparent hover:border-background/50 pb-1 w-fit">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/medhashree-kallol-2878a2334/" target="_blank" rel="noreferrer" className="hover:text-background/50 transition-colors border-b border-transparent hover:border-background/50 pb-1 w-fit">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-[90vw] mx-auto w-full flex justify-between items-end border-t border-background/20 pt-8 mt-16 font-sans text-xs tracking-widest uppercase text-background/60">
        <div>MEDHASHREE KALLOL</div>
        <div>© 2026</div>
      </div>
    </section>
  );
};
