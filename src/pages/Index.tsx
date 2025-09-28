import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import '../i18n';

const Index = () => {
  const { i18n } = useTranslation();

  return (
    <div className={`min-h-screen bg-background ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
