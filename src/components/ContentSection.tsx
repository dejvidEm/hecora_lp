import { Button } from '@library-ui/components'

export default function ContentSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        {/* Left Navigation Menu */}
        <aside className="w-full lg:w-64 bg-gray-900 text-white flex-shrink-0">
          <div className="p-4 border-b border-gray-800">
            <select className="w-full bg-gray-800 text-white px-3 py-2 rounded text-sm outline-none">
              <option>Apartmán Deluxe</option>
            </select>
          </div>
          <nav className="p-4 space-y-1">
            <a href="#" className="block px-3 py-2 text-sm text-white bg-gray-800 rounded">
              Môj pobyt
            </a>
            <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">
              Moje body a odmeny
            </a>
            <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">
              Moje rezervácie
            </a>
            <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">
              Moje platby
            </a>
            <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">
              Moje údaje
            </a>
            <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">
              Nastavenia
            </a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-50 p-6 lg:p-8 space-y-8">
          {/* Section 1: Môj pobyt */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Môj pobyt</h2>
                <p className="text-gray-600">Apartmán Deluxe</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button fullWidth={false}>
                  Zobraziť všetky rezervácie
                </Button>
              </div>
            </div>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>

          {/* Section 2: Moje body a odmeny */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Moje body a odmeny</h2>
                <p className="text-gray-600">Získajte body za každú rezerváciu a vymeňte ich za skvelé odmeny.</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button fullWidth={false}>
                  Zobraziť všetky body
                </Button>
              </div>
            </div>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>

          {/* Section 3: Moje rezervácie */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Moje rezervácie</h2>
                <p className="text-gray-600">Prehľad vašich aktuálnych a minulých rezervácií.</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button fullWidth={false}>
                  Zobraziť všetky rezervácie
                </Button>
              </div>
            </div>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </main>
      </div>
    </section>
  )
}
