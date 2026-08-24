

export const CreativeSection = () => {
  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col justify-center pt-36 pb-24 md:pt-44 md:pb-32 px-6">
      <div className="max-w-[90vw] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="font-display font-medium text-4xl md:text-7xl uppercase tracking-tight leading-none mb-8">
              Not Everything<br />Is Code.
            </h2>
            <div className="font-sans text-xs tracking-widest uppercase text-muted mb-12">
              Visual Storytelling
            </div>
          </div>

          <div className="space-y-6 max-w-sm">
            <p className="font-sans text-base md:text-lg text-foreground/80 font-light leading-relaxed">
              Before algorithms, there were frames. My experience in college filmmaking and directing taught me how to construct narratives, manipulate pacing, and control visual hierarchy.
            </p>
            <div className="flex flex-col gap-2 font-display text-sm md:text-xl uppercase tracking-widest text-accent mt-8">
              <span>Director</span>
              <span>Writer</span>
              <span>Visual Storyteller</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-7 relative h-[60vh] lg:h-full min-h-[400px] flex items-center justify-center bg-[#111] border border-muted/20 overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-1000 grayscale"></div>
        </div>
      </div>
    </section>
  );
};
