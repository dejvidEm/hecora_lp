'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PlatformShowcaseSectionProps {
  badge?: string
  heading?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
}

export function PlatformShowcaseSection({
  badge = 'O nás',
  heading = 'Prečo si vybrať práve našu platformu',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  buttonText = 'Vyskúšať zdarma',
  onButtonClick,
}: PlatformShowcaseSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 md:px-2 px-2 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[12px] md:gap-8">
            {/* Left Side - Badge, Heading */}
            <div className="flex-1">
              {badge && (
                <Badge
                  variant="custom"
                  className="mb-[12px] text-sm font-medium"
                >
                  {badge}
                </Badge>
              )}
              {heading && (
                <h2 className="text-[26px] md:text-[38px] font-semibold text-[#323232] md:mb-0 font-heading leading-[1.1]">
                  {heading.includes('práve') ? (
                    <>
                      {heading.split('práve')[0]}práve<br />
                      {heading.split('práve')[1]}
                    </>
                  ) : (
                    heading
                  )}
                </h2>
              )}
            </div>

            {/* Right Side - Description and Button */}
            <div className="flex-1 md:max-w-lg">
              {description && (
                <p className="text-[14px] md:text-base text-[#818181] mb-6 font-sans font-normal">
                  {description}
                </p>
              )}
              {buttonText && (
                <Button
                  onClick={onButtonClick}
                  className="rounded-full bg-[#9E8B61] text-white hover:bg-[#9E8B61]/90 px-[20px] py-6 text-[16px] font-medium font-heading shadow-lg"
                >
                  {buttonText}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Stat Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px] md:gap-[12px]">
          {/* Left Image - matches height of two right images combined */}
          <div className="md:col-span-2 h-full">
            <StatImage
              src="/ff1.png"
              alt="50% menej byrokracie"
              className="h-full"
            />
          </div>
          {/* Two Smaller Images - side by side on mobile, stacked vertically on desktop */}
          <div className="grid grid-cols-2 md:flex md:flex-col gap-[12px] md:gap-4 md:col-span-1 h-full md:h-auto">
            <StatImage
              src="/stat-2.jpg"
              alt="50% menej byrokracie"
              className="md:flex-1 h-full md:h-auto"
              percentage="50%"
              text="menej byrokracie"
              backgroundColor="#F6F3EB"
              textColor="#323232"
            />
            <StatImage
              src="/stat-3.jpg"
              alt="70% menej otázok"
              className="md:flex-1 h-full md:h-auto"
              percentage="70%"
              text="menej otázok"
              backgroundColor="#072557"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatImage({
  src,
  alt,
  className,
  percentage,
  text,
  backgroundColor,
  textColor,
}: {
  src: string
  alt: string
  className?: string
  percentage?: string
  text?: string
  backgroundColor?: string
  textColor?: string
}) {
  return (
    <div 
      className={cn('relative rounded-[24px] overflow-hidden', className)}
      style={{
        backgroundColor: backgroundColor || undefined,
        minHeight: backgroundColor ? '150px' : '200px',
      }}
    >
      {!backgroundColor && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            minHeight: '200px',
          }}
          onError={(e) => {
            // Fallback to placeholder if image doesn't exist
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent && !parent.querySelector('.placeholder')) {
              const placeholder = document.createElement('div')
              placeholder.className = 'placeholder w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'
              placeholder.style.minHeight = '200px'
              placeholder.innerHTML = `<span class="text-gray-400 text-sm">${alt}</span>`
              parent.appendChild(placeholder)
            }
          }}
        />
      )}
      {/* Text Overlay - Left and Center Aligned */}
      {percentage && (
        <div className="absolute inset-0 flex flex-col items-start justify-center z-10 p-6 md:p-8">
          <div className="text-left" style={{ color: textColor || 'white' }}>
            <div className="text-5xl md:text-8xl lg:text-9xl font-bold font-heading mb-2" style={{ color: textColor || 'white' }}>
              {percentage}
            </div>
            {text && (
              <div className="text-base md:text-lg lg:text-xl" style={{ color: textColor || 'white' }}>
                {text}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}


