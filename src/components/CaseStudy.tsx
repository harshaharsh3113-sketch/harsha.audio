import ImageFrame from './ImageFrame';

interface CaseStudyProps {
  number: string;
  title: string;
  location?: string;
  role: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  responsibilities: string[];
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}

export default function CaseStudy({
  number,
  title,
  location,
  role,
  description,
  specs,
  responsibilities,
  image,
  imageAlt,
  imagePosition = 'left',
}: CaseStudyProps) {
  const imageEl = (
    <div className="flex flex-col gap-2">
      <ImageFrame
        src={image}
        alt={imageAlt}
        className="aspect-[4/3] w-full"
      />
    </div>
  );

  return (
    <div className="break-avoid border-t border-[#1F1F1F] pt-5">
      <div className="grid grid-cols-12 gap-5">
        {imagePosition === 'left' && (
          <div className="col-span-5">{imageEl}</div>
        )}
        <div className="col-span-7 flex flex-col">
          <div className="flex items-baseline gap-3 mb-1">
            <span className="label-meta-bright">{number}</span>
          </div>
          <h3 className="headline-sm text-white mb-1.5">{title}</h3>
          {location && (
            <p className="label-meta mb-2" style={{ color: '#6B6B6B' }}>
              {location}
            </p>
          )}
          <p className="body-text mb-3" style={{ fontSize: '12px' }}>
            <span className="text-[#A8A8A8]">Role — </span>
            <span className="text-white">{role}</span>
          </p>
          <p className="body-text mb-3" style={{ fontSize: '12px' }}>
            {description}
          </p>
          <div className="grid grid-cols-1 gap-1.5 mb-3">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex gap-2"
                style={{ fontSize: '11px', lineHeight: '1.5' }}
              >
                <span
                  className="tech-label flex-shrink-0 w-[90px] pt-[2px]"
                  style={{ fontSize: '8px' }}
                >
                  {spec.label}
                </span>
                <span className="text-[#C0C0C0]">{spec.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-1">
            <span
              className="tech-label block mb-1.5"
              style={{ fontSize: '8px' }}
            >
              Responsibilities
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {responsibilities.map((r) => (
                <span
                  key={r}
                  className="text-[#888]"
                  style={{ fontSize: '10.5px' }}
                >
                  {r}
                  <span className="text-[#3A3A3A]"> ·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        {imagePosition === 'right' && (
          <div className="col-span-5">{imageEl}</div>
        )}
      </div>
    </div>
  );
}
