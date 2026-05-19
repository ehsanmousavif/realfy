import { AboutUs } from "@/components/ui/landing/about/about";
import { PortfolioSection } from "@/components/ui/landing/categories-section/portfolio-section";
import { CollaborationStrip } from "@/components/ui/landing/collaboration/collaboration-strip";
import { Cta } from "@/components/ui/landing/cta/cta";
import { GlobalMap } from "@/components/ui/landing/dotted-map/dotted-map";
import { Faq } from "@/components/ui/landing/faq/faq";
import { HeroSection } from "@/components/ui/landing/herosection/hero-section";
import TextWithImages from "@/components/ui/landing/intro-quote/intro-quote";
import { Pricing } from "@/components/ui/landing/pricing/pricing";
import { VideoProductionProcess } from "@/components/ui/landing/process-section/video-production-process";
import { VideoServices } from "@/components/ui/landing/services/video-services";
import { TestimonialsBase } from "@/components/ui/landing/testimonials/testimonials";
import TimeLine from "@/components/ui/landing/time-line/time-line";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <CollaborationStrip />
      <TextWithImages />
      <VideoServices />
      <VideoProductionProcess />
      <AboutUs />
      <PortfolioSection />
      <GlobalMap />
      <TimeLine />
      <Pricing />
      <TestimonialsBase />
      <Faq />
      <Cta />
    </div>
  )
}
