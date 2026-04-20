import { FloatingDock } from '@/components/floating-dock'
import { HeroSection } from '@/components/hero-section'
import { InfiniteCards } from '@/components/infinite-cards'
import { FeaturedProjects } from '@/components/featured-projects'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <>
      <FloatingDock />
      <HeroSection />
      <InfiniteCards />
      <FeaturedProjects />
      <CTASection />
    </>
  )
}
