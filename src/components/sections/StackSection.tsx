

const buildingWith = ['Python', 'C', 'Java', 'React', 'Vite', 'Tailwind', 'Git', 'GitHub', 'AI APIs'];
const currentlyLearning = ['Computer Science fundamentals', 'Data Structures & Algorithms', 'Machine Learning', 'Computer Vision', 'Systems', 'Quantitative Finance'];

export const StackSection = () => {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32 bg-background text-foreground px-6">
      <div className="max-w-[90vw] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h3 className="font-sans text-xs tracking-widest uppercase text-muted mb-12 border-b border-muted/20 pb-4">
            Building With
          </h3>
          <ul className="flex flex-col gap-4 font-display text-2xl md:text-4xl uppercase tracking-tight font-light">
            {buildingWith.map((item, i) => (
              <li key={i} className="hover:text-accent transition-colors cursor-default">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-sans text-xs tracking-widest uppercase text-muted mb-12 border-b border-muted/20 pb-4">
            Currently Learning
          </h3>
          <ul className="flex flex-col gap-4 font-display text-2xl md:text-4xl uppercase tracking-tight font-light text-foreground/50">
            {currentlyLearning.map((item, i) => (
              <li key={i} className="hover:text-foreground transition-colors cursor-default">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
