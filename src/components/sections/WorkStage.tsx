import { useLayoutEffect, useMemo, useRef, type CSSProperties } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollCharSpread } from '../ui/ScrollCharSpread';
import type { Project } from './projects-data';

gsap.registerPlugin(ScrollTrigger);

const hexOf = (p: Project) => /#[0-9a-fA-F]{3,8}/.exec(p.color)?.[0] ?? '#121212';

// Timeline layout (in timeline units; one unit is ~45% of a screen of scrolling)
const ENTER_FIRST = 4.0; // when the first case study starts arriving
const STEP = 2.5; // enter-to-enter spacing between case studies
const HOLD = 2.0; // enter-to-exit time for each case study

/**
 * One continuous, scroll-scrubbed sequence for Selected Work:
 * a borderless tilted 3D wall of the project
 * screenshots unfurls, then the wall flattens away and each case study builds
 * in on the same stage (image, title, text, tech, links) before wiping to the next.
 * With prefers-reduced-motion it falls back to a plain stack of case studies.
 */
export const WorkStage = ({ projects }: { projects: Project[] }) => {
  const stageRef = useRef<HTMLDivElement>(null);

  const columns = useMemo(
    () =>
      [0, 1, 2, 3].map((c) => {
        const col = projects.map((_, i) => projects[(i + c) % projects.length]);
        return [...col, ...col];
      }),
    [projects]
  );

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const q = <T extends Element = HTMLElement>(sel: string, root: ParentNode = stage) =>
        gsap.utils.toArray<T>(sel, root);

      const head = q('.ws-head')[0];
      const seam = q('.ws-seam')[0];
      const wall = q('.ws-wall')[0];
      const grid = q('.ws-grid')[0];
      const cols = q('.ws-col');
      const panels = q('.ws-panel');
      const dots = q('.ws-dot');
      const dotWrap = q('.ws-dots')[0];

      const colMoves = [
        [0, -40],
        [-40, 10],
        [0, -40],
        [-30, 20],
      ];

      // starting state
      gsap.set(panels, { autoAlpha: 0 });
      panels.forEach((p) => {
        gsap.set(q('[data-fade]', p), { y: 28, autoAlpha: 0 });
        gsap.set(q('[data-title]', p), { yPercent: 110 });
        gsap.set(q('[data-img]', p), { autoAlpha: 0 });
      });
      gsap.set(dotWrap, { autoAlpha: 0 });
      gsap.set(stage, { backgroundColor: '#0a0a0a' });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => '+=' + tl.duration() * window.innerHeight * 0.45,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. the heading and the soft top edge lift away while the wall comes up out of the dark
      tl.to([head, seam], { y: -70, autoAlpha: 0, duration: 0.8, ease: 'power1.in' }, 0);
      tl.fromTo(wall, { autoAlpha: 0.35 }, { autoAlpha: 1, duration: 1 }, 0);

      // 2. the 3D wall unfurls and drifts
      tl.fromTo(
        grid,
        { rotationY: -42, rotationX: 22, rotationZ: 13, z: -600 },
        { rotationY: -8, rotationX: 4, rotationZ: 2, z: 0, duration: 2.6 },
        1
      );
      cols.forEach((col, i) => {
        tl.fromTo(
          col,
          { yPercent: colMoves[i][0] },
          { yPercent: colMoves[i][1], duration: 3.4 },
          1
        );
      });

      // 3. the wall flattens, rushes toward the viewer and dissolves into the first case study
      tl.to(
        grid,
        { rotationY: 0, rotationX: 0, rotationZ: 0, z: 250, duration: 1.2, ease: 'power2.in' },
        3.6
      );
      tl.to(grid, { autoAlpha: 0, duration: 0.9, ease: 'power1.in' }, 3.9);

      // 4. case studies
      tl.to(dotWrap, { autoAlpha: 1, duration: 0.5 }, ENTER_FIRST);

      panels.forEach((panel, i) => {
        const enter = ENTER_FIRST + i * STEP;
        const exit = enter + HOLD;
        const img = q('[data-img]', panel);
        const title = q('[data-title]', panel);
        const fades = q('[data-fade]', panel);

        tl.set(panel, { autoAlpha: 1 }, enter);
        tl.to(
          stage,
          { backgroundColor: hexOf(projects[i]), duration: 0.8, ease: 'power1.out' },
          enter
        );

        // image: first one grows out of the wall, the rest wipe in from the right
        if (i === 0) {
          tl.fromTo(
            img,
            { autoAlpha: 0, scale: 1.18, clipPath: 'inset(14% 14% 14% 14%)' },
            { autoAlpha: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.out' },
            enter
          );
        } else {
          tl.fromTo(
            img,
            { autoAlpha: 1, scale: 1.08, clipPath: 'inset(0% 0% 0% 100%)' },
            { scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'power3.out' },
            enter
          );
        }
        tl.fromTo(title, { yPercent: 110 }, { yPercent: 0, duration: 0.7, ease: 'power3.out' }, enter + 0.25);
        tl.fromTo(
          fades,
          { y: 28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.09, ease: 'power2.out' },
          enter + 0.35
        );

        // progress dots
        tl.to(dots[i], { scale: 1.7, opacity: 1, duration: 0.4 }, enter);

        if (i < panels.length - 1) {
          tl.to(fades, { y: -24, autoAlpha: 0, duration: 0.45, stagger: 0.04, ease: 'power2.in' }, exit);
          tl.to(title, { yPercent: -110, duration: 0.45, ease: 'power2.in' }, exit);
          tl.to(
            img,
            { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.04, duration: 0.7, ease: 'power2.inOut' },
            exit + 0.1
          );
          tl.set(panel, { autoAlpha: 0 }, exit + 0.85);
          tl.to(dots[i], { scale: 1, opacity: 0.3, duration: 0.4 }, exit);
        }
      });

      // hold on the last case study
      tl.to({}, { duration: 0.01 }, ENTER_FIRST + (panels.length - 1) * STEP + HOLD);
    });

    return () => mm.revert();
  }, [projects]);

  return (
    <div
      ref={stageRef}
      className="relative w-full overflow-hidden bg-background motion-safe:h-screen"
    >
      {/* Heading lives on the stage, so the title and the wall are one scene */}
      <div className="ws-head relative z-10 px-6 pt-28 md:pt-32 motion-reduce:pt-36 motion-reduce:pb-16">
        <ScrollCharSpread
          className="font-display font-medium text-4xl md:text-7xl uppercase tracking-tight max-w-[90vw] mx-auto"
          text="Selected Work"
        />
      </div>

      {/* soft light-to-dark edge so the section above melts into the stage */}
      <div className="ws-seam absolute inset-x-0 top-0 h-24 z-[5] bg-gradient-to-b from-foreground to-transparent pointer-events-none" aria-hidden="true" />

      {/* Layer 1: borderless 3D wall that fades into the page background (animated mode only) */}
      <div className="ws-wall absolute inset-0 motion-reduce:hidden" aria-hidden="true">
        <div className="ws-banner absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none" style={{ perspective: '1000px' }}>
            <div className="absolute inset-0 z-20 shadow-[inset_0_160px_160px_-60px_#0a0a0a,inset_0_-160px_160px_-60px_#0a0a0a]" />
            <div className="absolute inset-0 z-20 shadow-[inset_160px_0_160px_-60px_#0a0a0a,inset_-160px_0_160px_-60px_#0a0a0a]" />
            <div
              className="ws-grid flex gap-4 md:gap-6 justify-center items-center w-[120vw] h-[150vh] origin-center will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {columns.map((col, ci) => (
                <div key={ci} className="ws-col flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px]">
                  {col.map((p, ii) => (
                    <div key={ii} className="w-full h-[200px] sm:h-[300px] md:h-[400px] flex-shrink-0 bg-[#111]">
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-80"
                        style={{ objectPosition: p.imagePosition ?? 'center' }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2: case studies, built in one after another on the same stage */}
      {projects.map((project) => (
        <article
          key={project.number}
          className={`ws-panel flex items-center motion-safe:absolute motion-safe:inset-0 motion-reduce:relative motion-reduce:min-h-screen motion-reduce:border-t motion-reduce:border-muted/10 motion-reduce:bg-[var(--ws-bg)]`}
          style={{ '--ws-bg': hexOf(project) } as CSSProperties}
        >
          <div className="max-w-[90vw] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 px-6 pt-20 pb-8 md:pt-24 motion-reduce:py-24">
            <div className="order-2 lg:order-1 col-span-1 lg:col-span-4 flex flex-col justify-center">
              <div data-fade className="font-sans text-xs tracking-widest uppercase text-muted mb-3 md:mb-4">
                Case Study {project.number}
              </div>

              <div className="overflow-hidden py-1 -my-1 mb-3 md:mb-5">
                <h3
                  data-title
                  className={
                    project.longTitle
                      ? 'font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.05] [font-synthesis:none] break-words hyphens-auto'
                      : project.compactTitle
                        ? 'font-display font-bold text-4xl md:text-6xl lg:text-5xl uppercase tracking-tight leading-[0.95] [font-synthesis:none]'
                        : 'font-display font-bold text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.95] [font-synthesis:none]'
                  }
                >
                  {project.title}
                </h3>
              </div>

              <div data-fade className="font-sans text-sm tracking-widest uppercase text-accent mb-4 md:mb-6">
                {project.category}
              </div>

              <p data-fade className="font-sans text-sm md:text-lg text-foreground/80 font-light leading-relaxed max-w-sm mb-5 md:mb-8">
                {project.description}
              </p>

              <div data-fade className="mb-5 md:mb-8">
                <div className="font-sans text-xs tracking-widest uppercase text-muted mb-3">Technology</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs border border-muted/20 rounded-full font-sans text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div data-fade className="flex gap-6">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-xs uppercase tracking-widest border-b border-accent pb-1 hover:text-accent transition-colors"
                  >
                    View Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-xs uppercase tracking-widest border-b border-muted pb-1 text-muted hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2 col-span-1 lg:col-span-8 flex items-center justify-center">
              <div data-img className="w-full aspect-[4/3] md:aspect-video rounded-sm overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full"
                  style={{
                    objectFit: (project.objectFit ?? 'cover') as 'cover' | 'contain' | 'fill' | 'none' | 'scale-down',
                    objectPosition: project.imagePosition ?? 'center',
                  }}
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* Progress dots */}
      <div
        className="ws-dots absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 motion-reduce:hidden"
        aria-hidden="true"
      >
        {projects.map((p) => (
          <span key={p.number} className="ws-dot block w-1.5 h-1.5 rounded-full bg-foreground opacity-30" />
        ))}
      </div>
    </div>
  );
};
