import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import type { Language, ViewState, Theme } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import PrivacySection from './components/PrivacySection';
import FeatureGrid from './components/FeatureGrid';
import UseCases from './components/UseCases';
import InteractiveDemo from './components/InteractiveDemo';
import FAQ from './components/FAQ';
import PolicyView from './components/PolicyView';
import SupportView from './components/SupportView';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

export type { Language, ViewState, Theme } from './types';

interface HomePageProps {
  lang: Language;
  theme: Theme;
  onNavigate: (view: ViewState) => void;
}

const HomePage: React.FC<HomePageProps> = ({ lang, theme, onNavigate }) => {
  return (
    <>
      <Hero lang={lang} theme={theme} onNavigate={onNavigate} />
      <StatsSection lang={lang} />
      <PrivacySection lang={lang} />
      <InteractiveDemo lang={lang} />
      <FeatureGrid lang={lang} />
      <UseCases lang={lang} />

      <section id="contact" className="py-48 bg-slate-950 dark:bg-[#05060a] text-center text-white relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#00c4a7] blur-[300px] rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-[86px] font-black tight-heading mb-16 tracking-tighter leading-[0.95]">
            {lang === 'vi' ? 'Sẵn sàng xây' : 'Ready to build'}{' '}
            <span className="text-[#00c4a7]">{lang === 'vi' ? 'cây gia phả?' : 'your family tree?'}</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => onNavigate('404')}
              className="h-[72px] min-w-[260px] bg-[#00c4a7] text-white px-10 rounded-[24px] font-bold flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-[0_25px_50px_rgba(0,196,167,0.3)]"
            >
              <img src="https://cdn.simpleicons.org/apple/white" alt="Apple" className="w-8 h-8" />
              <div className="text-left leading-tight">
                <p className="text-[12px] opacity-80 font-medium">{lang === 'vi' ? 'Tải trên' : 'Download on'}</p>
                <p className="text-[20px] font-black tracking-tight">App Store</p>
              </div>
            </button>

            <button
              onClick={() => onNavigate('404')}
              className="h-[72px] min-w-[260px] bg-white text-slate-950 px-10 rounded-[24px] font-bold flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              <img src="https://cdn.simpleicons.org/googleplay/black" alt="Google Play" className="w-8 h-8" />
              <div className="text-left leading-tight">
                <p className="text-[12px] opacity-60 font-medium">{lang === 'vi' ? 'Tải trên' : 'Get it on'}</p>
                <p className="text-[20px] font-black tracking-tight">Google Play</p>
              </div>
            </button>
          </div>

          <p className="mt-12 text-slate-500 font-bold uppercase tracking-[0.2em] text-sm opacity-60">
            {lang === 'vi' ? 'Quản lý gia phả gia đình, dòng họ ngay trên điện thoại' : 'Manage family and clan genealogy on your phone'}
          </p>
        </div>
      </section>
    </>
  );
};

const AppContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchParams] = useSearchParams();
  const [lang, setLang] = useState<Language>(() => {
    const langParam = searchParams.get('lang') as 'vi' | 'en' | null;
    return (langParam === 'vi' || langParam === 'en') ? langParam : 'vi';
  });
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'light';
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/privacy' || location.pathname === '/terms' || location.pathname === '/support') {
      const langParam = searchParams.get('lang') as 'vi' | 'en' | null;
      if (langParam === 'vi' || langParam === 'en') {
        setLang(langParam);
      } else {
        const params = new URLSearchParams(searchParams);
        params.set('lang', lang);
        navigate(`${location.pathname}?${params.toString()}`, { replace: true });
      }
    }
  }, [location.pathname, searchParams]);

  const toggleLang = () => {
    const newLang = lang === 'vi' ? 'en' : 'vi';
    setLang(newLang);
    if (location.pathname === '/privacy' || location.pathname === '/terms' || location.pathname === '/support') {
      const params = new URLSearchParams(searchParams);
      params.set('lang', newLang);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  };
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const getCurrentView = (): ViewState => {
    const path = location.pathname;
    if (path === '/home') return 'home';
    if (path === '/faq') return 'faq';
    if (path === '/privacy') return 'privacy';
    if (path === '/terms') return 'terms';
    if (path === '/support') return 'support';
    return '404';
  };

  const navigateTo = (newView: ViewState) => {
    if (newView === 'home') navigate('/home');
    else if (newView === 'faq') navigate(`/faq${lang !== 'vi' ? `?lang=${lang}` : ''}`);
    else if (newView === 'privacy') navigate(`/privacy?platform=android&lang=${lang}`);
    else if (newView === 'terms') navigate(`/terms?lang=${lang}`);
    else if (newView === 'support') navigate(`/support?lang=${lang}`);
    else if (newView === '404') navigate('/');
  };

  const currentView = getCurrentView();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0c14] text-slate-900 dark:text-slate-100 transition-colors duration-700">
      <Navbar
        isScrolled={isScrolled}
        lang={lang}
        onToggleLang={toggleLang}
        theme={theme}
        onToggleTheme={toggleTheme}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      <main className="bg-white dark:bg-[#0a0c14]">
        <Routes>
          <Route path="/home" element={<HomePage lang={lang} theme={theme} onNavigate={navigateTo} />} />
          <Route path="/faq" element={<FAQ lang={lang} onBack={() => navigate('/home')} />} />
          <Route path="/privacy" element={<PolicyView type="privacy" lang={lang} onBack={() => navigate('/home')} />} />
          <Route path="/terms" element={<PolicyView type="terms" lang={lang} onBack={() => navigate('/home')} />} />
          <Route path="/support" element={<SupportView lang={lang} onBack={() => navigate('/home')} />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<NotFound lang={lang} onBack={() => navigate('/home')} />} />
        </Routes>
      </main>

      <Footer lang={lang} currentView={currentView} onNavigate={navigateTo} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
