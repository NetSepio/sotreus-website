import SiteHeader from '@/components/sections/SiteHeader';
import Hero from '@/components/sections/Hero';
import TimelineTicker from '@/components/sections/TimelineTicker';
import Thesis from '@/components/sections/Thesis';
import HowItWorks from '@/components/sections/HowItWorks';
import Memory from '@/components/sections/Memory';
import ContextFusion from '@/components/sections/ContextFusion';
import Language from '@/components/sections/Language';
import Edge from '@/components/sections/Edge';
import Trust from '@/components/sections/Trust';
import Roadmap from '@/components/sections/Roadmap';
import EarlyAccess from '@/components/sections/EarlyAccess';
import SiteFooter from '@/components/sections/SiteFooter';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TimelineTicker />
        <Thesis />
        <HowItWorks />
        <Memory />
        <ContextFusion />
        <Language />
        <Edge />
        <Trust />
        <Roadmap />
        <EarlyAccess />
      </main>
      <SiteFooter />
    </>
  );
}
