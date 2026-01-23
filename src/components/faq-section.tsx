'use client'

import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// Plus Icon Component
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
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

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQSectionProps {
  badge?: string
  heading?: string
  description?: string
  faqs?: FAQItem[]
}

const defaultFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'Ako dlho trvá nastavenie platformy?',
    answer:
      'Nastavenie platformy je rýchle a jednoduché. Väčšina užívateľov má platformu pripravenú na použitie do 15 minút. Naša podpora vám pomôže s každým krokom.',
  },
  {
    id: '2',
    question: 'Je platforma vhodná aj pre menšie ubytovanie?',
    answer:
      'Áno, naša platforma je vhodná pre ubytovania všetkých veľkostí. Ponúkame flexibilné balíčky, ktoré sa prispôsobujú vašim potrebám.',
  },
  {
    id: '3',
    question: 'Čo potrebujem na používanie platformy?',
    answer:
      'Na používanie platformy potrebujete len počítač alebo mobilné zariadenie s prístupom na internet. Žiadne dodatočné vybavenie nie je potrebné.',
  },
  {
    id: '4',
    question: 'Ponúkate aj skúšobnú verziu zdarma?',
    answer:
      'Áno, všetky naše balíčky ponúkajú 2-týždňové bezplatné testovacie obdobie. Môžete vyskúšať všetky funkcie bez záväzkov.',
  },
  {
    id: '5',
    question: 'Môžu platformu používať viacerí členovia tímu?',
    answer:
      'Áno, platforma podporuje viacero používateľov. V závislosti od vášho balíčka môžete pridať neobmedzený počet členov tímu s rôznymi úrovňami prístupu.',
  },
]

export function FAQSection({
  badge = 'Najčastejšie otázky',
  heading = 'Pomáhame vám rýchlo sa zorientovať',
  description = 'Lorem ipsum dolor sit amet consectetur. At nunc sit placerat varius ultrices vitae leo orci. Arcu sed mi placerat non lacus elementum maurisncidu ntnune.',
  faqs = defaultFAQs,
}: FAQSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 md:px-6 px-[16px] bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Badge, Heading, Description */}
          <div className="flex flex-col">
            {badge && (
              <Badge
                variant="custom"
                className="mb-3 text-sm font-medium w-fit"
              >
                {badge}
              </Badge>
            )}
            {heading && (
              <h2 className="md:text-[38px] text-[26px] font-semibold text-[#323232] mb-3 font-heading leading-[1.1]">
                {heading.includes('vám') ? (
                  <>
                    {heading.split('vám')[0]}vám<br />
                    {heading.split('vám')[1]}
                  </>
                ) : (
                  heading
                )}
              </h2>
            )}
            {description && (
              <p className="md:text-base text-[14px] text-[#818181] md:max-w-[450px] font-sans font-normal">
                {description}
              </p>
            )}
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col w-full  md:min-w-[650px]">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-none relative"
                >
                  <AccordionTrigger className="bg-[#F6F3EB] rounded-full md:pl-8 pl-6 pr-2 py-2 hover:no-underline hover:bg-[#e8e0d8] transition-colors cursor-pointer [&>svg]:hidden [&[data-state=open]>div>svg]:rotate-45 flex items-center justify-between relative z-10">
                    <span className="text-left text-[#323232] font-medium text-base md:text-[18px] flex-1 font-heading">
                      {faq.question}
                    </span>
                    <div className="w-[46px] h-[46px] md:w-[50px] md:h-[50px] rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <PlusIcon className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-[#9E8B61] transition-transform duration-300 ease-in-out" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white rounded-b-[24px] -mt-4 relative z-0 mx-2 origin-top">
                    <div className="px-6 py-4 text-[#818181] text-base pt-8 font-heading font-normal">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

