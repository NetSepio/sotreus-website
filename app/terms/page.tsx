import Link from 'next/link';
import LegalPage, { type LegalSection } from '@/components/LegalPage';
import {
  legalMetadata,
  LEGAL_UPDATED,
  POSTAL_ADDRESS,
  SUPPORT_EMAIL,
} from '@/components/legalMetadata';

export const metadata = legalMetadata(
  '/terms/',
  'Terms — Sotreus',
  'The terms for using the Sotreus app, Sotreus Edge, the early-access list and sotreus.com.',
);

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

const summary = [
  <>
    <strong>Receive-only.</strong> Sotreus observes what nearby electronics broadcast. It never
    deauthenticates, injects, jams, exploits or interrogates anyone else’s systems, and you may not
    make it do so.
  </>,
  <>
    <strong>Evidence, not verdicts.</strong> Sotreus does not detect intent, prove surveillance or
    promise to find every device. You decide what the evidence means.
  </>,
  <>
    <strong>Use it lawfully and respectfully.</strong> Never use Sotreus to locate, follow, stalk or
    harass anyone.
  </>,
  <>
    <strong>Context can be wrong or stale.</strong> Aircraft data is reported by third parties and
    satellite passes are predictions.
  </>,
  <>
    <strong>Not an emergency service.</strong> If you believe you are in danger, contact local
    emergency services.
  </>,
  <>
    <strong>In development.</strong> Features, availability and Sotreus Edge hardware may change
    before and after release.
  </>,
];

