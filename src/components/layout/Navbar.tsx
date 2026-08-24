

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:py-8 flex justify-between items-center text-white isolate">
      <div className="font-display text-sm tracking-widest uppercase font-medium">
        Medha
      </div>
      <ul className="flex gap-8 font-sans text-xs tracking-widest uppercase font-medium">
        <li><a href="#work" className="hover:opacity-70 transition-opacity">Work</a></li>
        <li><a href="#think" className="hover:opacity-70 transition-opacity">Think</a></li>
        <li><a href="#about" className="hover:opacity-70 transition-opacity">About</a></li>
        <li><a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a></li>
      </ul>
    </nav>
  );
};
