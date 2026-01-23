'use client'

import { Button } from '@/components/ui/button'

interface CTAImage {
  src: string
  alt: string
  title: string
  buttonText: string
  onButtonClick?: () => void
}

interface CTAImagesSectionProps {
  images?: CTAImage[]
}

const defaultImages: CTAImage[] = [
  {
    src: '/APP2/cta.png',
    alt: 'CTA Image 1',
    title: 'Pripravený ušetriť čas a zjednodušiť ubytovania?',
    buttonText: 'Vyskúšať zdarma',
    onButtonClick: () => console.log('CTA 1 clicked'),
  },
  {
    src: '/APP2/cta-1.png',
    alt: 'CTA Image 2',
    title: 'Máte otázky alebo potrebujete poradiť?',
    buttonText: 'Kontaktovať nás',
    onButtonClick: () => console.log('CTA 2 clicked'),
  },
]

export function CTAImagesSection({
  images = defaultImages,
}: CTAImagesSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {images.map((image, index) => (
            <CTAImageCard key={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CTAImageCard({ image }: { image: CTAImage }) {
  return (
    <div className="relative rounded-[24px] overflow-hidden bg-gray-100 aspect-[4/3] md:w-[634px] md:h-[420px] md:aspect-auto group">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent && !parent.querySelector('.placeholder')) {
            const placeholder = document.createElement('div')
            placeholder.className = 'placeholder w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center absolute inset-0'
            placeholder.style.aspectRatio = '4/3'
            placeholder.innerHTML = `<span class="text-gray-400 text-sm">${image.alt}</span>`
            parent.appendChild(placeholder)
          }
        }}
      />
      {/* Light Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
      
      {/* Content - Centered in the middle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 text-center z-10">
        <h3 
          className="md:text-[38px] text-[26px] font-semibold text-white mb-6 drop-shadow-lg font-heading leading-[1.1]"
          style={{ letterSpacing: '-0.02em' }}
        >
          {image.title}
        </h3>
        <Button
          onClick={image.onButtonClick}
          className="rounded-full bg-[#9E8B61] text-white hover:bg-[#9E8B61]/90 px-[20px] py-6 text-[16px] font-medium font-heading shadow-lg"
        >
          {image.buttonText}
        </Button>
      </div>
    </div>
  )
}

