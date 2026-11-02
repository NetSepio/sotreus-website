import Link from 'next/link';
import type { ReactNode } from 'react';
import SiteHeader from '@/components/sections/SiteHeader';
import SiteFooter from '@/components/sections/SiteFooter';
import { legalMetadata, SUPPORT_EMAIL } from '@/components/legalMetadata';
import styles from './about.module.css';

export const metadata = legalMetadata(
  '/about/',
  'About Sotreus — private situational awareness by NetSepio',
  'Sotreus is a local-first situational-awareness app for Android, with a pocket Edge sensor, built by NetSepio in Tbilisi, Georgia. What it does, who it is for, the team, key facts and FAQ.',
);

const FOUNDER = { name: 'Shachindra Kumar', url: 'https://www.linkedin.com/in/shachindra92' };
const NETSEPIO_LINKS = [
  ['netsepio.com', 'https://netsepio.com'],
  ['LinkedIn · NetSepio', 'https://www.linkedin.com/company/netsepio'],
  ['X · @netsepio', 'https://x.com/netsepio'],
  ['GitHub · NetSepio', 'https://github.com/NetSepio'],
] as const;
const REPO = 'https://github.com/NetSepio/sotreus';
const BETA_MAIL = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Sotreus beta tester / partner')}`;

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;
const ext = (href: string, label: ReactNode) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {label}
  </a>
);

type Item = { title: string; body: ReactNode };

const DOES: Item[] = [
  {
    title: 'Nearby radio awareness',
    body: 'Your Android phone observes nearby Bluetooth LE advertisements and visible Wi-Fi networks and shows what is here right now: how many radios, and which device families. You get a readable picture of an electronically dense space instead of a wall of MAC addresses.',
  },
  {
    title: 'Encounter memory',
    body: 'Sotreus learns what is normal for each place and keeps a local memory of what you have encountered. Every observation is marked Familiar, New, Persistent or Re-encountered, with an explainable attention score, so you can see what changed and what you have seen before somewhere else.',
  },
  {
    title: 'Sky context: aircraft, drones and satellites',
    body: 'When you switch it on, Sotreus places nearby aircraft, drone Remote ID broadcasts and satellite passes on the same timeline as your local observations. Each one is labelled SENSED, NETWORK or PREDICTED and shows its data age, so you always know where it came from.',
  },
  {
    title: 'Sotreus Edge',
    body: 'Sotreus Edge is a pocket hardware companion (ESP32-S3, Bluetooth 5 LE, 2.4 GHz Wi-Fi, optional GNSS) that keeps scanning on its own battery while your phone sleeps, then syncs the full session to the app. The result is continuous coverage of a journey, not just the moments the app was open.',
  },
  {
    title: 'Mesh Mode for off-grid comms',
    body: 'The same Edge unit carries a LoRa radio and switches to Meshtastic in Mesh Mode, so it doubles as an off-grid messaging node. Edge Mode observes; Mesh Mode communicates; the two never run at once.',
  },
];

const DIFFERENT: Item[] = [
  {
    title: 'Memory, not just a live list',
    body: (
      <>
        Developer scanners such as nRF Connect show the Bluetooth advertisements around you right
        now. Tracker detectors such as AirGuard focus on known tracker models. Sotreus keeps a local
        memory of every distinctive BLE and Wi-Fi fingerprint it observes, so it can tell you what is
        new here and what has re-appeared in a different, unrelated place.
      </>
    ),
  },
  {
    title: 'Ground and sky on one timeline',
    body: (
      <>
        Flight trackers such as Flightradar24 show aircraft, and satellite or drone apps each show
        their own slice. Sotreus puts aircraft (from OpenSky Network), drone Remote ID broadcasts and
        satellite passes (from CelesTrak orbital elements) on the same timeline as your local radio
        observations, and never blurs which source each one came from.
      </>
    ),
  },
  {
    title: 'Local-first, with no account',
    body: (
      <>
        Wardriving apps such as WiGLE WiFi are built around contributing observations to a shared
        public map. Sotreus has no account and no mandatory cloud: radio history, places and journeys
        stay on your phone, with optional encryption at rest, and satellite passes are computed
        without sending your location anywhere.
      </>
    ),
  },
  {
    title: 'Evidence, not alarms',
    body: (
      <>
        “Spy camera detector” apps tend to announce threats they cannot verify. Sotreus says what it
        observed, where the data came from and how old it is, and never claims intent: “Remote ID
        broadcast observed”, not “drone operator found”. You decide what the evidence means.
      </>
    ),
  },
  {
    title: 'Receive-only and open source',
    body: (
      <>
        Sotreus only listens to what nearby electronics already broadcast. It never connects to,
        interrogates, deauthenticates, jams or injects into them. The Android app’s source is public
        on {ext(REPO, 'GitHub')} under GPL-3.0, so anyone can check that claim.
      </>
    ),
  },
  {
    title: 'A dedicated sensor when the phone can’t',
    body: 'Phone-only apps are limited by Android’s scan throttling and battery policy. Sotreus Edge keeps its own scan schedule, location and battery, so observation continues when the phone is asleep, in a bag or out of power.',
  },
];

