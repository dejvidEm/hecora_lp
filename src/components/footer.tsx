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
            <h3 className="text-[18px] font-semibold text-[#929292] mb-4 font-heading">Navigácia</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[18px] font-semibold text-[#323232] hover:text-[#9E8B61] transition-colors font-heading">
                  O nás
                </a>
              </li>
              <li>
                <a href="#" className="text-[18px] font-semibold text-[#323232] hover:text-[#9E8B61] transition-colors font-heading">
                  Výhody
                </a>
              </li>
              <li>
                <a href="#" className="text-[18px] font-semibold text-[#323232] hover:text-[#9E8B61] transition-colors font-heading">
                  Funkcie
                </a>
              </li>
              <li>
                <a href="#" className="text-[18px] font-semibold text-[#323232] hover:text-[#9E8B61] transition-colors font-heading">
                  Cenník
                </a>
              </li>
              <li>
                <a href="#" className="text-[18px] font-semibold text-[#323232] hover:text-[#9E8B61] transition-colors font-heading">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Dokumenty Column */}
          <div className="flex flex-col">
            <h3 className="text-[18px] font-semibold text-[#929292] mb-4 font-heading">Dokumenty</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[18px] font-semibold text-[#323232] hover:text-[#9E8B61] transition-colors font-heading">
                  Zásady ochrany osobných údajov
                </a>
              </li>
              <li>
                <a href="#" className="text-[18px] font-semibold text-[#323232] hover:text-[#9E8B61] transition-colors font-heading">
                  Všeobecné obchodné podmienky
                </a>
              </li>
              <li>
                <a href="#" className="text-[18px] font-semibold text-[#323232] hover:text-[#9E8B61] transition-colors font-heading">
                  Podmienky predplatného
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt Column */}
          <div className="flex flex-col">
            <h3 className="text-[18px] font-semibold text-[#929292] mb-4 font-heading">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] rounded-full bg-[#F6F3EB] border border-[#9E8B61]/20 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-[12px] h-[12px] text-[#9E8B61]" />
                </div>
                <a href="tel:+421944193950" className="text-[18px] font-semibold text-[#323232] hover:text-[#9E8B61] transition-colors font-heading">
                  +421 944 193 950
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] rounded-full bg-[#F6F3EB] border border-[#9E8B61]/20 flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-[12px] h-[12px] text-[#9E8B61]" />
                </div>
                <a href="mailto:support@support.sk" className="text-[18px] font-semibold text-[#323232] hover:text-[#9E8B61] transition-colors font-heading">
                  support@support.sk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-2 mt-2">
          <p className="text-left text-base text-gray-400 font-heading">
            © 2025 Nazov. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  )
}

