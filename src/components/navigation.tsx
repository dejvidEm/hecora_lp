const navItems = [
  { label: "O nás", href: "#" },
  { label: "Výhody", href: "#" },
  { label: "Funkcie", href: "#" },
  { label: "Cenník", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Kontakt", href: "#" },
]

export function Navigation() {
  return (
    <nav className="hidden md:block">
      <div className="bg-white rounded-full px-8 py-4">
        <ul className="flex items-center justify-start gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-base font-medium text-black transition-colors hover:text-[#8b7355]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
