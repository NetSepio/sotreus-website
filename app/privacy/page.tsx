import Link from 'next/link';
import LegalPage, { type LegalSection } from '@/components/LegalPage';
import {
  legalMetadata,
  LEGAL_UPDATED,
  POSTAL_ADDRESS,
  SUPPORT_EMAIL,
} from '@/components/legalMetadata';

export const metadata = legalMetadata(
  '/privacy/',
  'Privacy Policy — Sotreus',
  'How Sotreus handles information: no account, a local database first, opt-in sky context, and no tracking on sotreus.com.',
);

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

const summary = [
  <>
    <strong>No account required.</strong> Scanning, memory, tagging and reports work without signing
    up for anything.
  </>,
  <>
    <strong>Your radio history stays on your device.</strong> Observations, places, journeys and
    tags live in a local database, with optional encryption at rest. NetSepio does not receive them.
  </>,
  <>
    <strong>Receive-only.</strong> Sotreus listens to what nearby electronics already broadcast. It
    never connects to, interrogates or interferes with them.
  </>,
  <>
    <strong>Context is opt-in.</strong> Aircraft data is requested from an external provider only
    when you switch it on, using Exact area, Coarse area or Off.
  </>,
  <>
    <strong>Satellite passes are computed on your device.</strong> Your location is not sent
    anywhere to compute them.
  </>,
  <>
    <strong>No tracking on sotreus.com.</strong> No analytics, no cookies, no tracking pixels and no
    third-party scripts.
  </>,
  <>
    <strong>We don’t sell personal information</strong> and we don’t use your observations for
    advertising.
  </>,
];

