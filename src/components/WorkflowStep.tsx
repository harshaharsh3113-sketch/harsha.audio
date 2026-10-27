interface WorkflowStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function WorkflowStep({
  number,
  title,
  description,
  isLast = false,
}: WorkflowStepProps) {
  return (
    <div className="break-avoid flex gap-4 pb-5">
      <div className="flex flex-col items-center flex-shrink-0">
        <span
          className="text-white"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}
        >
          {number}
        </span>
        {!isLast && (
          <div
            className="w-px bg-[#2A2A2A] mt-2 flex-1"
            style={{ minHeight: '32px' }}
          />
        )}
      </div>
      <div className="flex-1 pt-0">
        <h4
          className="text-white mb-1.5"
          style={{
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </h4>
        <p className="body-text" style={{ fontSize: '12px' }}>
          {description}
        </p>
      </div>
    </div>
  );
}
