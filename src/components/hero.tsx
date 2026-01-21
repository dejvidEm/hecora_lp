import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex flex-col min-h-screen bg-[#f5f1ed] px-6 pt-24 pb-0 overflow-visible">
      <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="mt-8 md:mt-0 mb-3 md:mb-6 text-balance text-4xl font-semibold leading-none tracking-tight text-[#1a2b4a] md:text-6xl lg:text-7xl font-heading">
          Vytvorte hosťom zážitok, na ktorý sa vrátia
        </h1>
        <p className="mb-8 text-pretty text-base text-[#1a2b4a]/70 md:text-xl">
          Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.
        </p>
        <Button size="lg" className="rounded-full bg-[#9E8B61] px-8 py-6 text-base text-white hover:bg-[#9E8B61]/90 mb-8">
          Vyskúšať zdarma
        </Button>
      </div>
      {/* Mockup Image with overlapping side images - Bottom aligned with hero section */}
      <div className="w-full flex justify-center mt-auto relative">
        {/* Left overlapping image */}
        <div className="absolute left-0 top-1/2 z-10 hidden md:block" style={{ transform: 'translateY(-75%) translateX(15%)' }}>
          <img 
            src="/about/about hotel.png" 
            alt="About hotel" 
            className="w-48 md:w-64 lg:w-80 h-auto object-contain"
          />
        </div>
        
        {/* Center mockup */}
        <img 
          src="/mockup.png" 
          alt="Platform mockup" 
          className="w-full max-w-2xl md:max-w-3xl h-auto object-contain relative z-0"
        />
        
        {/* Right overlapping image */}
        <div className="absolute right-0 top-1/2 z-10 hidden md:block" style={{ transform: 'translateY(-85%) translateX(-15%)' }}>
          <img 
            src="/about/Frame 2072752105.png" 
            alt="Frame" 
            className="w-48 md:w-64 lg:w-80 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
