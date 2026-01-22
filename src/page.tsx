import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { PlatformShowcaseSection } from "@/components/platform-showcase-section"
import { CardsGridSection } from "@/components/cards-grid-section"
import { FullWidthImageSection } from "@/components/full-width-image-section"
import { CardsSliderSection } from "@/components/cards-slider-section"
import { ImageGallerySection } from "@/components/image-gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTAImagesSection } from "@/components/cta-images-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      <Hero />
      <FeaturesSection />
      <PlatformShowcaseSection />
      <CardsGridSection />
      <FullWidthImageSection />
      <CardsSliderSection />
      <ImageGallerySection />
      <PricingSection />
      <FAQSection />
      <CTAImagesSection />
      <Footer />
    </main>
  )
}
