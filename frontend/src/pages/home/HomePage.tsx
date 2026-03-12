import { AvailabilitySection } from '@/widgets/availability/AvailabilitySection'
import { AboutSection } from '@/widgets/home/AboutSection'
import { FaqSection } from '@/widgets/home/FaqSection'
import { HeroSection } from '@/widgets/home/HeroSection'
import { HighlightsSection } from '@/widgets/home/HighlightsSection'
import { TestimonialSection } from '@/widgets/home/TestimonialSection'
import { CatalogSection } from '@/widgets/services/CatalogSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <CatalogSection compact />
      <AvailabilitySection />
      <TestimonialSection />
      <FaqSection />
    </>
  )
}
