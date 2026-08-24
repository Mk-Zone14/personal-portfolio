

export const ExperienceSection = () => {
  return (
    <section className="py-32 bg-background text-foreground px-6 border-t border-muted/10">
      <div className="max-w-[90vw] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="flex flex-col">
            <span className="font-display text-8xl md:text-[10vw] font-bold tracking-tighter leading-none mb-4">9.1<span className="text-accent">+</span></span>
            <span className="font-sans text-xs tracking-widest uppercase text-muted">Academic SGPA</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-8xl md:text-[10vw] font-bold tracking-tighter leading-none mb-4">03</span>
            <span className="font-sans text-xs tracking-widest uppercase text-muted">Hackathon & Competitions</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-8xl md:text-[10vw] font-bold tracking-tighter leading-none mb-4">∞</span>
            <span className="font-sans text-xs tracking-widest uppercase text-muted">Things Left to Learn</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-muted/10 pt-16">
          <div>
            <h3 className="font-display text-3xl uppercase tracking-tight mb-8">Things I've Done</h3>
          </div>
          <div>
            <ul className="space-y-6 font-sans text-base md:text-lg font-light text-foreground/80">
              <li className="flex gap-4"><span className="text-accent">▹</span> Built AI/ML models and experimental architectures.</li>
              <li className="flex gap-4"><span className="text-accent">▹</span> Participated in hackathons and SIH preparation.</li>
              <li className="flex gap-4"><span className="text-accent">▹</span> Directed and constructed visual stories through filmmaking.</li>
              <li className="flex gap-4"><span className="text-accent">▹</span> Analyzed datasets on Kaggle and deployed software projects.</li>
              <li className="flex gap-4"><span className="text-accent">▹</span> Bridged biological concepts with computational solutions.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
