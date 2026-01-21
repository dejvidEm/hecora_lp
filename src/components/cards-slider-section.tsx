'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

interface Card {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
  image?: string
}

interface CardsSliderSectionProps {
  badge?: string
  heading?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
  cards?: Card[]
}

const defaultCards: Card[] = [
  {
    id: '1',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
    image: '/APP/Device 14PM-1.png',
  },
  {
    id: '2',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
    image: '/APP/Device 14PM-1.png',
  },
  {
    id: '3',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
    image: '/APP/Device 14PM.png',
  },
  {
    id: '4',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
    image: '/APP/Device 14PM-2.png',
  },
]

export function CardsSliderSection({
  badge = 'Prehľad funkcií',
  heading = 'Inteligentné nástroje pre moderné ubytovanie',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonText = 'Vyskúšať zdarma',
  onButtonClick,
  cards = defaultCards,
}: CardsSliderSectionProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

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
        {/* Top Section */}
        <div className="mb-12 md:mb-16 relative">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
            {/* Left Side - Badge, Heading */}
            <div className="flex-1">
              {badge && (
                <Badge
                  variant="custom"
                  className="mb-4 text-sm font-medium"
                >
                  {badge}
                </Badge>
              )}
              {heading && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a2b4a] mb-6 md:mb-0 font-heading">
                  {heading.includes('pre') ? (
                    <>
                      {heading.split('pre')[0]}pre<br />
                      {heading.split('pre')[1]}
                    </>
                  ) : (
                    heading
                  )}
                </h2>
              )}
            </div>
          </div>
          
          {/* Navigation Arrows - Bottom right of top section - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 absolute bottom-0 right-0">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={current === 0}
              className={cn(
                "w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FFEBE1] flex items-center justify-center transition-all shadow-sm",
                current === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#FFEBE1]/80 cursor-pointer"
              )}
              aria-label="Previous slide"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#1a2b4a]"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={current === cards.length - 1}
              className={cn(
                "w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FFEBE1] flex items-center justify-center transition-all shadow-sm",
                current === cards.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#FFEBE1]/80 cursor-pointer"
              )}
              aria-label="Next slide"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#1a2b4a]"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Slider */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {cards.map((card, index) => (
                <CarouselItem
                  key={card.id}
                  className="pl-2 md:pl-4 basis-[75%] md:basis-[calc(35%-1rem)]"
                >
                  <CardItem card={card} number={index + 1} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Indicator - Mobile only */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
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
    </section>
  )
}

function CardItem({ card, number, index }: { card: Card; number: number; index: number }) {
  const formattedNumber = String(number).padStart(2, '0')
  
  // First (index 0) and third (index 2) badges higher, second (index 1) badge lower
  const badgeTopPosition = index === 1 ? 'top-[60%]' : 'top-[80%]'
  
  return (
    <div
      className={cn(
        'bg-[#F6F3EB] rounded-[24px] pt-8 md:pt-10 px-6 md:px-8 pb-6 md:pb-8',
        'shadow-sm hover:shadow-md transition-shadow',
        'h-full min-h-[400px] md:min-h-[500px]',
        'flex flex-col relative overflow-hidden'
      )}
    >
      {/* Number above heading */}
      <div className="text-2xl md:text-3xl font-medium text-[#9E8B61] mb-0.5 font-heading">
        {formattedNumber}
      </div>
      
      {card.icon && (
        <div className="mb-1 text-[#CC6431]">{card.icon}</div>
      )}
      <h3 className="text-lg md:text-xl font-semibold text-[#1a2b4a] mb-1 font-heading">
        {card.title}
      </h3>
      {card.description && (
        <p className="text-[#1a2b4a]/70 text-xs md:text-sm flex-1">
          {card.description}
        </p>
      )}
      
      {/* White Badge on the left side */}
      <div className={cn('absolute left-6 md:left-8 transform -translate-y-1/2 z-10', badgeTopPosition)}>
        <span className="inline-flex items-center justify-center rounded-full border border-black/20 bg-white text-black px-5 py-2 gap-2 text-sm font-medium whitespace-nowrap shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
          Badge
        </span>
      </div>
      
      {/* Image at bottom center - half out of card */}
      {card.image && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[5%] w-full max-w-[280px] md:max-w-[330px]">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-auto object-contain"
          />
        </div>
      )}
    </div>
  )
}
