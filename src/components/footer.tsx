'use client'

import { Logo } from './logo'
import { PhoneIcon, EnvelopeIcon } from './icons'

export function Footer() {
  return (
    <footer className="w-full bg-white py-12 md:py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Logo Column */}
          <div className="flex flex-col">
            <Logo />
          </div>

          {/* Navigácia Column */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Navigácia</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#1a2b4a] hover:text-[#9E8B61] transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#1a2b4a] hover:text-[#9E8B61] transition-colors">
                  Výhody
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#1a2b4a] hover:text-[#9E8B61] transition-colors">
                  Funkcie
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#1a2b4a] hover:text-[#9E8B61] transition-colors">
                  Cenník
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#1a2b4a] hover:text-[#9E8B61] transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Dokumenty Column */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Dokumenty</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#1a2b4a] hover:text-[#9E8B61] transition-colors">
                  Zásady ochrany osobných údajov
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#1a2b4a] hover:text-[#9E8B61] transition-colors">
                  Všeobecné obchodné podmienky
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#1a2b4a] hover:text-[#9E8B61] transition-colors">
                  Podmienky predplatného
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt Column */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F6F3EB] flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-4 h-4 text-[#1a2b4a]" />
                </div>
                <a href="tel:+421944193950" className="text-sm text-[#1a2b4a] hover:text-[#9E8B61] transition-colors">
                  +421 944 193 950
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F6F3EB] flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-4 h-4 text-[#1a2b4a]" />
                </div>
                <a href="mailto:support@support.sk" className="text-sm text-[#1a2b4a] hover:text-[#9E8B61] transition-colors">
                  support@support.sk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-2 mt-2">
          <p className="text-left text-sm text-gray-400">
            © 2025 Nazov. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  )
}

