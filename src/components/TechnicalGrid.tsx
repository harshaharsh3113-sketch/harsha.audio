interface TechnicalGridProps {
  categories: {
    label: string;
    items: string[];
  }[];
  columns?: 2 | 3;
}

export default function TechnicalGrid({
  categories,
  columns = 2,
}: TechnicalGridProps) {
  const colClass =
    columns === 3
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2';

  return (
    <div className={`grid ${colClass} gap-px bg-[#1F1F1F] border border-[#1F1F1F]`}>
      {categories.map((cat) => (
        <div
          key={cat.label}
          className="bg-[#0D0D0D] p-4 break-avoid"
        >
          <span
            className="tech-label block mb-3"
            style={{ fontSize: '9px' }}
          >
            {cat.label}
          </span>
          <ul className="flex flex-col gap-1.5">
            {cat.items.map((item) => (
              <li
                key={item}
                className="text-[#C8C8C8]"
                style={{ fontSize: '12px', fontWeight: 400 }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
