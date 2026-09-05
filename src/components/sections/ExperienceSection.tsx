

export const ExperienceSection = () => {
  return (
    <section className="pt-48 pb-32 md:pt-56 bg-background text-foreground px-6 border-t border-muted/10">
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
              <li className="flex gap-4"><span className="text-accent">▹</span> Placed 3rd in the Gemini Hackathon with Finora, a multi-agent AI CFO platform.</li>
              <li className="flex gap-4"><span className="text-accent">▹</span> Built and deployed full-stack web tools including Nova (opportunity copilot) and SpendWise.</li>
              <li className="flex gap-4"><span className="text-accent">▹</span> Developed predictive machine learning models on Kaggle, including credit card default analysis.</li>
              <li className="flex gap-4"><span className="text-accent">▹</span> Explored autonomous visual mapping and hazard detection concepts for planetary rovers (SIH).</li>
              <li className="flex gap-4"><span className="text-accent">▹</span> Directed and wrote college short films, bringing visual storytelling and narrative structure into software.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
