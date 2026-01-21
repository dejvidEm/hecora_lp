'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button-library"

const navItems = [
  { label: "O nás", href: "#" },
  { label: "Výhody", href: "#" },
  { label: "Funkcie", href: "#" },
  { label: "Cenník", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Kontakt", href: "#" },
]

export function HeaderActions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <Button variant="outline" color="#9E8B61" className="whitespace-nowrap border-2" style={{ borderColor: '#9E8B61' }}>
          Prihlásiť sa
        </Button>
        <Button color="#9E8B61">Začať zdarma</Button>
      </div>

      {/* Mobile Icons */}
      <div className="md:hidden flex items-center gap-3">
        {/* User Icon */}
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
          <svg
            className="w-6 h-6 text-[#9E8B61]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        {/* Burger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-[#9E8B61]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`absolute top-full left-4 right-4 bg-white shadow-lg md:hidden z-50 overflow-hidden transition-all duration-300 ease-in-out rounded-xl ${
          isMenuOpen ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="px-6 py-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-[#1a2b4a] transition-colors hover:text-[#9E8B61] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
