import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const en = {
  translation: {
    // Header
    home: "Home",
    services: "Services", 
    about: "About",
    contact: "Contact",
    
    // Hero section
    heroTitle: "Professional Certification",
    heroSubtitle: "Standards You Can Trust",
    heroDescription: "Leading certification authority providing ISO compliance, quality assurance, and industry standard certifications for businesses worldwide.",
    getCertified: "Get Certified Now",
    viewServices: "View Services",
    isoCertified: "ISO Certified Authority",
    yearsExperience: "10+ Years Experience",
    globallyRecognized: "Globally Recognized",
    
    // Services
    servicesTitle: "Our Certification Services",
    servicesDescription: "Comprehensive certification solutions tailored to your industry needs. From ISO standards to product certifications, we ensure your business meets the highest quality standards.",
    isoCertifications: "ISO Certifications",
    isoCertificationsDesc: "Complete ISO certification services including 9001, 14001, 45001, and 27001 standards.",
    productCertification: "Product Certification",
    productCertificationDesc: "Comprehensive product testing and certification for various industries and markets.",
    complianceAuditing: "Compliance Auditing",
    complianceAuditingDesc: "Thorough compliance audits to ensure your business meets all regulatory requirements.",
    trainingDevelopment: "Training & Development",
    trainingDevelopmentDesc: "Professional training programs to build internal certification capabilities.",
    managementSystems: "Management Systems",
    managementSystemsDesc: "Implementation and maintenance of comprehensive management systems.",
    fastTrackServices: "Fast-Track Services",
    fastTrackServicesDesc: "Expedited certification processes for urgent business requirements.",
    mostPopular: "Most Popular",
    learnMore: "Learn More",
    contactExperts: "Contact Our Experts",
    customSolutions: "Don't see what you're looking for? We offer custom certification solutions.",
    
    // About
    aboutTitle: "Leading Certification Authority Since 2008",
    aboutDescription1: "CertifyPro Standards has been at the forefront of quality certification, helping businesses achieve excellence through rigorous standards and expert guidance. Our commitment to integrity and precision has made us a trusted partner for organizations worldwide.",
    aboutDescription2: "We specialize in ISO certifications, product compliance, and management system implementations, ensuring your business not only meets regulatory requirements but exceeds industry expectations.",
    ourAccreditations: "Our Accreditations",
    certifiedCompanies: "Certified Companies",
    certifiedCompaniesDesc: "Businesses worldwide trust our certification services",
    countriesServed: "Countries Served",
    countriesServedDesc: "Global reach with local expertise",
    yearsExp: "Years Experience",
    yearsExpDesc: "Proven track record in certification excellence",
    onTimeDelivery: "On-Time Delivery",
    onTimeDeliveryDesc: "Reliable and efficient certification processes",
    ourMission: "Our Mission",
    missionText: "To empower businesses worldwide by providing reliable, efficient, and comprehensive certification services that enhance quality, ensure compliance, and drive sustainable growth. We are committed to maintaining the highest standards of integrity while delivering exceptional value to our clients.",
    
    // Contact
    contactTitle: "Get Your Certification Quote",
    contactDescription: "Contact our certification experts to discuss your requirements and get a customized quote.",
    requestInformation: "Request Information",
    firstName: "First Name",
    lastName: "Last Name", 
    email: "Email",
    company: "Company Name",
    country: "Country",
    selectCountry: "Select Country",
    certificationCategory: "Certification Category",
    selectCertificationCategory: "Select Certification Category",
    inquiryType: "I would like to:",
    selectInquiryType: "Request a Quote",
    topicCategory: "Please choose Topic Category",
    selectTopicCategory: "Please choose...",
    message: "Message",
    messagePlaceholder: "Please describe your certification requirements...",
    submitRequest: "Submit Request",
    contactInformation: "Contact Information",
    officeHours: "Office Hours",
    whyChoose: "Why Choose CertifyPro?",
    
    // Inquiry types
    requestQuote: "Request a Quote",
    scheduleConsultation: "Schedule Consultation", 
    getInformation: "Get Information",
    techSupport: "Technical Support",
    
    // Topic categories
    iso9001: "ISO 9001 Quality Management",
    iso14001: "ISO 14001 Environmental",
    iso45001: "ISO 45001 Health & Safety",
    iso27001: "ISO 27001 Information Security",
    productCert: "Product Certification",
    complianceAudit: "Compliance Audit",
    training: "Training & Development",
    other: "Other",
    
    // Certification categories
    qualityManagement: "Quality Management (ISO 9001)",
    environmentalManagement: "Environmental Management (ISO 14001)",
    healthSafety: "Health & Safety (ISO 45001)",
    informationSecurity: "Information Security (ISO 27001)",
    foodSafety: "Food Safety (ISO 22000)",
    energyManagement: "Energy Management (ISO 50001)",
    businessContinuity: "Business Continuity (ISO 22301)",
    itServiceManagement: "IT Service Management (ISO 20000)",
    
    // Footer
    footerDescription: "Your trusted partner for professional certification services and quality assurance solutions.",
    standards: "Standards",
    customStandards: "Custom Standards",
    contactUs: "Contact Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    rightsReserved: "© 2024 CertifyPro Standards. All rights reserved.",
    
    // Office hours
    mondayFriday: "Monday - Friday",
    saturday: "Saturday", 
    sunday: "Sunday",
    closed: "Closed",
    
    // Why choose us
    fastTurnaround: "✓ Fast turnaround times",
    competitivePricing: "✓ Competitive pricing",
    expertConsultation: "✓ Expert consultation",
    globalRecognition: "✓ Global recognition",
    customerSupport: "✓ 24/7 customer support",
    
    // Service features
    qualityMgmt: "Quality Management",
    environmentalStandards: "Environmental Standards",
    healthSafetyStandards: "Health & Safety",
    infoSecurity: "Information Security",
    ceMarking: "CE Marking",
    fccCompliance: "FCC Compliance", 
    safetyTesting: "Safety Testing",
    performanceValidation: "Performance Validation",
    regulatoryCompliance: "Regulatory Compliance",
    processAuditing: "Process Auditing",
    riskAssessment: "Risk Assessment",
    documentationReview: "Documentation Review",
    staffTraining: "Staff Training",
    certificationWorkshops: "Certification Workshops",
    bestPractices: "Best Practices",
    ongoingSupport: "Ongoing Support",
    systemDesign: "System Design",
    implementation: "Implementation",
    maintenance: "Maintenance",
    continuousImprovement: "Continuous Improvement",
    priorityProcessing: "Priority Processing",
    dedicatedSupport: "Dedicated Support",
    rapidTurnaround: "Rapid Turnaround",
    emergencyAudits: "Emergency Audits"
  }
};

