import { useState } from 'react';
import './styles/globals.css';
import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { GoalsSection } from './components/GoalsSection';
import { WhyNowSection } from './components/WhyNowSection';
import { GetInvolvedSection } from './components/GetInvolvedSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { CookiePolicy } from './components/CookiePolicy';
import { CookieConsentBanner } from './components/CookieConsentBanner';

export default function App() {
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <GoalsSection />
          <WhyNowSection />
          <GetInvolvedSection />
          <ContactSection />
        </main>
        <Footer 
          onOpenPrivacyPolicy={() => setPrivacyPolicyOpen(true)}
          onOpenCookiePolicy={() => setCookiePolicyOpen(true)}
        />
        
        {/* Privacy and Cookie Policy Modals */}
        <PrivacyPolicy 
          open={privacyPolicyOpen} 
          onOpenChange={setPrivacyPolicyOpen} 
        />
        <CookiePolicy 
          open={cookiePolicyOpen} 
          onOpenChange={setCookiePolicyOpen} 
        />
        
        {/* Cookie Consent Banner */}
        <CookieConsentBanner 
          onOpenCookiePolicy={() => setCookiePolicyOpen(true)}
        />
      </div>
    </LanguageProvider>
  );
}