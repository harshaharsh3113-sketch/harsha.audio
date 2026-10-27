import type { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="break-avoid group block border-t border-[#1F1F1F] pt-4 pb-4 transition-colors duration-300 hover:border-[#3A3A3A]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon size={16} strokeWidth={1.5} className="text-[#888]" />
          <div className="flex flex-col">
            <span className="tech-label mb-1" style={{ fontSize: '8px' }}>
              {label}
            </span>
            <span
              className="text-white link-underline"
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              {value}
            </span>
          </div>
        </div>
        {external && (
          <span className="label-meta no-print">Open</span>
        )}
      </div>
    </a>
  );
}
