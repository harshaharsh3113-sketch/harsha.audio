interface TechnicalGridProps {
  categories: {
    label: string;
    items: string[];
  }[];
  columns?: 2 | 3;
}

export default function TechnicalGrid({ categories, columns = 2 }: TechnicalGridProps) {
  // Use CSS grid with auto-fit so it's naturally responsive
  const minColWidth = columns === 3 ? '160px' : '200px';

  return (
    <div
      className="grid border border-[#1F1F1F]"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minColWidth}), 1fr))`,
        gap: '1px',
        background: '#1F1F1F',
      }}
    >
      {categories.map((cat) => (
        <div key={cat.label} className="bg-[#0D0D0D] p-4 flex flex-col gap-3">
          <span className="tech-label" style={{ fontSize: '9px' }}>{cat.label}</span>
          <ul className="flex flex-col gap-1.5">
            {cat.items.map((item) => (
              <li key={item} className="text-[#C8C8C8]" style={{ fontSize: '12px', fontWeight: 400 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
