import { ScrollCharSpread } from '../ui/ScrollCharSpread';
import { WorkStage } from './WorkStage';
import { projects } from './projects-data';

export const ProjectShowcase = () => {
  return (
    <section id="work" className="relative w-full bg-background text-foreground z-10 overflow-x-clip">
      <div className="pt-36 pb-16 px-6">
        <ScrollCharSpread
          className="font-display font-medium text-4xl md:text-7xl uppercase tracking-tight max-w-[90vw] mx-auto mb-16"
          text="Selected Work"
        />
      </div>

      <WorkStage projects={projects} />
    </section>
  );
};
