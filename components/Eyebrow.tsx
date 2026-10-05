import type { ReactNode } from 'react';

/** "02 / How it works" mono label. */
export default function Eyebrow({ num, children }: { num?: string; children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-eyebrow)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--faint)',
      }}
    >
      {num ? `${num} / ` : null}
      {children}
    </div>
  );
}
