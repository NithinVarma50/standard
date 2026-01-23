interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => {
  return (
    <div className="mb-12 md:mb-16">
      <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
        {children}
      </span>
    </div>
  );
};

export default SectionLabel;
