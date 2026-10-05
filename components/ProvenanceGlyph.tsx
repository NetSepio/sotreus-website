import type { CSSProperties } from 'react';

export type Provenance = 'sensed' | 'network' | 'predicted';

const DEFAULT_SIZE: Record<Provenance, number> = { sensed: 9, network: 11, predicted: 12 };

type Props = {
  kind: Provenance;
  size?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Shape carries the meaning, colour reinforces it:
 * sensed = solid disc, network = ring, predicted = dashed ring.
 * Never reuse these shapes or the blue/lavender for anything else.
 */
export default function ProvenanceGlyph({ kind, size, className, style }: Props) {
  const s = size ?? DEFAULT_SIZE[kind];
  const base: CSSProperties = {
    display: 'inline-block',
    flex: 'none',
    width: s,
    height: s,
    borderRadius: '50%',
    boxSizing: 'border-box',
  };
  const shape: CSSProperties =
    kind === 'sensed'
      ? { background: 'var(--sensed)' }
      : {
          border: `2px ${kind === 'predicted' ? 'dashed' : 'solid'} var(--${kind})`,
          background: 'var(--glyph-bg, var(--ink-950))',
        };
  return <span aria-hidden="true" className={className} style={{ ...base, ...shape, ...style }} />;
}