const USERS = [
  'Journalists, researchers and fixers who work in sensitive places and need to read a space quickly.',
  'People living or travelling where airspace is busy or contested, who want aircraft, drones and satellite passes in one calm view.',
  'Privacy-conscious people who want to see what is broadcasting around them in a world of trackers, smart cameras and always-on wearables.',
  'Frequent travellers who want a baseline of a new room, rental, venue or route.',
  'Security and RF researchers who want an open-source, receive-only Bluetooth LE and Wi-Fi observer.',
  'Meshtastic and off-grid communities, through Sotreus Edge’s Mesh Mode.',
  'Solana Mobile and Seeker owners, through the Solana dApp Store.',
];

const STEPS: Item[] = [
  {
    title: '1. Install the app',
    body: (
      <>
        Download the free APK from {ext(`${REPO}/releases/latest`, 'GitHub Releases')} for any phone
        on Android 9 or later, or install from the Solana dApp Store on a Seeker or other Solana
        Mobile phone. There is no account to create. See <Link href="/#download">Download</Link>.
      </>
    ),
  },
  {
    title: '2. Run your first scan',
    body: 'Grant the Bluetooth and location permissions Android requires for scanning. Sotreus starts observing nearby Bluetooth LE and visible Wi-Fi straight away and answers the first question: what is here?',
  },
  {
    title: '3. Let your places build a baseline',
    body: 'As you return to the places you use, Sotreus learns what is normal for each one. Mark devices as yours or expected, and the view settles down to what is new, persistent or re-encountered.',
  },
  {
    title: '4. Switch on sky context, if you want it',
    body: 'Aircraft context is requested from OpenSky Network only when you turn it on, with Exact area, Coarse area or Off. Satellite passes are computed on your phone from CelesTrak orbital elements, and Remote ID broadcasts are received directly over radio.',
  },
  {
    title: '5. Add Sotreus Edge',
    body: (
      <>
        The first Sotreus Edge field units are going to early-access members.{' '}
        <Link href="/#access">Join early access</Link> to be told when they are available.
      </>
    ),
  },
  {
    title: 'Support and feedback',
    body: (
      <>
        Email {mail} for support, bug reports and partnership questions, open an issue on{' '}
        {ext(`${REPO}/issues`, 'GitHub')}, or follow progress on {ext('https://x.com/netsepio', 'X · @netsepio')}.
        Beta testers work directly with the team that builds the app.
      </>
    ),
  },
];

const FACTS: [string, ReactNode][] = [
  ['Product name', 'Sotreus'],
  ['Type', 'Private situational-awareness app for Android, with a companion hardware sensor'],
  ['Developer', 'NetSepio LLC'],
  ['Launched', '2026'],
  ['Founder', ext(FOUNDER.url, FOUNDER.name)],
  ['Company founded', 'NetSepio, 2024'],
  ['Headquarters', 'Tbilisi, Georgia'],
  ['Website', <Link key="w" href="/">sotreus.com</Link>],
  [
    'Core offering',
    'Local-first view of nearby Bluetooth LE and Wi-Fi, encounter memory, and aircraft, drone Remote ID and satellite-pass context',
  ],
  ['Platforms', 'Android 9+ (APK on GitHub Releases, Solana dApp Store)'],
  ['Hardware', 'Sotreus Edge: ESP32-S3, Bluetooth 5 LE, 2.4 GHz Wi-Fi, LoRa (Meshtastic), optional GNSS'],
  ['Pricing', 'Android app is a free download; Sotreus Edge pricing not yet announced'],
  ['Account required', 'No'],
  ['Data storage', 'On your device; no mandatory cloud; optional encryption at rest'],
  ['Context sources', 'OpenSky Network (aircraft), CelesTrak (orbital elements), Remote ID received over radio'],
  ['Source code', ext(REPO, 'GPL-3.0 · github.com/NetSepio/sotreus')],
  ['Status', 'Android app live; Sotreus Edge in early access; recruiting beta testers and partners'],
  ['Alternatives', 'nRF Connect, AirGuard, WiGLE WiFi, Flightradar24 (each covers one part of what Sotreus does)'],
  ['Contact', mail],
  [
    'Social',
    <>
      {ext('https://x.com/netsepio', 'X · @netsepio')} ·{' '}
      {ext('https://www.linkedin.com/company/netsepio', 'LinkedIn · NetSepio')} ·{' '}
      {ext('https://github.com/NetSepio', 'GitHub · NetSepio')}
    </>,
  ],
];

