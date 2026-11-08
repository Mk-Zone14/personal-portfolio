export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-foreground/10 text-foreground">
      <nav
        aria-label="Primary"
        className="px-6 py-5 md:py-6 flex justify-between items-center"
      >
        <a
          href="#top"
          className="font-display text-sm tracking-widest uppercase font-medium hover:opacity-70 transition-opacity"
        >
          Medha
        </a>
        <ul className="flex gap-6 md:gap-8 font-sans text-xs tracking-widest uppercase font-medium">
          <li><a href="#work" className="hover:opacity-70 transition-opacity">Work</a></li>
          <li><a href="#think" className="hover:opacity-70 transition-opacity">Think</a></li>
          <li><a href="#about" className="hover:opacity-70 transition-opacity">About</a></li>
          <li><a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
