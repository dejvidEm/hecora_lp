export default function DashboardWidgets() {
  return (
    <section className="w-full bg-gray-50 py-12 -mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pie Chart Widget */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Zdroje rezervácií</h3>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Pie Chart Placeholder */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-blue-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">56</span>
                    </div>
                  </div>
                  {/* Orange segment */}
                  <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-orange-200 rounded-tl-full"></div>
                </div>
              </div>
              {/* Legend */}
              <div className="flex-1">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500"></div>
                    <span className="text-sm text-gray-700">Booking.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-400"></div>
                    <span className="text-sm text-gray-700">Expedia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-200"></div>
                    <span className="text-sm text-gray-700">Priame rezervácie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400"></div>
                    <span className="text-sm text-gray-700">Iné</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <select className="text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer w-full">
                <option>-- Maj 2025</option>
              </select>
            </div>
          </div>

          {/* Bar Chart Widget */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Nadpis</h3>
            <div className="h-64 flex items-end justify-between gap-2 mb-6">
              {[
                { label: 'Jan', height: 65 },
                { label: 'Feb', height: 45 },
                { label: 'Mar', height: 80 },
                { label: 'Apr', height: 55 },
                { label: 'Máj', height: 70 },
                { label: 'Jún', height: 60 }
              ].map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center h-full">
                  <div className="w-full h-full flex flex-col justify-end gap-1">
                    <div 
                      className="bg-blue-600 rounded-t"
                      style={{ height: `${item.height}%` }}
                    ></div>
                    <div 
                      className="bg-gray-300 rounded-t"
                      style={{ height: `${100 - item.height}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-2">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-200">
              <select className="text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer w-full">
                <option>Maj 2025</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

