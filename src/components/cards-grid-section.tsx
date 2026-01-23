'use client'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { MapPin, Info, Star, ShoppingBag, Shield, MessageCircle } from 'lucide-react'

interface Card {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
}

interface CardsGridSectionProps {
  badge?: string
  heading?: string
  description?: string
  cards?: Card[]
}

const defaultCards: Card[] = [
  {
    id: '1',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
    icon: <MapPin className="w-[24px] h-[24px]" />,
  },
  {
    id: '2',
    title: 'Menej telefonátov a otázok',
    description: 'Hostia nájdu všetko o pobyte, službách a okolí na jednom mieste — bez toho, aby vás museli kontaktovať.',
    icon: <Info className="w-[24px] h-[24px]" />,
  },
  {
    id: '3',
    title: 'Profesionálny prvý dojem',
    description: 'Digitálny sprievodca s moderným dizajnom zvýši dôveru a spokojnosť hostí hneď od prvej minúty',
    icon: <Star className="w-[24px] h-[24px]" />,
  },
  {
    id: '4',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
    icon: <ShoppingBag className="w-[24px] h-[24px]" />,
  },
  {
    id: '5',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
    icon: <Shield className="w-[24px] h-[24px]" />,
  },
  {
    id: '6',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
    icon: <MessageCircle className="w-[24px] h-[24px]" />,
  },
]

export function CardsGridSection({
  badge = 'Čo získate',
  heading = 'Výhody pre vás ako ubytovateľa',
  
  cards = defaultCards,
}: CardsGridSectionProps) {
  return (
    <section className="w-full pt-12 md:pt-20 pb-28 md:pb-40 px-[16px] bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-[32px] md:mb-[40px]">
          {badge && (
            <Badge
              variant="custom"
              className="mb-[12px] text-sm font-medium"
            >
              {badge}
            </Badge>
          )}
          {heading && (
            <h2 className="md:text-[38px] text-[26px] font-semibold text-[#323232] font-heading leading-[1.1]">
              {heading.includes('ako') ? (
                <>
                  {heading.split('ako')[0]}ako<br />
                  {heading.split('ako')[1]}
                </>
              ) : (
                heading
              )}
            </h2>
          )}

        </div>

        {/* Cards Grid - 3 columns x 2 rows on desktop */}
        <div className="w-full flex justify-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {cards.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Default Icon Component
function DefaultIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function CardItem({ card }: { card: Card }) {
  return (
    <div
      className={cn(
        'bg-[#F6F3EB] rounded-[24px] p-[24px] md:p-[24px]',
        'shadow-sm hover:shadow-md transition-shadow',
        'flex flex-row items-center gap-4 min-h-[140px] md:min-h-[160px] lg:min-h-[180px]'
      )}
    >
      {/* Icon in Circle - Left Side */}
      <div className="flex-shrink-0 mb-12">
        <div className="w-[40px] h-[40px] md:w-[58px] md:h-[58px] rounded-full bg-[#9E8B61] flex items-center justify-center">
          {card.icon ? (
            <div className="text-white ">{card.icon}</div>
          ) : (
            <DefaultIcon className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-white" />
          )}
        </div>
      </div>

      {/* Card Content - Right Side */}
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="md:text-[20px] text-[18px] font-semibold text-[#323232] mb-[8px] font-heading">
          {card.title}
        </h3>
        {card.description && (
          <p className="text-[#818181] text-[14px] leading-[150%] letter-spacing-[-2%] font-sans font-normal">
            {card.description}
          </p>
        )}
      </div>
    </div>
  )
}

