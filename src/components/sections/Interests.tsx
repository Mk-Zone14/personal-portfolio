import { Fragment } from 'react';

const interests = [
  "ARTIFICIAL INTELLIGENCE",
  "COMPUTER VISION",
  "MACHINE LEARNING",
  "FINTECH",
  "QUANT",
  "MATHEMATICS",
  "SPACE",
  "CREATIVE CODING"
];

// Render 8 copies per row (2× the original 4) so that exactly half the track
// width can be translateX'd away invisibly — the first and second halves are
// identical, making the loop seamless.
const COPIES = 8;

export const Interests = () => {
  return (
    <section className="relative z-20 pt-44 pb-32 md:pt-52 md:pb-40 bg-foreground text-background overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="px-6 mb-12 md:mb-16 max-w-[90vw] mx-auto w-full">
        <h2 className="font-sans text-sm tracking-[0.2em] uppercase font-bold text-background/60">
          Currently Obsessed With
        </h2>
      </div>

      <div className="flex flex-col gap-3 md:gap-6 whitespace-nowrap select-none mt-4 md:mt-8">
        {interests.map((interest, idx) => {
          const isReverse = idx % 2 !== 0;
          return (
            <div
              key={idx}
              // marquee-row is the hover target — CSS selector in index.css
              // pauses the child track on hover
              className="marquee-row overflow-hidden"
            >
              <div className={isReverse ? 'marquee-track-reverse' : 'marquee-track'}>
                {Array.from({ length: COPIES }, (_, i) => (
                  <Fragment key={i}>
                    <span
                      className={`font-display font-bold text-5xl md:text-[7vw] leading-none tracking-tight uppercase ${
                        i % 2 !== 0 ? 'text-foreground opacity-20' : 'text-background'
                      }`}
                      style={{
                        WebkitTextStroke: i % 2 !== 0 ? '1px #0a0a0a' : 'none',
                        marginRight: '2rem',
                      }}
                    >
                      {interest}
                    </span>
                    <span
                      className="font-sans text-xl md:text-3xl font-light text-background/30"
                      style={{ marginRight: '2rem' }}
                    >
                      ✦
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
