import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .hero-left-image {
            transform: translate(-160%, -110%) !important;
          }
          .hero-right-image {
            transform: translate(60%, -110%) !important;
          }
        }
      `}</style>
    <section className="relative flex flex-col min-h-screen bg-[#f5f1ed] px-6 pt-24 pb-0 overflow-visible">
      <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="mt-8 md:mt-0 mb-3 md:mb-6 text-balance text-[38px] font-semibold leading-[1.1] tracking-tight text-[#323232] font-heading">
          Vytvorte hosťom zážitok, na ktorý sa vrátia
        </h1>
        <p className="mb-8 text-pretty text-base text-[#818181] font-sans font-normal">
          Platforma sama zabezpečí všetky potrebné údaje, čím vám ušetrí čas a zníži zaťaženie recepcie.
        </p>
        <Button size="lg" className="rounded-full bg-[#9E8B61] px-8 py-6 text-base text-white hover:bg-[#9E8B61]/90 mb-8">
          Vyskúšať zdarma
        </Button>
      </div>
      {/* Mockup Image with overlapping side images - Bottom aligned with hero section */}
      <div className="w-full flex justify-center mt-auto relative">
        {/* Center mockup */}
        <div className="relative z-0">
          <img 
            src="/mockup.png" 
            alt="Platform mockup" 
            className="w-full max-w-2xl md:max-w-3xl h-auto object-contain"
          />
          
          {/* Left overlapping image - positioned relative to mockup center */}
          <div className="absolute left-1/2 top-1/2 z-10 hero-left-image" style={{ transform: 'translate(-140%, -90%)' }}>
            <img 
              src="/about/about hotel.png" 
              alt="About hotel" 
              className="w-32 md:w-64 lg:w-80 h-auto object-contain"
            />
          </div>
          
          {/* Right overlapping image - positioned relative to mockup center */}
          <div className="absolute left-1/2 top-1/2 z-10 hero-right-image" style={{ transform: 'translate(40%, -130%)' }}>
            <img 
              src="/about/Frame 2072752105.png" 
              alt="Frame" 
              className="w-32 md:w-64 lg:w-80 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
