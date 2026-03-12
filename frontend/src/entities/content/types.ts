export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface TestimonialItem {
  id: string
  clientName: string
  roleLabel: string
  quote: string
}

export interface GalleryItem {
  id: string
  title: string
  assetUrl: string
  assetType: string
  eventType: string
}

export interface HomeContent {
  faqs: FaqItem[]
  testimonials: TestimonialItem[]
  galleryItems: GalleryItem[]
}
