import { useHomeContent } from '@/features/content/hooks/useHomeContent'
import { usePublicSettings } from '@/features/site/hooks/usePublicSettings'
import { AvailabilitySection } from '@/widgets/availability/AvailabilitySection'
import { AboutSection } from '@/widgets/home/AboutSection'
import { ContactSection } from '@/widgets/home/ContactSection'
import { FaqSection } from '@/widgets/home/FaqSection'
import { GallerySection } from '@/widgets/home/GallerySection'
import { HeroSection } from '@/widgets/home/HeroSection'
import { HighlightsSection } from '@/widgets/home/HighlightsSection'
import { TestimonialSection } from '@/widgets/home/TestimonialSection'
import { CatalogSection } from '@/widgets/services/CatalogSection'

export function HomePage() {
  const { data: homeContent, error: homeError, loading: homeLoading } = useHomeContent()
  const { data: siteData, error: siteError, loading: siteLoading } = usePublicSettings()

  return (
    <>
      <HeroSection error={siteError} hero={siteData?.settings.hero} loading={siteLoading} />
      <AboutSection />
      <HighlightsSection />
      <CatalogSection compact />
      <AvailabilitySection />
      <GallerySection error={homeError} items={homeContent?.galleryItems ?? []} loading={homeLoading} />
      <TestimonialSection error={homeError} items={homeContent?.testimonials ?? []} loading={homeLoading} />
      <FaqSection error={homeError} items={homeContent?.faqs ?? []} loading={homeLoading} />
      <ContactSection
        contact={siteData?.settings.contact}
        error={siteError}
        loading={siteLoading}
        socialLinks={siteData?.socialLinks ?? []}
      />
    </>
  )
}