// Plain strings: the same text renders on the page and feeds the FAQPage JSON-LD.
const FAQ: [string, string][] = [
  [
    'What is Sotreus?',
    'Sotreus is a local-first situational-awareness app for Android, made by NetSepio. It shows what nearby electronics are broadcasting, remembers what you have encountered before, and can add aircraft, drone Remote ID and satellite-pass context.',
  ],
  [
    'Will Sotreus find every hidden camera or tracker?',
    'No, and it does not claim to. Sotreus shows evidence it can observe over Bluetooth LE and Wi-Fi, such as device-family signatures, recurrence and changes in a place, and leaves the conclusion to you. Devices that do not broadcast on those bands are not visible to it.',
  ],
  [
    'Does my data or location leave my phone?',
    'Your radio history, places and journeys stay in a local database on your phone and are not sent to NetSepio. Aircraft context sends an area to OpenSky Network only when you switch it on, and you can choose a coarse area or turn it off. Satellite passes are computed on the phone.',
  ],
  [
    'Is Sotreus free?',
    'The Android app is a free download from GitHub Releases, and its source code is public under GPL-3.0. Pricing for Sotreus Edge has not been announced yet.',
  ],
  [
    'Which phones does Sotreus run on?',
    'Any Android phone running Android 9 or later, using the APK from GitHub Releases. Solana Mobile phones such as Seeker can install it from the Solana dApp Store. There is no iPhone version today.',
  ],
  [
    'Do I need Sotreus Edge?',
    'No. The app works on its own, using your phone as the sensor. Edge adds continuous scanning while the phone sleeps, its own GNSS location and battery, and an off-grid Meshtastic mode.',
  ],
  [
    'Is Sotreus a missile or air-raid warning system?',
    'No. Aircraft data is network-reported and can be delayed or incomplete, and Sotreus does not receive military or defence alerts. Always follow official civil-defence warnings.',
  ],
  [
    'Does Sotreus transmit or interfere with other devices?',
    'No. Sotreus is receive-only: it never connects to, jams, deauthenticates, injects into or interrogates the devices around it. In Mesh Mode, Sotreus Edge simply runs as a Meshtastic node on your own LoRa mesh.',
  ],
  [
    'How can I become a beta tester or partner?',
    `Email ${SUPPORT_EMAIL} with a line about who you are and how you would use Sotreus. We are especially keen to hear from journalists, researchers, digital-safety organisations and hardware or distribution partners.`,
  ],
];

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
  {
    id: 'what-sotreus-does',
    title: 'What Sotreus does',
    body: <Items items={DOES} />,
  },
  {
    id: 'what-makes-sotreus-different',
    title: 'What makes Sotreus different',
    body: <Items items={DIFFERENT} />,
  },
  {
    id: 'who-uses-sotreus',
    title: 'Who uses Sotreus',
    body: (
      <>
        <ul className={styles.bullets}>
          {USERS.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
        <p>
          Early users and the journalists we have spoken with have given Sotreus a warm reception,
          and their feedback is shaping what we build next.
        </p>
        <div className={styles.callout}>
          <h3 className={styles.h3}>We’re looking for beta testers and partners.</h3>
          <p>
            Newsrooms, researchers, digital-safety organisations and hardware or distribution
            partners: help shape the app and the first Sotreus Edge field units.
          </p>
          <div className={styles.ctas}>
            <a className="btn-primary" href={BETA_MAIL}>
              Become a beta tester
            </a>
            <a className="btn-ghost" href={BETA_MAIL}>
              Partner with us
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'the-team-behind-sotreus',
    title: 'The team behind Sotreus',
    body: (
      <div className={styles.items}>
        <div className={styles.item}>
          <h3 className={styles.h3}>Founder: {FOUNDER.name}</h3>
          <p>
            Sotreus is the brainchild of {FOUNDER.name}, who started it at NetSepio in 2026 to turn
            NetSepio’s privacy and security work toward personal, physical security.
          </p>
          <div className={styles.links}>{ext(FOUNDER.url, 'LinkedIn · Shachindra')}</div>
        </div>
        <div className={styles.item}>
          <h3 className={styles.h3}>Why Sotreus exists</h3>
          <p>
            2026 has been a wild year. In the UAE, during a year of rising regional conflict, staying
            safe meant checking flight trackers, drone reports and missile alerts in a constant
            state of panic, stitched together from apps that were never built to be read together.
            At the same time, camera-equipped smart glasses such as Meta’s were making it easy to
            record people who never agreed to it.
          </p>
          <p>
            Sotreus is the answer to both: a calm, honest view of what is around and above you that
            stays on your own device.
          </p>
          <blockquote className={styles.quote}>
            <p>
              “I wanted to rage-code and fight techno-fascism with the skills I had, and put them to
              their best use: defending personal security.”
            </p>
            <footer>{FOUNDER.name} · Founder</footer>
          </blockquote>
        </div>
        <div className={styles.item}>
          <h3 className={styles.h3}>Built by NetSepio</h3>
          <p>
            Sotreus is a product of <strong>NetSepio LLC</strong>, a privacy and security company
            founded in 2024 and rooted in the cypherpunk ethos. NetSepio’s small team of 2–10 people
            builds decentralized networking (DePIN), dVPN and cybersecurity tools, and is
            headquartered in Tbilisi, Georgia.
          </p>
          <div className={styles.links}>
            {NETSEPIO_LINKS.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'how-sotreus-works',
    title: 'How Sotreus works',
    body: <Items items={STEPS} />,
  },
  {
    id: 'key-facts',
    title: 'Key facts',
    body: (
      <dl className={styles.facts}>
        {FACTS.map(([k, v]) => (
          <div key={k} className={styles.fact}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    id: 'faq',
    title: 'Frequently asked questions',
    body: <Items items={FAQ.map(([title, body]) => ({ title, body }))} />,
  },
];

function Items({ items }: { items: Item[] }) {
  return (
    <div className={styles.items}>
      {items.map((it) => (
        <div key={it.title} className={styles.item}>
          <h3 className={styles.h3}>{it.title}</h3>
          <p>{it.body}</p>
        </div>
      ))}
    </div>
  );
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://sotreus.com/about/',
      url: 'https://sotreus.com/about/',
      name: 'About Sotreus',
      about: { '@id': 'https://sotreus.com/#app' },
      publisher: { '@id': 'https://sotreus.com/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://sotreus.com/#app',
      name: 'Sotreus',
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Android 9+',
      url: 'https://sotreus.com',
      downloadUrl: `${REPO}/releases/latest`,
      license: 'https://www.gnu.org/licenses/gpl-3.0.html',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@id': 'https://sotreus.com/#organization' },
      creator: { '@id': 'https://sotreus.com/#founder' },
    },
    {
      '@type': 'Person',
      '@id': 'https://sotreus.com/#founder',
      name: FOUNDER.name,
      jobTitle: 'Founder, Sotreus',
      worksFor: { '@id': 'https://sotreus.com/#organization' },
      sameAs: [FOUNDER.url],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader home={false} />
      <main className={styles.main}>
        <div className={`container ${styles.inner}`}>
          <header className={styles.head}>
            <div className={styles.eyebrow}>About Sotreus</div>
            <h1 className={styles.title}>
              Protect the self. <em>Perceive the world.</em>
            </h1>
            <p className={styles.lead}>
              <strong>
                Sotreus is a local-first situational-awareness app for Android that shows what
                nearby electronics are broadcasting, remembers what you have encountered before, and
                adds aircraft, drone and satellite context
              </strong>{' '}
              — for journalists, travellers and privacy-conscious people who need to read the space
              around them without handing their data to anyone. It is built by NetSepio in Tbilisi,
              Georgia.
            </p>
            <div className={styles.ctas}>
              <Link className="btn-primary" href="/#download">
                Download for Android
              </Link>
              <a className="btn-ghost" href="#key-facts">
                Key facts
              </a>
            </div>
          </header>

          <div className={styles.layout}>
            <nav aria-label="On this page" className={styles.toc}>
              <div className={styles.tocTitle}>On this page</div>
              <ol>
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>
                      <span className={styles.tocNum}>{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className={styles.body}>
              {SECTIONS.map((s, i) => (
                <section key={s.id} id={s.id} className={styles.section}>
                  <h2 className={styles.h2}>
                    <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </h2>
                  {s.body}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter home={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
