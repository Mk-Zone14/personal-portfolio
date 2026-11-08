import { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from './components/sections/Hero';
import { ContextSection } from './components/sections/ContextSection';
import { ProjectShowcase } from './components/sections/ProjectShowcase';
import { Interests } from './components/sections/Interests';
import { CreativeSection } from './components/sections/CreativeSection';
import { ThinkingSection } from './components/sections/ThinkingSection';
import { StackSection } from './components/sections/StackSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { Navbar } from './components/layout/Navbar';
import { BackToTop } from './components/layout/BackToTop';
import { setLenis } from './lib/scroll';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenis);

    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div id="top" />
      <Navbar />
      <main>
        <Hero />
        <ContextSection />
        <ProjectShowcase />
        <Interests />
        <CreativeSection />
        <ThinkingSection />
        <StackSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <BackToTop />
    </>
  );
}

export default App;
