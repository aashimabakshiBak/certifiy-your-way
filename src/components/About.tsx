import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Globe, Trophy, Clock } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: t('certifiedCompanies'),
      description: t('certifiedCompaniesDesc')
    },
    {
      icon: Globe,
      number: "25+",
      label: t('countriesServed'),
      description: t('countriesServedDesc')
    },
    {
      icon: Trophy,
      number: "15+",
      label: t('yearsExp'),
      description: t('yearsExpDesc')
    },
    {
      icon: Clock,
      number: "98%",
      label: t('onTimeDelivery'),
      description: t('onTimeDeliveryDesc')
    }
  ]

  const certifications = [
    "ISO 9001:2015 Certified",
    "IAF MLA Recognized", 
    "UKAS Accredited",
    "ANAB Accredited",
    "Global Standards Compliant"
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-professional mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('aboutDescription1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('aboutDescription2')}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-professional">{t('ourAccreditations')}</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card bg-gradient-card">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-professional mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto shadow-card bg-gradient-hero text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t('ourMission')}</h3>
              <p className="text-lg leading-relaxed">
                {t('missionText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}