// Arabic translations
const ar = {
  translation: {
    // Header
    home: "الرئيسية",
    services: "الخدمات",
    about: "حولنا", 
    contact: "اتصل بنا",
    
    // Hero section
    heroTitle: "شهادة مهنية",
    heroSubtitle: "معايير يمكنك الثقة بها",
    heroDescription: "سلطة اعتماد رائدة تقدم امتثال ISO وضمان الجودة وشهادات المعايير الصناعية للشركات في جميع أنحاء العالم.",
    getCertified: "احصل على الشهادة الآن",
    viewServices: "عرض الخدمات",
    isoCertified: "سلطة معتمدة من ISO",
    yearsExperience: "أكثر من 10 سنوات خبرة",
    globallyRecognized: "معترف بها عالمياً",
    
    // Services
    servicesTitle: "خدمات الاعتماد لدينا",
    servicesDescription: "حلول اعتماد شاملة مصممة خصيصاً لاحتياجات صناعتك. من معايير ISO إلى شهادات المنتجات، نضمن أن يلبي عملك أعلى معايير الجودة.",
    isoCertifications: "شهادات ISO",
    isoCertificationsDesc: "خدمات شهادة ISO كاملة تشمل معايير 9001 و 14001 و 45001 و 27001.",
    productCertification: "شهادة المنتج",
    productCertificationDesc: "اختبار وشهادة شاملة للمنتجات لمختلف الصناعات والأسواق.",
    complianceAuditing: "تدقيق الامتثال",
    complianceAuditingDesc: "تدقيق شامل للامتثال لضمان أن يلبي عملك جميع المتطلبات التنظيمية.",
    trainingDevelopment: "التدريب والتطوير",
    trainingDevelopmentDesc: "برامج تدريب مهنية لبناء قدرات الاعتماد الداخلية.",
    managementSystems: "أنظمة الإدارة",
    managementSystemsDesc: "تنفيذ وصيانة أنظمة إدارة شاملة.",
    fastTrackServices: "خدمات سريعة",
    fastTrackServicesDesc: "عمليات اعتماد سريعة للمتطلبات التجارية العاجلة.",
    mostPopular: "الأكثر شعبية",
    learnMore: "اعرف المزيد",
    contactExperts: "اتصل بخبرائنا",
    customSolutions: "لا ترى ما تبحث عنه؟ نحن نقدم حلول اعتماد مخصصة.",
    
    // About
    aboutTitle: "سلطة اعتماد رائدة منذ 2008",
    aboutDescription1: "كانت معايير CertifyPro في المقدمة في مجال اعتماد الجودة، مساعدة الشركات على تحقيق التميز من خلال المعايير الصارمة والتوجيه المتخصص. التزامنا بالنزاهة والدقة جعلنا شريكاً موثوقاً للمنظمات في جميع أنحاء العالم.",
    aboutDescription2: "نحن متخصصون في شهادات ISO وامتثال المنتجات وتنفيذ أنظمة الإدارة، مما يضمن أن عملك لا يلبي المتطلبات التنظيمية فحسب بل يتجاوز توقعات الصناعة.",
    ourAccreditations: "اعتماداتنا",
    certifiedCompanies: "شركات معتمدة",
    certifiedCompaniesDesc: "الشركات في جميع أنحاء العالم تثق في خدمات الاعتماد لدينا",
    countriesServed: "البلدان المخدومة",
    countriesServedDesc: "وصول عالمي مع خبرة محلية",
    yearsExp: "سنوات خبرة",
    yearsExpDesc: "سجل حافل مؤكد في تميز الاعتماد",
    onTimeDelivery: "التسليم في الوقت المحدد",
    onTimeDeliveryDesc: "عمليات اعتماد موثوقة وفعالة",
    ourMission: "مهمتنا",
    missionText: "تمكين الشركات في جميع أنحاء العالم من خلال تقديم خدمات اعتماد موثوقة وفعالة وشاملة تعزز الجودة وتضمن الامتثال وتدفع النمو المستدام. نحن ملتزمون بالحفاظ على أعلى معايير النزاهة مع تقديم قيمة استثنائية لعملائنا.",
    
    // Contact
    contactTitle: "احصل على عرض أسعار الاعتماد",
    contactDescription: "اتصل بخبراء الاعتماد لدينا لمناقشة متطلباتك والحصول على عرض أسعار مخصص.",
    requestInformation: "طلب معلومات",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    company: "اسم الشركة",
    country: "البلد",
    selectCountry: "اختر البلد",
    certificationCategory: "فئة الاعتماد",
    selectCertificationCategory: "اختر فئة الاعتماد",
    inquiryType: "أود أن:",
    selectInquiryType: "طلب عرض أسعار",
    topicCategory: "يرجى اختيار فئة الموضوع",
    selectTopicCategory: "يرجى الاختيار...",
    message: "الرسالة",
    messagePlaceholder: "يرجى وصف متطلبات الاعتماد الخاصة بك...",
    submitRequest: "إرسال الطلب",
    contactInformation: "معلومات الاتصال",
    officeHours: "ساعات العمل",
    whyChoose: "لماذا تختار CertifyPro؟",
    
    // Inquiry types
    requestQuote: "طلب عرض أسعار",
    scheduleConsultation: "جدولة استشارة",
    getInformation: "الحصول على معلومات",
    techSupport: "الدعم التقني",
    
    // Topic categories
    iso9001: "إدارة الجودة ISO 9001",
    iso14001: "البيئة ISO 14001",
    iso45001: "الصحة والسلامة ISO 45001",
    iso27001: "أمن المعلومات ISO 27001",
    productCert: "شهادة المنتج",
    complianceAudit: "تدقيق الامتثال",
    training: "التدريب والتطوير",
    other: "أخرى",
    
    // Certification categories
    qualityManagement: "إدارة الجودة (ISO 9001)",
    environmentalManagement: "الإدارة البيئية (ISO 14001)",
    healthSafety: "الصحة والسلامة (ISO 45001)",
    informationSecurity: "أمن المعلومات (ISO 27001)",
    foodSafety: "سلامة الغذاء (ISO 22000)",
    energyManagement: "إدارة الطاقة (ISO 50001)",
    businessContinuity: "استمرارية الأعمال (ISO 22301)",
    itServiceManagement: "إدارة خدمات تكنولوجيا المعلومات (ISO 20000)",
    
    // Footer
    footerDescription: "شريكك الموثوق لخدمات الاعتماد المهنية وحلول ضمان الجودة.",
    standards: "المعايير",
    customStandards: "معايير مخصصة",
    contactUs: "اتصل بنا",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    rightsReserved: "© 2024 معايير CertifyPro. جميع الحقوق محفوظة.",
    
    // Office hours
    mondayFriday: "الاثنين - الجمعة",
    saturday: "السبت",
    sunday: "الأحد",
    closed: "مغلق",
    
    // Why choose us
    fastTurnaround: "✓ أوقات تسليم سريعة",
    competitivePricing: "✓ أسعار تنافسية",
    expertConsultation: "✓ استشارة خبراء",
    globalRecognition: "✓ اعتراف عالمي",
    customerSupport: "✓ دعم العملاء 24/7",
    
    // Service features
    qualityMgmt: "إدارة الجودة",
    environmentalStandards: "المعايير البيئية",
    healthSafetyStandards: "الصحة والسلامة",
    infoSecurity: "أمن المعلومات",
    ceMarking: "علامة CE",
    fccCompliance: "امتثال FCC",
    safetyTesting: "اختبار السلامة",
    performanceValidation: "التحقق من الأداء",
    regulatoryCompliance: "الامتثال التنظيمي",
    processAuditing: "تدقيق العملية",
    riskAssessment: "تقييم المخاطر",
    documentationReview: "مراجعة الوثائق",
    staffTraining: "تدريب الموظفين",
    certificationWorkshops: "ورش الاعتماد",
    bestPractices: "أفضل الممارسات",
    ongoingSupport: "الدعم المستمر",
    systemDesign: "تصميم النظام",
    implementation: "التنفيذ",
    maintenance: "الصيانة",
    continuousImprovement: "التحسين المستمر",
    priorityProcessing: "معالجة الأولوية",
    dedicatedSupport: "دعم مخصص",
    rapidTurnaround: "تسليم سريع",
    emergencyAudits: "تدقيق طارئ"
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      ar: ar
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;