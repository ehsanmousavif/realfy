import { HeroSection } from "@/components/ui/sections/01.hero-section/hero-section";
import { CollaborationStrip } from "@/components/ui/sections/02.collaboration/collaboration-strip";
import IntroQuote from "@/components/ui/sections/03.intro-quote/intro-quote";
import { LongVideo } from "@/components/ui/sections/04.long-video/video-services";
import { ShortVideo } from "@/components/ui/sections/05.short-video/video-production-process";
import { AboutUs } from "@/components/ui/sections/06.about/about";
import { Portfolio } from "@/components/ui/sections/07.portfolio/portfolio";
import { GlobalMap } from "@/components/ui/sections/08.map/dotted-map";
import TimeLine from "@/components/ui/sections/09.time-line/time-line";
import { Pricing } from "@/components/ui/sections/10.pricing/pricing";
import { Testimonials } from "@/components/ui/sections/11.testimonials/testimonials";
import { Faq } from "@/components/ui/sections/12.faq/faq";
import { Cta } from "@/components/ui/sections/13.cta/cta";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <CollaborationStrip />
      <IntroQuote />
      <LongVideo />
      <ShortVideo />
      <AboutUs />
      <Portfolio />
      <GlobalMap />
      <TimeLine />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  );
}
