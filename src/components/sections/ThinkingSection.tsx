import { useState } from 'react';

const topics = [
  { id: 'ai', title: 'AI', thought: 'Intelligence as a solvable compression problem.' },
  { id: 'quant', title: 'QUANT', thought: 'The mathematics of human panic and greed.' },
  { id: 'space', title: 'SPACE', thought: 'Engineering for environments that actively want to kill you.' },
  { id: 'film', title: 'FILM', thought: 'Manipulating time and emotion through carefully arranged rectangles.' },
  { id: 'math', title: 'MATHEMATICS', thought: 'The underlying API of the universe.' },
  { id: 'human', title: 'HUMAN BEHAVIOUR', thought: 'Irrational systems interacting with logical rules.' },
  { id: 'systems', title: 'SYSTEMS', thought: 'How small local interactions create massive global complexity.' },
  { id: 'money', title: 'MONEY', thought: 'A shared delusion backed by cryptographic consensus or state violence.' }
];

export const ThinkingSection = () => {
  const [activeTopic, setActiveTopic] = useState(topics[0]);

  return (
    <section id="think" className="min-h-screen bg-foreground text-background py-32 px-6 flex flex-col justify-center">
      <div className="max-w-[90vw] mx-auto w-full">
        <h2 className="font-display font-medium text-4xl md:text-7xl uppercase tracking-tight mb-24 max-w-4xl">
          Things I'm<br />Thinking About.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          <div className="flex flex-col gap-6">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onMouseEnter={() => setActiveTopic(topic)}
                className={`text-left font-display text-3xl md:text-5xl uppercase tracking-tighter transition-all duration-300 ${activeTopic.id === topic.id ? 'text-background translate-x-4' : 'text-background/20 hover:text-background/50'}`}
              >
                {topic.title}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center lg:justify-start lg:pl-16 h-48 lg:h-auto border-t lg:border-t-0 lg:border-l border-background/20 pt-8 lg:pt-0">
            <p className="font-sans text-xl md:text-3xl font-light leading-relaxed max-w-md text-balance">
              {activeTopic.thought}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
