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
import { MoveLeft, MoveRight } from 'lucide-react'

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
        <div className="mb-[32px] md:mb-[40px] relative">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
            {/* Left Side - Badge, Heading */}
            <div className="flex-1">
              {badge && (
                <Badge
                  variant="custom"
                  className="md:mb-4 mb-[12px] text-sm font-semibold"
                >
                  {badge}
                </Badge>
              )}
              {heading && (
                <h2 className="md:text-[38px] text-[26px] font-semibold text-[#323232] mb-6 md:mb-0 font-heading leading-[1.1]">
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
                "w-[48px] h-[48px] rounded-full bg-[#FFEBE1]/50 border flex items-center justify-center transition-all shadow-sm",
                current === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#FFEBE1]/70 cursor-pointer"
              )}
              style={{ borderColor: 'rgba(251, 135, 75, 0.2)' }}
              aria-label="Previous slide"
            >
              <MoveLeft className="w-[20px] h-[20px] text-[#9E8B61]" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={current === cards.length - 1}
              className={cn(
                "w-[48px] h-[48px] rounded-full bg-[#FFEBE1]/50 border flex items-center justify-center transition-all shadow-sm",
                current === cards.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#FFEBE1]/70 cursor-pointer"
              )}
              style={{ borderColor: 'rgba(251, 135, 75, 0.2)' }}
              aria-label="Next slide"
            >
              <MoveRight className="w-[20px] h-[20px] text-[#9E8B61]" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards Slider - Extends beyond right edge */}
      <div className="relative -mr-6 md:-mr-[calc((100vw-1280px)/2+24px)]">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            slidesToScroll: 1,
          }}
          className="w-full gap-[]"
        >
          <CarouselContent className="md:pl-[calc((100vw-1380px)/2+16px)] pr-6 md:pr-0">
            {cards.map((card, index) => (
              <CarouselItem
                key={card.id}
                className="basis-[75%] md:basis-[480px] md:flex-shrink-0"
              >
                <CardItem card={card} number={index + 1} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots Indicator - Mobile only */}
        <div className="flex md:hidden justify-center gap-2 mt-6 px-6">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'w-4 h-2 rounded-full transition-all cursor-pointer',
                current === index
                  ? 'bg-[#9E8B61] w-8'
                  : 'bg-[#F6F3EB] hover:bg-gray-400'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
        'bg-[#F6F3EB] rounded-[24px] pt-6 md:pt-[50px] px-6 md:px-[50px] pb-6 md:pb-8',
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
      <h3 className="text-lg md:text-xl font-semibold text-[#323232] mb-1 font-heading">
        {card.title}
      </h3>
      {card.description && (
        <p className="text-[#818181] text-[14px] md:text-base flex-1 font-sans font-normal">
          {card.description}
        </p>
      )}
      
      {/* White Badge on the left side */}
      <div className={cn('absolute left-6 md:left-8 transform -translate-y-1/2 z-10', badgeTopPosition)}>
        <span className="inline-flex items-center justify-center rounded-full bg-white text-[#323232] md:px-[18px] md:py-[16px] px-[14px] py-[10px] gap-[6px] text-sm font-medium whitespace-nowrap shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9E8B61] flex-shrink-0" />
          Lorem ipsum dolor sit 
        </span>
      </div>
      
      {/* Image at bottom center - half out of card */}
      {card.image && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[5%] w-full max-w-[220px] md:max-w-[330px]">
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
