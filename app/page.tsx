import { FloatingDock } from '@/components/floating-dock'
import { HeroSection } from '@/components/hero-section'
import { InfiniteCards } from '@/components/infinite-cards'
import { FeaturedProjects } from '@/components/featured-projects'
import { ProjectsDetailedSection } from '@/components/projects-detailed-section'
import { AboutSection } from '@/components/about-section'
import { CTASection } from '@/components/cta-section'
import { MouseSpotlight } from '@/components/ui/spotlight'

export default function Home() {
  return (
    <>
      <MouseSpotlight />
      <FloatingDock />
      <HeroSection />
      <InfiniteCards />
      <FeaturedProjects />
      <ProjectsDetailedSection />
      <AboutSection />
      <CTASection />
    </>
  )
}
