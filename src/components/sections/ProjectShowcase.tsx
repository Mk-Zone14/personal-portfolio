import { WorkStage } from './WorkStage';
import { projects } from './projects-data';

export const ProjectShowcase = () => {
  return (
    <section id="work" className="relative w-full bg-background text-foreground z-10 overflow-x-clip">
      <WorkStage projects={projects} />
    </section>
  );
};
