import { Logo } from "./logo"
import { Navigation } from "./navigation"
import { HeaderActions } from "./header-actions"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1ed]/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 relative">
        <Logo />
        <Navigation />
        <HeaderActions />
      </div>
    </header>
  )
}
