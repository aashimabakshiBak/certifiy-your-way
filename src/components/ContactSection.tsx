import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { countries } from '@/data/countries'
import { z } from 'zod'
import { useState } from 'react'
import { useToast } from "@/hooks/use-toast"

// Validation schema
const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters"),
  country: z.string().min(1, "Please select a country"),
  certificationCategory: z.string().min(1, "Please select a certification category"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  topicCategory: z.string().min(1, "Please select a topic category"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters")
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    certificationCategory: '',
    inquiryType: '',
    topicCategory: '',
    message: ''
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      contactSchema.parse(formData)
      setErrors({})
      
      // Here you would typically send the data to your backend
      toast({
        title: "Success!",
        description: "Your request has been submitted successfully. We'll get back to you soon.",
      })
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        country: '',
        certificationCategory: '',
        inquiryType: '',
        topicCategory: '',
        message: ''
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message
          }
        })
        setErrors(fieldErrors)
        
        toast({
          title: "Validation Error",
          description: "Please check the form and fix any errors.",
          variant: "destructive"
        })
      }
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-professional mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-professional">{t('requestInformation')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('firstName')} *</Label>
                    <Input 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John" 
                      className={errors.firstName ? "border-destructive" : ""}
                    />
                    {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('lastName')} *</Label>
                    <Input 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Doe" 
                      className={errors.lastName ? "border-destructive" : ""}
                    />
                    {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('email')} *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@company.com" 
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">{t('company')}</Label>
                  <Input 
                    id="company" 
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your Company" 
                    className={errors.company ? "border-destructive" : ""}
                  />
                  {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                </div>

                {/* Country Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="country">{t('country')} *</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                    <SelectTrigger className={`w-full ${errors.country ? "border-destructive" : ""}`}>
                      <SelectValue placeholder={t('selectCountry')} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border shadow-lg max-h-60">
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.country && <p className="text-sm text-destructive">{errors.country}</p>}
                </div>

                {/* Certification Category Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="certification-category">{t('certificationCategory')} *</Label>
                  <Select value={formData.certificationCategory} onValueChange={(value) => handleInputChange('certificationCategory', value)}>
                    <SelectTrigger className={`w-full ${errors.certificationCategory ? "border-destructive" : ""}`}>
                      <SelectValue placeholder={t('selectCertificationCategory')} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border shadow-lg">
                      <SelectItem value="quality-management">{t('qualityManagement')}</SelectItem>
                      <SelectItem value="environmental-management">{t('environmentalManagement')}</SelectItem>
                      <SelectItem value="health-safety">{t('healthSafety')}</SelectItem>
                      <SelectItem value="information-security">{t('informationSecurity')}</SelectItem>
                      <SelectItem value="food-safety">{t('foodSafety')}</SelectItem>
                      <SelectItem value="energy-management">{t('energyManagement')}</SelectItem>
                      <SelectItem value="business-continuity">{t('businessContinuity')}</SelectItem>
                      <SelectItem value="it-service-management">{t('itServiceManagement')}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.certificationCategory && <p className="text-sm text-destructive">{errors.certificationCategory}</p>}
                </div>

                {/* First Original Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">{t('inquiryType')} *</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                    <SelectTrigger className={`w-full ${errors.inquiryType ? "border-destructive" : ""}`}>
                      <SelectValue placeholder={t('selectInquiryType')} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border shadow-lg">
                      <SelectItem value="quote">{t('requestQuote')}</SelectItem>
                      <SelectItem value="consultation">{t('scheduleConsultation')}</SelectItem>
                      <SelectItem value="information">{t('getInformation')}</SelectItem>
                      <SelectItem value="support">{t('techSupport')}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.inquiryType && <p className="text-sm text-destructive">{errors.inquiryType}</p>}
                </div>

                {/* Second Original Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="topic-category">{t('topicCategory')} *</Label>
                  <Select value={formData.topicCategory} onValueChange={(value) => handleInputChange('topicCategory', value)}>
                    <SelectTrigger className={`w-full ${errors.topicCategory ? "border-destructive" : ""}`}>
                      <SelectValue placeholder={t('selectTopicCategory')} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border shadow-lg">
                      <SelectItem value="iso-9001">{t('iso9001')}</SelectItem>
                      <SelectItem value="iso-14001">{t('iso14001')}</SelectItem>
                      <SelectItem value="iso-45001">{t('iso45001')}</SelectItem>
                      <SelectItem value="iso-27001">{t('iso27001')}</SelectItem>
                      <SelectItem value="product-certification">{t('productCert')}</SelectItem>
                      <SelectItem value="compliance-audit">{t('complianceAudit')}</SelectItem>
                      <SelectItem value="training">{t('training')}</SelectItem>
                      <SelectItem value="other">{t('other')}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.topicCategory && <p className="text-sm text-destructive">{errors.topicCategory}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('message')}</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('messagePlaceholder')}
                    rows={4}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full" size="lg">
                  {t('submitRequest')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-professional mb-4">{t('contactInformation')}</h3>
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
                <h3 className="text-xl font-semibold text-professional mb-4">{t('officeHours')}</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{t('mondayFriday')}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('saturday')}</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('sunday')}</span>
                    <span>{t('closed')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-professional mb-4">{t('whyChoose')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{t('fastTurnaround')}</li>
                  <li>{t('competitivePricing')}</li>
                  <li>{t('expertConsultation')}</li>
                  <li>{t('globalRecognition')}</li>
                  <li>{t('customerSupport')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}