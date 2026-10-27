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
      className="group block border-t border-[#1F1F1F] py-4 transition-colors duration-300 hover:border-[#3A3A3A]"
      style={{ minHeight: '56px' }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Icon size={16} strokeWidth={1.5} className="text-[#888] flex-shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="tech-label mb-0.5">{label}</span>
            <span
              className="text-white link-underline truncate"
              style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9375rem)', fontWeight: 500 }}
            >
              {value}
            </span>
          </div>
        </div>
        {external && (
          <span className="label-meta no-print flex-shrink-0">Open ↗</span>
        )}
      </div>
    </a>
  );
}
