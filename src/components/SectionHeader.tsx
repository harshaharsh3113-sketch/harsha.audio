interface SectionHeaderProps {
  label: string;
  title?: string;
  intro?: string;
}

export default function SectionHeader({ label, title, intro }: SectionHeaderProps) {
  return (
    <div className="break-avoid">
      <span className="label-meta-bright mb-3 block">{label}</span>
      {title && <h2 className="headline-lg mb-3 text-white">{title}</h2>}
      {intro && <p className="body-text max-w-[75%]">{intro}</p>}
    </div>
  );
}
