

export const AboutSection = () => {
  return (
    <section className="py-32 bg-background text-foreground px-6 border-t border-muted/10">
      <div className="max-w-[90vw] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <h3 className="font-display text-2xl uppercase tracking-tight">About</h3>
        </div>
        <div className="md:col-span-8 space-y-8 font-sans text-xl md:text-3xl font-light text-foreground/90 text-balance leading-relaxed">
          <p>
            I am a Computer Science & Engineering student specializing in AI/ML. My primary interest lies in building technically interesting systems and understanding how complex things work under the hood.
          </p>
          <p className="text-foreground/60">
            My background is a collision of biology, mathematics, filmmaking, programming, and endless experimentation. This unconventional path has shaped my approach to technology—treating code not just as logic, but as a medium for solving real problems and telling stories.
          </p>
        </div>
      </div>
    </section>
  );
};
