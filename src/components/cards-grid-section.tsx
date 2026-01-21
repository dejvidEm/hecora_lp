'use client'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

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
  },
  {
    id: '2',
    title: 'Menej telefonátov a otázok',
    description: 'Hostia nájdu všetko o pobyte, službách a okolí na jednom mieste — bez toho, aby vás museli kontaktovať.',
  },
  {
    id: '3',
    title: 'Profesionálny prvý dojem',
    description: 'Digitálny sprievodca s moderným dizajnom zvýši dôveru a spokojnosť hostí hneď od prvej minúty',
  },
  {
    id: '4',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
  },
  {
    id: '5',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
  },
  {
    id: '6',
    title: 'Online check-in bez starostí',
    description: 'Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.',
  },
]

export function CardsGridSection({
  badge = 'Čo získate',
  heading = 'Výhody pre vás ako ubytovateľa',
  
  cards = defaultCards,
}: CardsGridSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {badge && (
            <Badge
              variant="custom"
              className="mb-4 text-sm font-medium"
            >
              {badge}
            </Badge>
          )}
          {heading && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a2b4a] mb-4 font-heading">
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
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
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
        'bg-[#F6F3EB] rounded-[24px] p-6 md:p-8',
        'shadow-sm hover:shadow-md transition-shadow',
        'flex flex-row gap-4 md:gap-6 min-h-[140px] md:min-h-[160px] lg:min-h-[180px]'
      )}
    >
      {/* Icon in Circle - Left Side */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#9E8B61] flex items-center justify-center">
          {card.icon ? (
            <div className="text-white">{card.icon}</div>
          ) : (
            <DefaultIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
          )}
        </div>
      </div>

      {/* Card Content - Right Side */}
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="text-lg md:text-xl font-semibold text-[#1a2b4a] mb-2 font-heading">
          {card.title}
        </h3>
        {card.description && (
          <p className="text-[#1a2b4a]/70 text-xs md:text-sm">
            {card.description}
          </p>
        )}
      </div>
    </div>
  )
}

