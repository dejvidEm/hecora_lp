'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

// Plus Icon Component
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

// Minus Icon Component
function MinusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

interface FeatureCard {
  id: string
  title: string
  description?: string
  image?: string
}

interface FeaturesSectionProps {
  badge?: string
  heading?: string
  description?: string
  cards?: FeatureCard[]
}

const defaultCards: FeatureCard[] = [
  {
    id: '1',
    title: 'Malé a stredné hotely',
    description: 'Lorem ipsum dolor sit ameturis vel consectetur. At nunc sit placerat varius ultrices vitae leo orci. Arcu.',
    image: '/f/f1.png',
  },
  {
    id: '2',
    title: 'Malé a stredné hotely',
    description: 'Lorem ipsum dolor sit ameturis vel consectetur. At nunc sit placerat varius ultrices vitae leo orci. Arcu.',
    image: '/f/f2.png',
  },
  {
    id: '3',
    title: 'Veľké hotelové komplexy',
    description: 'Lorem ipsum dolor sit ameturis vel consectetur. At nunc sit placerat varius ultrices vitae leo orci. Arcu.',
    image: '/f/f3.png',
  },
  {
    id: '4',
    title: 'Správcovia objektov',
    description: 'Lorem ipsum dolor sit ameturis vel consectetur. At nunc sit placerat varius ultrices vitae leo orci. Arcu.',
    image: '/f/f4.png',
  },
]

export function FeaturesSection({
  badge = 'Funkcie',
  heading = 'Všetko, čo potrebujete',
  description = 'Naša platforma ponúka všetky nástroje pre dokonalú správu vášho ubytovania.',
  cards = defaultCards,
}: FeaturesSectionProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="w-full py-16 md:py-24 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {badge && (
            <Badge
              variant="custom"
              className="mb-2 text-sm font-medium"
            >
              {badge}
            </Badge>
          )}
          {heading && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a2b4a] mb-2 font-heading">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-lg md:text-xl text-[#1a2b4a]/70 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Cards - Desktop: Grid, Mobile: Carousel */}
        <div className="w-full">
          {/* Desktop Grid - 4 cards, wider width */}
          <div className="hidden md:flex justify-center">
            <div className="w-full grid grid-cols-4 gap-4">
              {cards.map((card) => (
                <FeatureCard
                  key={card.id}
                  card={card}
                  isExpanded={expandedCard === card.id}
                  onToggle={() => toggleCard(card.id)}
                />
              ))}
            </div>
          </div>

          {/* Mobile Carousel - Smaller cards maintaining aspect ratio */}
          <div className="md:hidden overflow-visible">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'start',
                slidesToScroll: 1,
                containScroll: 'trimSnaps',
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {cards.map((card) => (
                  <CarouselItem
                    key={card.id}
                    className="pl-4 basis-[70%] flex-shrink-0"
                  >
                    <FeatureCard
                      card={card}
                      isExpanded={expandedCard === card.id}
                      onToggle={() => toggleCard(card.id)}
                      isMobile={true}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all',
                    current === index
                      ? 'bg-[#9E8B61] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  card,
  isExpanded,
  onToggle,
  isMobile = false,
}: {
  card: FeatureCard
  isExpanded: boolean
  onToggle: () => void
  isMobile?: boolean
}) {
  return (
    <div
      className={cn(
        'relative rounded-[24px] p-6 md:p-8',
        'shadow-sm hover:shadow-md transition-all duration-300',
        isMobile ? 'aspect-[3/4] min-h-[350px]' : 'h-full min-h-[300px] md:min-h-[400px]',
        'flex flex-col cursor-pointer overflow-hidden',
        'group'
      )}
      style={{
        backgroundImage: card.image ? `url(${card.image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onToggle}
    >
      {/* Gradient Overlay - Only at bottom for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-0" />

      {/* Plus/Minus Icon in Circle - Top Right */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-all duration-300 cursor-pointer group-hover:scale-105 shadow-md">
          {isExpanded ? (
            <MinusIcon className="w-5 h-5 md:w-6 md:h-6 text-[#9E8B61] transition-transform duration-300" />
          ) : (
            <PlusIcon className="w-5 h-5 md:w-6 md:h-6 text-[#9E8B61] transition-transform duration-300" />
          )}
        </div>
      </div>

      {/* Card Content - Aligned to bottom left */}
      <div className="relative z-10 flex-1 flex flex-col justify-end items-start">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 font-heading">
          {card.title}
        </h3>
        {card.description && (
          <div
            className={cn(
              'overflow-hidden transition-all duration-500 ease-out w-full',
              isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            )}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <p className="text-white text-sm md:text-base pt-2">
              {card.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

