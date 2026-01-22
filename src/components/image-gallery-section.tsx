'use client'

import { Badge } from '@/components/ui/badge'

interface ImageGallerySectionProps {
  badge?: string
  heading?: string
  description?: string
  mainImage?: string
  mainImageAlt?: string
  smallImages?: string[]
  smallImagesAlt?: string[]
}

export function ImageGallerySection({
  badge = 'Ako to funguje',
  heading = 'Celý zážitok vašich hostí v 3 jednoduchých krokoch',
  mainImage = '/main.png',
  mainImageAlt = 'Main gallery image',
  smallImages = ['/gallery-1.jpg', '/gallery-2.jpg', '/gallery-3.jpg'],
}: ImageGallerySectionProps) {
  return (
    <section className="w-full py-16 md:py-24 px-6 bg-white">
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
            <h2 className="text-[38px] font-semibold text-[#323232] mb-4 font-heading leading-[1.1]">
              {heading.includes(' v ') ? (
                <>
                  {heading.split(' v ')[0]} v<br />
                  {heading.split(' v ')[1]}
                </>
              ) : (
                heading
              )}
            </h2>
          )}
        </div>

        {/* Images Container - wider on desktop */}
        <div className="w-full flex justify-center">
          <div className="w-full md:w-[1280px]">
            {/* All Images Stacked Vertically */}
            <div className="space-y-2 md:space-y-3">
              {/* Large Main Image */}
              <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100">
                <img
                  src={mainImage}
                  alt={mainImageAlt}
                  className="w-full h-full object-cover aspect-[4/3] md:aspect-[16/7]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent && !parent.querySelector('.placeholder')) {
                      const placeholder = document.createElement('div')
                      placeholder.className = 'placeholder w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'
                      placeholder.style.aspectRatio = '16/7'
                      placeholder.innerHTML = `<span class="text-gray-400 text-sm">${mainImageAlt}</span>`
                      parent.appendChild(placeholder)
                    }
                  }}
                />
              </div>

              {/* Three Small Images - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                {smallImages.slice(0, 3).map((_src, index) => {
                  const formattedNumber = String(index + 1).padStart(2, '0')
                  return (
                    <div
                      key={index}
                      className="rounded-xl md:rounded-2xl overflow-hidden bg-[#F6F3EB] px-6 py-10 flex items-start gap-4"
                      style={{
                        minHeight: '120px',
                      }}
                    >
                      {/* Number on the left top */}
                      <div className="text-[32px] font-medium text-[#9E8B61] font-heading flex-shrink-0">
                        {formattedNumber}
                      </div>
                      
                      {/* Heading and text on the right */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-[20px] font-semibold text-[#323232] mb-[8px] font-heading">
                          {index === 0 
                            ? 'Pošlete hosťovi odkaz'
                            : index === 1 
                            ? 'Hosť vyplní online check-in'
                            : 'Hosť získa prístup k platforme'}
                        </h3>
                        <p className="text-base text-[#818181] font-sans font-normal">
                          Ubytovatelia vedia jednoducho propagovať vlastné služby, wellness, zážitky alebo partnerské zľavy.
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

