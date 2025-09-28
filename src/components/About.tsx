import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Globe, Trophy, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Certified Companies",
    description: "Businesses worldwide trust our certification services"
  },
  {
    icon: Globe,
    number: "25+",
    label: "Countries Served",
    description: "Global reach with local expertise"
  },
  {
    icon: Trophy,
    number: "15+",
    label: "Years Experience",
    description: "Proven track record in certification excellence"
  },
  {
    icon: Clock,
    number: "98%",
    label: "On-Time Delivery",
    description: "Reliable and efficient certification processes"
  }
]

const certifications = [
  "ISO 9001:2015 Certified",
  "IAF MLA Recognized", 
  "UKAS Accredited",
  "ANAB Accredited",
  "Global Standards Compliant"
]

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-professional mb-6">
              Leading Certification Authority Since 2008
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              CertifyPro Standards has been at the forefront of quality certification, 
              helping businesses achieve excellence through rigorous standards and expert guidance. 
              Our commitment to integrity and precision has made us a trusted partner for organizations worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in ISO certifications, product compliance, and management system implementations, 
              ensuring your business not only meets regulatory requirements but exceeds industry expectations.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-professional">Our Accreditations</h3>
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
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To empower businesses worldwide by providing reliable, efficient, and comprehensive 
                certification services that enhance quality, ensure compliance, and drive sustainable growth. 
                We are committed to maintaining the highest standards of integrity while delivering 
                exceptional value to our clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}