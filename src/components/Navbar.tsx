import { Button } from '@/components/ui/button-library'

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L24 24H0L12 0Z" fill="#1e3a8a"/>
                </svg>
                <span className="text-2xl font-bold text-blue-900 uppercase">HECORA</span>
              </div>
              <span className="text-xs text-gray-500 mt-0.5">YOUR DIGITAL GUIDE</span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">O nás</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Výhody</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Funkcie</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Cenník</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">FAQs</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Kontakt</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 text-sm font-medium">
              Prihlásiť sa
            </button>
            <Button className="hidden sm:block" fullWidth={false} style={{ backgroundColor: '#8b4021' }}>
              Začať zdarma
            </Button>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

