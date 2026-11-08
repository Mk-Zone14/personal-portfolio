import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type GalleryImage = { src: string; alt: string; position?: string };

type Props = {
  images: GalleryImage[];
};

/**
 * Scroll-driven gallery: a framed banner grows to fill the screen, then a
 * tilted 3D wall of images unfurls and drifts into place.
 * Built on GSAP ScrollTrigger (scrubbed timeline) so it shares the page's
 * existing Lenis scroll instead of adding framer-motion.
 */
export const UnfurlGallery = ({ images }: Props) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Four columns, each starting at a different image so neighbours differ.
  const columns = useMemo(
    () =>
      [0, 1, 2, 3].map((c) => {
        const col = images.map((_, i) => images[(i + c) % images.length]);
        return [...col, ...col];
      }),
    [images]
  );

  useEffect(() => {
    const wrap = wrapRef.current;
    const banner = bannerRef.current;
    const grid = gridRef.current;
    if (!wrap || !banner || !grid) return;

    const cols = gsap.utils.toArray<HTMLElement>('.unfurl-col', grid);
    const colMoves = [
      [0, -40],
      [-40, 10],
      [0, -40],
      [-30, 20],
    ];
    const gridEnd = { rotationY: -8, rotationX: 4, rotationZ: 2, z: 0 };

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: wrap,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
        },
      });

      // 0 -> 0.15: the framed banner grows to fill the screen
      tl.fromTo(
        banner,
        { width: '90vw', height: '80vh', borderRadius: 48, borderWidth: 4 },
        { width: '100vw', height: '100vh', borderRadius: 0, borderWidth: 0, duration: 0.15 },
        0
      );
      // 0.15 -> 1: the image wall unfurls out of the depth
      tl.fromTo(
        grid,
        { rotationY: -45, rotationX: 25, rotationZ: 15, z: -800 },
        { ...gridEnd, duration: 0.85 },
        0.15
      );
      cols.forEach((col, i) => {
        tl.fromTo(
          col,
          { yPercent: colMoves[i][0] },
          { yPercent: colMoves[i][1], duration: 0.85 },
          0.15
        );
      });
    });

    // Reduced motion: no scroll choreography, show the finished wall.
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(banner, { width: '90vw', height: '80vh', borderRadius: 48, borderWidth: 4 });
      gsap.set(grid, gridEnd);
      cols.forEach((col, i) => gsap.set(col, { yPercent: colMoves[i][1] }));
    });

    return () => mm.revert();
  }, [columns]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full motion-safe:h-[350vh]"
      aria-label="Project screenshots"
      role="group"
    >
      <div className="motion-safe:sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">
        <div
          ref={bannerRef}
          className="relative bg-black overflow-hidden flex items-center justify-center max-w-[1920px] mx-auto border-solid border-foreground/15"
        >
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            style={{ perspective: '1000px' }}
          >
            {/* soft edge fade into the page background */}
            <div className="absolute inset-0 z-20 shadow-[inset_0_100px_150px_-50px_rgba(0,0,0,1),inset_0_-100px_150px_-50px_rgba(0,0,0,1)]" />
            <div className="absolute inset-0 z-20 shadow-[inset_150px_0_150px_-50px_rgba(0,0,0,1),inset_-150px_0_150px_-50px_rgba(0,0,0,1)]" />

            <div
              ref={gridRef}
              style={{ transformStyle: 'preserve-3d' }}
              className="flex gap-4 md:gap-6 justify-center items-center w-[120vw] h-[150vh] origin-center will-change-transform"
            >
              {columns.map((col, ci) => (
                <div
                  key={ci}
                  className="unfurl-col flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px]"
                >
                  {col.map((img, ii) => (
                    <div
                      key={ii}
                      className="w-full h-[200px] sm:h-[300px] md:h-[400px] flex-shrink-0 bg-[#111]"
                    >
                      <img
                        src={img.src}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-80"
                        style={{ objectPosition: img.position ?? 'center' }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
