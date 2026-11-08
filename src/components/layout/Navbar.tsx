export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-foreground/10 text-foreground">
      <nav
        aria-label="Primary"
        className="px-5 md:px-6 py-5 md:py-6 flex justify-between items-center gap-4"
      >
        <a
          href="#top"
          className="font-display text-xs md:text-sm tracking-wider md:tracking-widest uppercase font-medium hover:opacity-70 transition-opacity"
        >
          Medha
        </a>
        <ul className="flex gap-3 md:gap-8 font-sans text-[10px] md:text-xs tracking-wider md:tracking-widest uppercase font-medium">
          <li><a href="#work" className="hover:opacity-70 transition-opacity">Work</a></li>
          <li><a href="#think" className="hover:opacity-70 transition-opacity">Think</a></li>
          <li><a href="#about" className="hover:opacity-70 transition-opacity">About</a></li>
          <li><a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a></li>
          <li>
            <a
              href="/Medhashree_Kallol_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:opacity-70 transition-opacity"
            >
              Resume <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
