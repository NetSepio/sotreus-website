// Generates PLACEHOLDER raster assets until the real exports from the
// Sotreus design canvas are committed (handoff §9):
//   public/og.png            ← "Social card 1200×630"
//   app/apple-icon.png       ← "Logo system", app icon tile (180×180)
//   public/logo/icon-512.png ← "Logo system", app icon tile (512×512)
// Run with `npm run images` (installs sharp temporarily). Overwrites those three files.
import sharp from 'sharp';

const INK = '#0B0E13';
const BONE = '#E9E6DF';
const AMBER = '#F2B33D';

const mark = (fill = INK) => `
  <g transform="rotate(-24 32 32)"><path d="M3 32A29 10 0 0 1 61 32" stroke="${BONE}" stroke-width="2.2" stroke-dasharray="3 3.4" stroke-linecap="round" fill="none"/></g>
  <circle cx="32" cy="32" r="19" fill="${fill}" stroke="${BONE}" stroke-width="3.6"/>
  <g transform="rotate(-24 32 32)"><path d="M3 32A29 10 0 0 0 61 32" stroke="${BONE}" stroke-width="2.2" stroke-dasharray="3 3.4" stroke-linecap="round" fill="none"/><circle cx="58.3" cy="36.2" r="2.6" fill="${BONE}"/></g>
  <circle cx="32" cy="32" r="6.8" fill="${AMBER}"/>`;

const iconSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${INK}"/>
  <g transform="translate(9 9) scale(0.71875)">${mark()}</g>
</svg>`;

const grid = Array.from({ length: 22 }, (_, i) => `<path d="M${i * 56} 0V630" />`).join('') +
  Array.from({ length: 12 }, (_, i) => `<path d="M0 ${i * 56}H1200" />`).join('');

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="fade" cx="85%" cy="45%" r="60%">
      <stop offset="0" stop-color="#fff" stop-opacity="1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <mask id="m"><rect width="1200" height="630" fill="url(#fade)"/></mask>
  </defs>
  <rect width="1200" height="630" fill="${INK}"/>
  <g stroke="#131820" stroke-width="1" mask="url(#m)">${grid}</g>
  <g fill="none">
    <circle cx="1010" cy="315" r="90" stroke="#232A36"/>
    <circle cx="1010" cy="315" r="170" stroke="#1E2530"/>
    <circle cx="1010" cy="315" r="250" stroke="#1A2029"/>
    <circle cx="1010" cy="315" r="210" stroke="rgba(242,179,61,.35)"/>
  </g>
  <g transform="translate(986 291) rotate(45 12 12)"><rect width="24" height="24" fill="${BONE}" transform="translate(6 6) scale(.5)"/></g>
  <circle cx="930" cy="480" r="8" fill="${AMBER}"/>
  <circle cx="1120" cy="240" r="6" fill="${AMBER}" opacity=".7"/>
  <circle cx="1100" cy="440" r="9" fill="#0B0E13" stroke="#6CB8F0" stroke-width="3"/>
  <circle cx="930" cy="160" r="10" fill="#0B0E13" stroke="#B9A6FF" stroke-width="3" stroke-dasharray="4 4"/>

  <g transform="translate(80 80) scale(0.875)">${mark()}</g>
  <text x="150" y="120" font-family="Menlo, monospace" font-weight="500" font-size="24" letter-spacing="7" fill="${BONE}">SOTREUS</text>

  <text font-family="Georgia, 'Times New Roman', serif" font-size="78" fill="${BONE}" letter-spacing="-1.5">
    <tspan x="80" y="330">See the signals.</tspan>
    <tspan x="80" y="414" font-style="italic" fill="#A3A7AE">Remember the encounters.</tspan>
  </text>
  <text x="80" y="540" font-family="Menlo, monospace" font-size="20" letter-spacing="4" fill="#7C828C">SITUATIONAL AWARENESS, PRIVATELY YOURS</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png().toFile('public/og.png');
await sharp(Buffer.from(iconSvg(180))).png().toFile('app/apple-icon.png');
await sharp(Buffer.from(iconSvg(512))).png().toFile('public/logo/icon-512.png');
console.log('Wrote placeholder public/og.png, app/apple-icon.png, public/logo/icon-512.png');
