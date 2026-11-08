type Props = {
  /** Colour of the section above: 'dark' fades a dark edge into this section, 'light' a light one. */
  from: 'dark' | 'light';
};

/**
 * Soft gradient at the top of a section so a dark-to-light (or light-to-dark)
 * change melts in instead of cutting. The parent section must be `relative`.
 */
export const SectionSeam = ({ from }: Props) => (
  <div
    aria-hidden="true"
    className={`absolute inset-x-0 top-0 h-24 pointer-events-none bg-gradient-to-b to-transparent ${
      from === 'dark' ? 'from-background' : 'from-foreground'
    }`}
  />
);