const sections: LegalSection[] = [
  {
    id: 'agreement',
    title: 'Agreement to these Terms',
    body: (
      <>
        <p>
          These Terms govern your access to and use of the Sotreus Android app, the Sotreus Edge
          device and its firmware, the sotreus.com website, the early-access list and related
          support (together, the “Services”). Sotreus is a product of <strong>NetSepio LLC</strong>
          (“NetSepio”, “we”, “us”).
        </p>
        <p>
          By using the Services, you agree to these Terms. If you do not agree, do not use them.
        </p>
      </>
    ),
  },
  {
    id: 'services',
    title: 'The Services',
    body: (
      <>
        <ul>
          <li>
            <strong>Sotreus app:</strong> observes nearby Bluetooth LE and visible Wi-Fi, learns
            what is normal for a place, keeps encounter memory, places, journeys and tags on your
            device, and surfaces evidence-based attention.
          </li>
          <li>
            <strong>Sky context:</strong> optional modules that add aircraft data, drone Remote ID
            broadcasts and satellite-pass predictions to your timeline.
          </li>
          <li>
            <strong>Sotreus Edge:</strong> a pocket companion that observes on its own battery and
            syncs to the app, with two personalities: Edge Mode and Mesh Mode.
          </li>
          <li>
            <strong>Website and early access:</strong> information about Sotreus and a list to hear
            when access opens.
          </li>
        </ul>
        <p>
          Sotreus is in development. The roadmap on sotreus.com describes our intentions, not a
          commitment to deliver any feature, device or date.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    body: (
      <ul>
        <li>
          You must be at least 13 years old and legally able to accept these Terms where you live.
        </li>
        <li>
          You may not use the Services where doing so is prohibited by law or sanctions rules.
        </li>
        <li>
          If you use the Services for an organisation, you confirm you have authority to accept
          these Terms on its behalf.
        </li>
      </ul>
    ),
  },
  {
    id: 'what-it-is',
    title: 'What Sotreus is, and is not',
    body: (
      <>
        <p>
          Sotreus reports what it can observe (<strong>SENSED</strong>), what external sources
          report (<strong>NETWORK</strong>) and what is only predicted (<strong>PREDICTED</strong>),
          and keeps those categories distinct. It is an awareness tool with deliberate limits:
        </p>
        <ul>
          <li>
            It only sees supported bands. The phone observes Bluetooth LE and visible Wi-Fi; Sotreus
            Edge observes Bluetooth LE and 2.4 GHz Wi-Fi, not 5 or 6 GHz. Many devices don’t
            broadcast, broadcast intermittently or change their identifiers.
          </li>
          <li>
            It does not promise to find every camera or tell you who is watching. “Nothing
            observable on supported bands” does not mean an area is clean.
          </li>
          <li>
            The attention score is not a threat score. Signal strength means rough proximity, never
            direction.
          </li>
          <li>
            Events that overlap in time are only that. An aircraft overhead is not proof of
            surveillance, a satellite pass is not proof of imaging, and a drone broadcast is not
            proof of intent.
          </li>
        </ul>
        <p>
          Do not rely on Sotreus as your only basis for personal-safety, legal, financial or
          operational decisions. It is not an emergency service. If you believe you are in danger,
          contact local emergency services or law enforcement.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Lawful and respectful use',
    body: (
      <>
        <p>
          You are responsible for complying with the laws that apply to you, including laws on radio
          reception, privacy, data protection and recording. You agree not to:
        </p>
        <ul>
          <li>
            use the Services to locate, follow, monitor, stalk, harass or intimidate any person;
          </li>
          <li>
            use observations to identify individuals or build profiles of them unlawfully, or
            publish observations in a way that exposes other people;
          </li>
          <li>
            modify the app, Sotreus Edge or its firmware to deauthenticate, inject, jam, exploit or
            interrogate devices or networks, or otherwise interfere with systems you do not own;
          </li>
          <li>
            remove or bypass the privacy protections built into Sotreus, such as coarse exports and
            hashed identifiers;
          </li>
          <li>
            attack, overload, scrape or probe the Services or the third-party providers they use;
          </li>
          <li>
            use the Services for any unlawful purpose, or resell them without our written
            permission.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'edge',
    title: 'Sotreus Edge hardware',
    body: (
      <>
        <ul>
          <li>
            In <strong>Edge Mode</strong>, Edge is receive-only and does not transmit over LoRa.
          </li>
          <li>
            In <strong>Mesh Mode</strong>, Edge runs Meshtastic and transmits on LoRa. You are
            responsible for using the correct regional frequency settings and for complying with
            local radio regulations and any licensing requirements.
          </li>
          <li>
            Follow the safety and battery instructions supplied with the device, and stop using a
            device that is damaged, swollen or overheating.
          </li>
          <li>
            Early field units and prototypes may differ from the final product. Prices, warranty and
            purchase terms for any hardware will be provided at the time of purchase.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-party data and software',
    body: (
      <p>
        Aircraft data comes from external providers, satellite predictions rely on public orbital
        elements, Mesh Mode uses Meshtastic, and the app runs on Android and may be distributed
        through Google Play. These are governed by their own terms and licences. NetSepio does not
        control them and is not responsible for their availability, accuracy or practices. Context
        results always show their source and data age so you can judge them.
      </p>
    ),
  },
  {
    id: 'your-data',
    title: 'Your data',
    body: (
      <>
        <p>
          You own your observations, tags, places, journeys and exports. They are stored on your
          device and your Sotreus Edge, not on NetSepio servers, so{' '}
          <strong>you are responsible for backing them up</strong>. We cannot recover data that is
          deleted from your device, because we never had it.
        </p>
        <p>
          When you export or share data, you are responsible for who receives it. How we handle the
          limited information we do receive is explained in our{' '}
          <Link href="/privacy/">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'early-access',
    title: 'Early access and fees',
    body: (
      <p>
        Joining the early-access list is free and does not guarantee access, a release date, a price
        or a place in any hardware run. We may change or end early access at any time. If we later
        offer paid features or sell Sotreus Edge, the price and any additional terms will be shown
        before you pay.
      </p>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual property and licence',
    body: (
      <>
        <p>
          The Services, including the software, firmware, designs, the Sotreus name and logo, and
          website content, are owned by NetSepio or its licensors. Subject to these Terms, we grant
          you a limited, personal, revocable, non-exclusive, non-transferable licence to use the app
          and Edge firmware for their intended purpose.
        </p>
        <p>
          Where parts of Sotreus are released under an open-source licence, that licence governs
          those parts. If you send us feedback, we may use it without obligation to you.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        Keep your phone, operating system and the Sotreus app up to date and protected. Report
        suspected vulnerabilities to {mail}, and give us a reasonable opportunity to investigate and
        fix them before disclosing them publicly.
      </p>
    ),
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    body: (
      <>
        <p>
          The Services are provided “as is” and “as available” to the maximum extent permitted by
          law. NetSepio disclaims all warranties, express or implied, including merchantability,
          fitness for a particular purpose, title, non-infringement, availability and accuracy.
        </p>
        <p>
          We do not warrant that Sotreus will observe every device or broadcast, that
          classifications, fingerprints or attention scores will be correct, that third-party
          context will be accurate or current, or that the Services will be uninterrupted or
          error-free.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <>
        <p>
          To the maximum extent permitted by law, NetSepio and its affiliates, officers, employees,
          contractors, licensors and service providers will not be liable for indirect, incidental,
          special, consequential, exemplary or punitive damages, or for lost profits, lost data,
          devices or broadcasts that were not observed, misclassifications, inaccurate third-party
          context, or decisions made in reliance on the Services.
        </p>
        <p>
          To the maximum extent permitted by law, NetSepio’s total liability for all claims relating
          to the Services will not exceed the greater of the amount you paid NetSepio for the
          Services in the six months before the claim, or USD 100.
        </p>
      </>
    ),
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    body: (
      <p>
        You agree to defend, indemnify and hold harmless NetSepio and its affiliates, officers,
        employees, contractors, licensors and service providers from claims, damages, losses and
        expenses, including reasonable legal fees, arising from your use of the Services, your
        violation of these Terms, or your violation of any law or anyone else’s rights, including
        their privacy.
      </p>
    ),
  },
  {
    id: 'termination',
    title: 'Suspension and termination',
    body: (
      <p>
        You may stop using the Services at any time. We may suspend or end access to the Services if
        you violate these Terms, create risk for others, or if continuing is not legally,
        technically or commercially feasible. Sections that by their nature should survive,
        including intellectual property, disclaimers, limitation of liability, indemnification and
        governing law, survive termination.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to the Services or these Terms',
    body: (
      <p>
        We may update the Services and these Terms as Sotreus develops. We will change the “Last
        updated” date above, and for material changes we will take reasonable steps to give notice,
        such as on this page or in the app. Continuing to use the Services after an update means you
        accept the updated Terms.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law and disputes',
    body: (
      <p>
        These Terms are governed by the laws of the United States and, where applicable, the laws of
        the state or jurisdiction in which NetSepio or its operating entity is established, without
        regard to conflict-of-law principles. Courts located in the United States have jurisdiction
        unless applicable consumer-protection law requires otherwise.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <>
        <p>Questions about these Terms: {mail}.</p>
        <p>Postal contact, if required: {POSTAL_ADDRESS}</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      current="terms"
      title="Terms"
      updated={LEGAL_UPDATED}
      intro={
        <p>
          Sotreus answers with evidence, provenance, confidence, freshness — and restraint. These
          Terms set out what you can expect from Sotreus, and what we expect from you when you use
          it.
        </p>
      }
      summary={summary}
      sections={sections}
    />
  );
}
