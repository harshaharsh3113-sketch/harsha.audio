import { useState, type CSSProperties } from 'react';
import { Camera } from 'lucide-react';

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  overlay?: boolean;
  overlayStrength?: 'light' | 'medium' | 'heavy';
  rounded?: boolean;
  reveal?: boolean;
}

export default function ImageFrame({
  src,
  alt,
  className = '',
  style,
  overlay = false,
  overlayStrength = 'medium',
  rounded = false,
  reveal = true,
}: ImageFrameProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const overlayOpacity =
    overlayStrength === 'light'
      ? 'bg-black/20'
      : overlayStrength === 'medium'
        ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'
        : 'bg-gradient-to-t from-black/90 via-black/50 to-black/20';

  return (
    <div
      className={`image-frame ${reveal ? 'image-reveal-clip' : ''} ${rounded ? 'rounded-sm' : ''} ${className}`}
      style={style}
    >
      {!error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
        />
      )}
      {error && (
        <div className="image-fallback">
          <Camera size={28} strokeWidth={1} className="text-[#4A4A4A]" />
          <span
            className="tech-label"
            style={{ fontSize: '9px', letterSpacing: '0.15em' }}
          >
            {alt || src.split('/').pop()?.toUpperCase()}
          </span>
        </div>
      )}
      {overlay && !error && (
        <div
          className={`absolute inset-0 pointer-events-none ${overlayOpacity}`}
        />
      )}
    </div>
  );
}
