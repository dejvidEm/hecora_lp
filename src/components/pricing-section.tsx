'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

interface PricingFeature {
  text: string
}

interface PricingPlan {
  id: string
  name: string
  monthlyPrice: number
  yearlyPrice: number
  description: string
  features: PricingFeature[]
  highlighted?: boolean
}

interface PricingSectionProps {
  badge?: string
  heading?: string
  plans?: PricingPlan[]
}

const defaultPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 9,
    yearlyPrice: 8,
    description: '2-týždňové bezplatné testovacie obdobie',
    features: [
      { text: '1 objekt / ubytovanie' },
      { text: 'Digitálny sprievodca pre hostí' },
      { text: 'Online check-in' },
      { text: 'Základné integrácie' },
      { text: 'Automatické notifikácie' },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    monthlyPrice: 19,
    yearlyPrice: 17,
    description: '2-týždňové bezplatné testovacie obdobie',
    features: [
      { text: '1 objekt / ubytovanie' },
      { text: 'Digitálny sprievodca pre hostí' },
      { text: 'Online check-in' },
      { text: 'Základné integrácie' },
      { text: 'Automatické notifikácie' },
      { text: 'Automatické notifikácie' },
    ],
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 49,
    yearlyPrice: 44,
    description: '2-týždňové bezplatné testovacie obdobie',
    features: [
      { text: 'Neobmedzený počet objektov' },
      { text: 'Vlastný dizajn a branding' },
      { text: 'API prístup' },
      { text: 'Prémiové integrácie' },
      { text: 'Prioritná podpora' },
      { text: 'Individuálne automatizácie' },
    ],
  },
]

export function PricingSection({
  badge = 'Cenové balíčky',
  heading = 'Cenník služieb',
  plans = defaultPlans,
}: PricingSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>(
    'monthly'
  )
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(1) // Start on middle card (index 1)

  useEffect(() => {
    if (!api) {
      return
    }

    // Set initial slide to middle card
    api.scrollTo(1)

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
              className="mb-4 text-sm font-medium"
            >
              {badge}
            </Badge>
          )}
          {heading && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a2b4a] mb-8 font-heading">
              {heading}
            </h2>
          )}

          {/* Billing Period Toggle */}
          <div className="inline-flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-colors',
                billingPeriod === 'monthly'
                  ? 'bg-[#8b7355] text-white'
                  : 'text-gray-700 hover:text-gray-900'
              )}
            >
              Mesačné
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-colors',
                billingPeriod === 'yearly'
                  ? 'bg-[#8b7355] text-white'
                  : 'text-gray-700 hover:text-gray-900'
              )}
            >
              Ročné
            </button>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:flex md:justify-center gap-0 md:gap-0 relative items-end">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={cn(
                'relative',
                index === 0 && 'z-10 -mr-4 w-[33%] h-[550px]',
                index === 1 && 'z-20 w-[28%] h-[650px]',
                index === 2 && 'z-10 -ml-4 w-[33%] h-[550px]'
              )}
            >
              <PricingCard
                plan={plan}
                billingPeriod={billingPeriod}
              />
            </div>
          ))}
        </div>

        {/* Mobile: Carousel Layout */}
        <div className="md:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {plans.map((plan) => (
                <CarouselItem
                  key={plan.id}
                  className="pl-2 basis-[85%]"
                >
                  <PricingCard
                    plan={plan}
                    billingPeriod={billingPeriod}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  current === index
                    ? 'bg-[#8b7355] w-8'
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

function PricingCard({
  plan,
  billingPeriod,
}: {
  plan: PricingPlan
  billingPeriod: 'monthly' | 'yearly'
}) {
  const price =
    billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice

  return (
    <div
      className={cn(
        'rounded-2xl md:rounded-3xl px-8 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14 flex flex-col h-full justify-start',
        plan.highlighted
          ? 'text-white'
          : 'bg-[#f5f1ed] text-[#1a2b4a]'
      )}
      style={
        plan.highlighted
          ? {
              background: 'linear-gradient(to top right, #062B67 0%, #052150 53%, #021D4A 100%)',
            }
          : undefined
      }
    >
      {/* Price */}
      <div className="mb-4 flex items-baseline gap-2">
        <div className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-semibold",
          plan.highlighted ? "text-white" : "text-[#9E8B61]"
        )}>
          {price} €
        </div>
        <div className={cn(
          "text-sm opacity-80",
          plan.highlighted ? "text-white" : "text-[#1a2b4a]"
        )}>/mesiac (bez DPH)</div>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-semibold mb-2 font-heading">{plan.name}</h3>

      {/* Description */}
      <p className="text-sm md:text-base opacity-80 mb-6">
        {plan.description}
      </p>

      {/* Features */}
      <div className="flex-1 space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckIcon
                className="w-3 h-3 text-[#9E8B61]"
              />
            </div>
            <span className="text-sm md:text-base">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button
        className={cn(
          'w-full rounded-full py-6 text-base font-medium',
          plan.highlighted
            ? 'bg-white text-[#1a2b4a] hover:bg-gray-100'
            : 'bg-[#9E8B61] text-white hover:bg-[#9E8B61]/90'
        )}
      >
        Začať používať
      </Button>
    </div>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

