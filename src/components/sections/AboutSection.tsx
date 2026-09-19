

export const AboutSection = () => {
  return (
    <section id="about" className="pt-36 pb-24 md:pt-44 md:pb-32 bg-background text-foreground px-6 border-t border-muted/10">
      <div className="max-w-[90vw] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <h3 className="font-display text-2xl uppercase tracking-tight">About</h3>
        </div>
        <div className="md:col-span-8 space-y-8 font-sans text-xl md:text-3xl font-light text-foreground/90 text-balance leading-relaxed">
          <p>
            I am a Computer Science & Engineering student specializing in AI/ML. I care about how systems work under the hood, from mathematical models and agent architectures to the mechanics of reliable software.
          </p>
          <p className="text-foreground/60">
            My thinking draws from a distinct combination of biology, mathematics, and filmmaking. Biology taught me how complex systems self-organize; mathematics gave me respect for structure; filmmaking gave me an instinct for visual hierarchy and rhythm. Programming and AI are where those threads come together into things people can actually use.
          </p>
        </div>
      </div>
    </section>
  );
};
