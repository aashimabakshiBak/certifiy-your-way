import { ThemeToggle } from "./ThemeToggle"
import { LanguageSelector } from "./LanguageSelector"
import { Button } from "@/components/ui/button"
import { Shield, Menu } from "lucide-react"
import { useState } from "react"
import { useTranslation } from 'react-i18next'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-professional">CertifyPro Standards</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            {t('home')}
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            {t('services')}
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t('about')}
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t('contact')}
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-2">
            <a href="#home" className="block text-sm font-medium hover:text-primary transition-colors">
              {t('home')}
            </a>
            <a href="#services" className="block text-sm font-medium hover:text-primary transition-colors">
              {t('services')}
            </a>
            <a href="#about" className="block text-sm font-medium hover:text-primary transition-colors">
              {t('about')}
            </a>
            <a href="#contact" className="block text-sm font-medium hover:text-primary transition-colors">
              {t('contact')}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}