const sections: LegalSection[] = [
  {
    id: 'scope',
    title: 'Who we are and what this covers',
    body: (
      <>
        <p>
          Sotreus is a product of <strong>NetSepio LLC</strong> (“NetSepio”, “we”, “us”). This
          policy covers the Sotreus Android app, the Sotreus Edge device and its firmware, the
          sotreus.com website, the early-access list, and support conversations (together, the
          “Services”).
        </p>
        <p>
          Sotreus is in development and early access. This policy describes how the app and Sotreus
          Edge are designed to handle information. If that design changes, we will update this page
          before the change takes effect.
        </p>
      </>
    ),
  },
  {
    id: 'on-device',
    title: 'Information that stays on your device',
    body: (
      <>
        <p>
          Sotreus is local-first. The app keeps the following in a local database on your phone. It
          is not uploaded to NetSepio, and there is no mandatory cloud:
        </p>
        <ul>
          <li>
            <strong>Radio observations:</strong> nearby Bluetooth LE advertisements and visible
            Wi-Fi access points, with signal strength, timestamps and the fingerprints Sotreus
            derives from them.
          </li>
          <li>
            <strong>Encounter memory:</strong> whether something is familiar, new, persistent or
            re-encountered, plus attention scores and the evidence behind them.
          </li>
          <li>
            <strong>Places, sessions and journeys</strong>, including your phone’s location when you
            allow location access, so observations can be anchored to where they happened.
          </li>
          <li>
            <strong>Tags, labels and signatures</strong> you create, such as marking a device as
            yours or expected.
          </li>
          <li>
            <strong>Sky context you keep:</strong> aircraft, drone Remote ID broadcasts and
            satellite passes placed on your timeline.
          </li>
          <li>
            <strong>Settings</strong>, such as retention rules and sky-query precision.
          </li>
        </ul>
        <p>
          You set retention: keep everything, keep a number of days, keep tagged items only, or
          delete a place or session outright. Optional encryption at rest protects the local
          database. Uninstalling the app removes its local data, subject to how Android handles app
          storage and any backups you have enabled.
        </p>
      </>
    ),
  },
  {
    id: 'other-devices',
    title: 'Information about other people’s devices',
    body: (
      <>
        <p>
          The radios Sotreus observes usually belong to other people and organisations. Sotreus only
          records what those devices publicly broadcast, such as advertised identifiers,
          device-family signatures and signal strength. It does not connect to them, decrypt their
          traffic or send anything to them.
        </p>
        <p>
          These observations stay on your device or your Sotreus Edge. NetSepio does not receive
          them. Signal strength indicates rough proximity, never direction, and Sotreus does not try
          to identify the people behind a device. You are responsible for using what you observe
          lawfully and respectfully, as described in our <Link href="/terms/">Terms</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'edge',
    title: 'Sotreus Edge',
    body: (
      <>
        <p>
          In <strong>Edge Mode</strong>, Sotreus Edge scans, timestamps and stores observations on
          its own flash storage in an append-only log with bounded retention, optionally anchored by
          its own GNSS location. It syncs that log to your app over Bluetooth. Edge observations are
          not sent to NetSepio, and Edge does not transmit over LoRa in this mode.
        </p>
        <p>
          In <strong>Mesh Mode</strong>, the app switches Edge to Meshtastic so it can join your
          LoRa mesh, and environmental observation is paused. Messages and node information you send
          over the mesh are handled by Meshtastic and are visible to other nodes in your mesh
          according to how you configure it. They are not routed through NetSepio.
        </p>
      </>
    ),
  },
  {
    id: 'context',
    title: 'Optional sky context',
    body: (
      <>
        <p>
          Local sensing works fully offline. Aircraft and orbital feeds are modules you switch on.
          Every context result shows where it came from and how old it is.
        </p>
        <ul>
          <li>
            <strong>Aircraft (NETWORK):</strong> when this module is on, the app asks an external
            aircraft-data provider over the internet for traffic near you. <em>Exact area</em> sends
            an area around your position, <em>Coarse area</em> sends a deliberately broad area, and{' '}
            <em>Off</em> sends nothing. The provider receives that area and, like any internet
            service, your device’s IP address, and handles them under its own privacy policy. The
            source is shown with every result.
          </li>
          <li>
            <strong>Satellite passes (PREDICTED):</strong> computed on your device from public
            orbital elements. The app downloads orbital-element data, but that download does not
            include your location.
          </li>
          <li>
            <strong>Drone Remote ID (SENSED):</strong> received directly over radio by your phone or
            Sotreus Edge. No network request is involved.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing-exports',
    title: 'Exports and sharing',
    body: (
      <p>
        Nothing leaves your device unless you export or share it. Exports default to coarse
        coordinates, time buckets and hashed identifiers, and you can review an export before you
        send it. Once you share an export, the recipient controls their copy.
      </p>
    ),
  },
  {
    id: 'website',
    title: 'The sotreus.com website',
    body: (
      <>
        <p>
          sotreus.com is a static website. It uses no analytics, no cookies, no tracking pixels and
          no third-party scripts, and its fonts are served from sotreus.com itself.
        </p>
        <p>
          The walkthrough video on the home page is hosted on YouTube. Nothing is requested from
          YouTube until you press play. The player then loads from YouTube’s privacy-enhanced domain
          (youtube-nocookie.com), and Google’s Privacy Policy applies to that playback.
        </p>
        <p>
          The download links take you to GitHub Releases, or open the Solana dApp Store app on a
          Solana Mobile phone. Each handles your download under its own policies.
        </p>
        <p>
          The site is hosted on GitHub Pages. Like any web host, GitHub processes technical
          information such as your IP address and browser details to deliver pages and protect its
          service, under the GitHub Privacy Statement. NetSepio does not use that information to
          identify or profile visitors.
        </p>
      </>
    ),
  },
  {
    id: 'early-access',
    title: 'The early-access list',
    body: (
      <>
        <p>
          If you join early access, we collect the <strong>email address</strong> you enter. The
          form is handled by an email-list provider acting on our behalf.
        </p>
        <p>
          We use your address to tell you when early access opens for the Android app and the first
          Sotreus Edge field units. The promise on the form applies: one email when access opens, no
          tracking pixels, and you can unsubscribe at any time. We don’t share the list with anyone
          for their own marketing.
        </p>
      </>
    ),
  },
  {
    id: 'support',
    title: 'Support',
    body: (
      <p>
        If you contact us at {mail}, we receive your email address and whatever you include. Your
        observations stay on your device unless you choose to send them, so please share only what
        is needed to resolve your question.
      </p>
    ),
  },
  {
    id: 'not-collected',
    title: 'What we do not collect',
    body: (
      <ul>
        <li>An account, name or password: none is needed to use Sotreus.</li>
        <li>Your radio observations, fingerprints, tags or attention history.</li>
        <li>Your places, journeys or location history.</li>
        <li>Observations synced from Sotreus Edge.</li>
        <li>Website analytics, cookies or advertising identifiers.</li>
      </ul>
    ),
  },
  {
    id: 'use',
    title: 'How we use information',
    body: (
      <>
        <p>We use the limited information we do receive to:</p>
        <ul>
          <li>send the early-access email and respond to unsubscribe requests;</li>
          <li>answer support requests;</li>
          <li>operate and secure the website and the Services;</li>
          <li>comply with legal obligations and enforce our Terms.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'disclosure',
    title: 'How we share information',
    body: (
      <>
        <p>We do not sell personal information. We share it only:</p>
        <ul>
          <li>
            with service providers that help us run the Services, such as website hosting, the
            early-access list and email, and only for that purpose;
          </li>
          <li>
            with third parties you choose to use, such as the aircraft-data provider when you switch
            that module on;
          </li>
          <li>
            when required by law, or to protect the rights, safety or security of users, the public
            or NetSepio;
          </li>
          <li>
            with a successor if NetSepio is involved in a merger, acquisition or sale of assets,
            under this policy’s protections.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'legal-bases',
    title: 'Legal bases for processing',
    body: (
      <>
        <p>Where laws such as the GDPR apply, we rely on:</p>
        <ul>
          <li>
            <strong>Consent:</strong> for the early-access list and for optional context modules you
            switch on. You can withdraw consent at any time.
          </li>
          <li>
            <strong>Legitimate interests:</strong> to secure the website and answer support
            requests.
          </li>
          <li>
            <strong>Legal obligation:</strong> where the law requires us to keep or disclose
            information.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Data retention',
    body: (
      <ul>
        <li>
          <strong>On-device data</strong> is kept according to the retention rules you set, until
          you delete it or uninstall the app. Sotreus Edge keeps a bounded log that older records
          roll out of.
        </li>
        <li>
          <strong>Early-access emails</strong> are kept until you unsubscribe, ask us to delete
          them, or we close the early-access list.
        </li>
        <li>
          <strong>Support emails</strong> are kept as long as needed to resolve your request and
          meet legal obligations.
        </li>
      </ul>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        Sotreus keeps your data local by design, offers optional encryption at rest, and syncs Edge
        to the app over a secured Bluetooth connection. No device, radio link or app is perfectly
        secure, so keep your phone’s lock screen, operating system and the Sotreus app up to date.
        Report suspected vulnerabilities to {mail}.
      </p>
    ),
  },
  {
    id: 'rights',
    title: 'Your choices and rights',
    body: (
      <>
        <p>
          Because most Sotreus data lives only on your device, you control it directly: change
          retention, delete a place or session, turn context modules off, or uninstall the app.
        </p>
        <p>
          Depending on where you live, you may have rights to access, correct, delete, restrict or
          object to the processing of personal data we hold, such as your early-access email, and to
          receive a copy of it. California residents have rights under the CCPA/CPRA; people in the
          EEA, UK and similar regions have GDPR-style rights, including withdrawing consent and
          lodging a complaint with a supervisory authority.
        </p>
        <p>
          To make a request, email {mail}. We may need to verify your request before acting on it.
        </p>
      </>
    ),
  },
  {
    id: 'transfers',
    title: 'International transfers',
    body: (
      <p>
        NetSepio and our service providers may process the limited information we receive in the
        United States and other countries, whose data-protection laws may differ from yours. Where
        required, we use appropriate safeguards for these transfers.
      </p>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        The Services are not directed to children under 13, and we do not knowingly collect personal
        information from them. If you believe a child has given us personal information, contact us
        and we will delete it.
      </p>
    ),
  },
  {
    id: 'third-parties',
    title: 'Third-party services',
    body: (
      <p>
        The Services can connect to or link to third parties, including aircraft-data providers,
        sources of public orbital elements, Meshtastic, Google Play and Android, GitHub (website
        hosting and app downloads), the Solana dApp Store, YouTube (the walkthrough video, only
        after you press play) and X. Their own privacy policies govern how they handle information.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy as Sotreus develops. We will change the “Last updated” date above,
        and for material changes we will take reasonable steps to tell you, such as a notice in the
        app or on this page.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <>
        <p>Questions and privacy requests: {mail}.</p>
        <p>Postal contact, if required: {POSTAL_ADDRESS}</p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      current="privacy"
      title="Privacy Policy"
      updated={LEGAL_UPDATED}
      intro={
        <p>
          Privacy is architecture, not a setting. Sotreus is built so it can’t become another opaque
          collector: there is no account, your radio history stays on your device, and anything that
          touches the network is opt-in and labelled.
        </p>
      }
      summary={summary}
      sections={sections}
    />
  );
}
