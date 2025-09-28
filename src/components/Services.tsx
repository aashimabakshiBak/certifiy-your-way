import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Award, CheckCircle, FileCheck, Users, Zap } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "ISO Certifications",
    description: "Complete ISO certification services including 9001, 14001, 45001, and 27001 standards.",
    features: ["Quality Management", "Environmental Standards", "Health & Safety", "Information Security"],
    popular: true
  },
  {
    icon: Award,
    title: "Product Certification",
    description: "Comprehensive product testing and certification for various industries and markets.",
    features: ["CE Marking", "FCC Compliance", "Safety Testing", "Performance Validation"],
    popular: false
  },
  {
    icon: FileCheck,
    title: "Compliance Auditing",
    description: "Thorough compliance audits to ensure your business meets all regulatory requirements.",
    features: ["Regulatory Compliance", "Process Auditing", "Risk Assessment", "Documentation Review"],
    popular: false
  },
  {
    icon: Users,
    title: "Training & Development",
    description: "Professional training programs to build internal certification capabilities.",
    features: ["Staff Training", "Certification Workshops", "Best Practices", "Ongoing Support"],
    popular: false
  },
  {
    icon: CheckCircle,
    title: "Management Systems",
    description: "Implementation and maintenance of comprehensive management systems.",
    features: ["System Design", "Implementation", "Maintenance", "Continuous Improvement"],
    popular: false
  },
  {
    icon: Zap,
    title: "Fast-Track Services",
    description: "Expedited certification processes for urgent business requirements.",
    features: ["Priority Processing", "Dedicated Support", "Rapid Turnaround", "Emergency Audits"],
    popular: false
  }
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-professional mb-4">
            Our Certification Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive certification solutions tailored to your industry needs. 
            From ISO standards to product certifications, we ensure your business meets the highest quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative shadow-card hover:shadow-hero transition-all duration-300 group">
              {service.popular && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                  Most Popular
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
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Don't see what you're looking for? We offer custom certification solutions.
          </p>
          <Button size="lg" className="px-8">
            Contact Our Experts
          </Button>
        </div>
      </div>
    </section>
  )
}