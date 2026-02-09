import { useState, useCallback } from 'react';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Portfolio } from '@/sections/Portfolio';
import { Footer } from '@/sections/Footer';
import { BackgroundOrbs } from '@/components/BackgroundOrbs';
import { useLanguage, type Language } from '@/hooks/useLanguage';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

function App() {
  const { currentLang, t, changeLang } = useLanguage();
  const [, setEmailCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText('davidpedretlopez@gmail.com').then(() => {
      setEmailCopied(true);
      toast.success(t('copyMsg'), {
        duration: 2000,
        position: 'top-center',
      });
      setTimeout(() => setEmailCopied(false), 2000);
    });
  }, [t]);

  const handleLangChange = useCallback((lang: Language) => {
    changeLang(lang);
  }, [changeLang]);

  return (
    <div className="min-h-screen bg-[#020617]">
      <BackgroundOrbs />
      
      <Navigation
        currentLang={currentLang}
        onLangChange={handleLangChange}
        onCopyEmail={handleCopyEmail}
      />
      
      <main>
        <Hero
          typewriterText={t('typewriter')}
          tagline={t('tagline')}
          buttonText={t('heroBtn')}
        />
        
        <About
          title={t('aboutTitle')}
          aboutP1={t('aboutP1')}
          aboutP2={t('aboutP2')}
          tm1Title={t('tm1Title')}
          tm1Desc={t('tm1Desc')}
          tm2Title={t('tm2Title')}
          tm2Desc={t('tm2Desc')}
        />
        
        <Portfolio
          title={t('portfolioTitle')}
          p1Title={t('p1Title')}
          p1Desc={t('p1Desc')}
          sstGalleryTitle={t('sstGalleryTitle')}
          sstGalleryDesc={t('sstGalleryDesc')}
          playText={t('play')}
          pauseText={t('pause')}
          yearText={t('year')}
          btnProject={t('btnProject')}
        />
        
        <Footer
          title={t('footerTitle')}
          tagline={t('footerTagline')}
          buttonText={t('footerBtn')}
          copyMsg={t('copyMsg')}
        />
      </main>
      
      <Toaster 
        theme="dark"
        toastOptions={{
          style: {
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#f1f5f9',
          },
        }}
      />
    </div>
  );
}

export default App;
