'use client'

interface FullWidthImageSectionProps {
  src?: string
  alt?: string
}

export function FullWidthImageSection({
  src = '/fullwidth.png',
  alt = 'Full width image',
}: FullWidthImageSectionProps) {
  return (
          <section className="w-full py-0">
            <div className="w-full relative aspect-[16/9] md:aspect-[16/7] bg-gray-100">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image doesn't exist
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent && !parent.querySelector('.placeholder')) {
              const placeholder = document.createElement('div')
              placeholder.className = 'placeholder w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center absolute inset-0'
              placeholder.innerHTML = `<span class="text-gray-400 text-sm">${alt}</span>`
              parent.appendChild(placeholder)
            }
          }}
        />
      </div>
    </section>
  )
}

