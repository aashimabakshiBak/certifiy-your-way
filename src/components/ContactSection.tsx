import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-professional mb-4">
            Get Your Certification Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact our certification experts to discuss your requirements and get a customized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-professional">Request Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Your Company" />
              </div>

              {/* First Dropdown - matching the reference */}
              <div className="space-y-2">
                <Label htmlFor="inquiry-type">I would like to: *</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Request a Quote" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border shadow-lg">
                    <SelectItem value="quote">Request a Quote</SelectItem>
                    <SelectItem value="consultation">Schedule Consultation</SelectItem>
                    <SelectItem value="information">Get Information</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Second Dropdown - matching the reference */}
              <div className="space-y-2">
                <Label htmlFor="topic-category">Please choose Topic Category *</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Please choose..." />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border shadow-lg">
                    <SelectItem value="iso-9001">ISO 9001 Quality Management</SelectItem>
                    <SelectItem value="iso-14001">ISO 14001 Environmental</SelectItem>
                    <SelectItem value="iso-45001">ISO 45001 Health & Safety</SelectItem>
                    <SelectItem value="iso-27001">ISO 27001 Information Security</SelectItem>
                    <SelectItem value="product-certification">Product Certification</SelectItem>
                    <SelectItem value="compliance-audit">Compliance Audit</SelectItem>
                    <SelectItem value="training">Training & Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your certification requirements..."
                  rows={4}
                />
              </div>

              <Button className="w-full" size="lg">
                Submit Request
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-professional mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@certifyprostandards.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Certification Plaza, Business District, NY 10001</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-professional mb-4">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-professional mb-4">Why Choose CertifyPro?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Fast turnaround times</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Expert consultation</li>
                  <li>✓ Global recognition</li>
                  <li>✓ 24/7 customer support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}