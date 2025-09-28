import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Award, CheckCircle, FileCheck, Users, Zap } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function Services() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Shield,
      title: t('isoCertifications'),
      description: t('isoCertificationsDesc'),
      features: [t('qualityMgmt'), t('environmentalStandards'), t('healthSafetyStandards'), t('infoSecurity')],
      popular: true
    },
    {
      icon: Award,
      title: t('productCertification'),
      description: t('productCertificationDesc'),
      features: [t('ceMarking'), t('fccCompliance'), t('safetyTesting'), t('performanceValidation')],
      popular: false
    },
    {
      icon: FileCheck,
      title: t('complianceAuditing'),
      description: t('complianceAuditingDesc'),
      features: [t('regulatoryCompliance'), t('processAuditing'), t('riskAssessment'), t('documentationReview')],
      popular: false
    },
    {
      icon: Users,
      title: t('trainingDevelopment'),
      description: t('trainingDevelopmentDesc'),
      features: [t('staffTraining'), t('certificationWorkshops'), t('bestPractices'), t('ongoingSupport')],
      popular: false
    },
    {
      icon: CheckCircle,
      title: t('managementSystems'),
      description: t('managementSystemsDesc'),
      features: [t('systemDesign'), t('implementation'), t('maintenance'), t('continuousImprovement')],
      popular: false
    },
    {
      icon: Zap,
      title: t('fastTrackServices'),
      description: t('fastTrackServicesDesc'),
      features: [t('priorityProcessing'), t('dedicatedSupport'), t('rapidTurnaround'), t('emergencyAudits')],
      popular: false
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-professional mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative shadow-card hover:shadow-hero transition-all duration-300 group">
              {service.popular && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                  {t('mostPopular')}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-professional">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-trust mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {t('learnMore')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            {t('customSolutions')}
          </p>
          <Button size="lg" className="px-8">
            {t('contactExperts')}
          </Button>
        </div>
      </div>
    </section>
  )
}