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
  badge = 'Pre každé ubytovanie',
  heading = 'Pre koho je platforma určená',
  description = 'Platforma je navrhnutá pre ubytovacie zariadenia, ktoré chcú zjednodušiť komunikáciu s hosťami, automatizovať rutinné úlohy a ušetriť čas recepcii aj manažmentu.',
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
    <section className="w-full py-16 md:py-24 md:px-6 px-0 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-[40px]">
          {badge && (
            <Badge
              variant="custom"
              className="mb-[12px] text-sm font-medium"
            >
              {badge}
            </Badge>
          )}
          {heading && (
            <h2 className="md:text-[38px] text-[26px] font-semibold text-[#323232] mb-[12px] font-heading leading-[1.1]">
              {heading}
            </h2>
          )}
          {description && (
            <p className="md:text-base text-[14px] text-[#818181] max-w-[350px] md:max-w-[490px] mx-auto font-sans font-normal">
              {description}
            </p>
          )}
        </div>

        {/* Cards - Desktop: Grid, Mobile: Carousel */}
        <div className="w-full">
          {/* Desktop Grid - 4 cards, wider width */}
          <div className="hidden md:flex justify-center">
            <div className="flex gap-[12px]">
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
          <div className="md:hidden overflow-visible pl-4 pr-2">
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
                    'w-2 h-2 rounded-full transition-all cursor-pointer',
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
        'relative rounded-[24px] p-6',
        'shadow-sm hover:shadow-md transition-all duration-300',
        isMobile ? 'aspect-[3/4] min-h-[350px]' : 'h-full min-h-[300px] md:w-[311px] md:min-h-[400px]',
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
      <div 
        className={cn(
          "absolute inset-x-0 bottom-0 z-0 transition-all duration-300",
          isExpanded ? "h-2/3 bg-gradient-to-t from-black via-black/90 via-black/70 to-black/0" : "h-1/3 bg-gradient-to-t from-black/100 to-black/0"
        )}
      />

      {/* Plus/Minus Icon in Circle - Top Right */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
        <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-all duration-500 cursor-pointer group-hover:scale-105 shadow-md">
          {isExpanded ? (
            <MinusIcon className="w-[18px] h-[18px] text-[#9E8B61] transition-transform duration-300" />
          ) : (
            <PlusIcon className="w-[18px] h-[18px] text-[#9E8B61] transition-transform duration-300" />
          )}
        </div>
      </div>

      {/* Card Content - Aligned to bottom left */}
      <div className="relative z-10 flex-1 flex flex-col justify-end items-start">
        <h3 className="text-[20px] font-semibold text-white mb-[16px] font-heading">
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
            <p className="text-white text-base font-normal font-sans" style={{ letterSpacing: '-0.02em', lineHeight: '1.5' }}>
              {card.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

