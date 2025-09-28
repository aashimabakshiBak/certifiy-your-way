import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Shield } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('heroTitle')}
            <span className="block text-trust-foreground">{t('heroSubtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              {t('getCertified')}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              {t('viewServices')}
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-trust-foreground" />
              <span>{t('isoCertified')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-trust-foreground" />
              <span>{t('yearsExperience')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-trust-foreground" />
              <span>{t('globallyRecognized')}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/10 rounded-full"></div>
    </section>
  )
}