import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-professional text-professional-foreground">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">CertifyPro Standards</span>
            </div>
            <p className="text-professional-foreground/80">
              Your trusted partner for professional certification services and quality assurance solutions.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-professional-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-professional-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Globe className="h-5 w-5 text-professional-foreground/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-professional-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">ISO Certifications</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Product Certification</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compliance Auditing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Management Systems</a></li>
            </ul>
          </div>

          {/* Standards */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Standards</h3>
            <ul className="space-y-2 text-professional-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">ISO 9001 Quality</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ISO 14001 Environmental</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ISO 45001 Safety</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ISO 27001 Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Standards</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-professional-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@certifyprostandards.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>123 Certification Plaza<br />Business District, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-professional-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-professional-foreground/60 text-sm">
              © 2024 CertifyPro Standards. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-professional-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}