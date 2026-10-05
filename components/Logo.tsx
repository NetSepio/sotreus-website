type LogoMarkProps = {
  variant?: 'full' | 'compact';
  size?: number;
  /** Fill of the inner circle: must match the surface the mark sits on. */
  surface?: string;
  className?: string;
};

/** Horizon mark. Decorative by default; give the parent link an aria-label. */
export function LogoMark({
  variant = 'compact',
  size = 30,
  surface = 'var(--ink-950)',
  className,
}: LogoMarkProps) {
  if (variant === 'full') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <g transform="rotate(-24 32 32)">
          <path d="M3 32A29 10 0 0 1 61 32" stroke="#E9E6DF" strokeWidth="2.2" strokeDasharray="3 3.4" strokeLinecap="round" />
        </g>
        <circle cx="32" cy="32" r="19" fill={surface} stroke="#E9E6DF" strokeWidth="3.6" />
        <g transform="rotate(-24 32 32)">
          <path d="M3 32A29 10 0 0 0 61 32" stroke="#E9E6DF" strokeWidth="2.2" strokeDasharray="3 3.4" strokeLinecap="round" />
          <circle cx="58.3" cy="36.2" r="2.6" fill="#E9E6DF" />
        </g>
        <circle cx="32" cy="32" r="6.8" fill="#F2B33D" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g transform="rotate(-24 32 32)">
        <path d="M3 32A29 10 0 0 1 61 32" stroke="#E9E6DF" strokeWidth="4" strokeLinecap="round" />
      </g>
      <circle cx="32" cy="32" r="18" fill={surface} stroke="#E9E6DF" strokeWidth="5" />
      <g transform="rotate(-24 32 32)">
        <path d="M3 32A29 10 0 0 0 61 32" stroke="#E9E6DF" strokeWidth="4" strokeLinecap="round" />
      </g>
      <circle cx="32" cy="32" r="7.5" fill="#F2B33D" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: '.3em',
      }}
    >
      SOTREUS
    </span>
  );
}
