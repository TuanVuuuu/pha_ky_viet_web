import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { Language, ViewState, Theme } from '../types';

interface NavbarProps {
  isScrolled: boolean;
  lang: Language;
  onToggleLang: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, lang, onToggleLang, theme, onToggleTheme, currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: lang === 'vi' ? 'Tính Năng' : 'Features', href: 'features', type: 'scroll' },
    { label: lang === 'vi' ? 'Ảnh Chụp' : 'Screenshots', href: 'screenshots', type: 'scroll' },
    { label: lang === 'vi' ? 'Ứng Dụng' : 'App', href: 'home', type: 'scroll' },
    { label: lang === 'vi' ? 'Bảo Mật' : 'Privacy', href: 'privacy', type: 'view', route: '/privacy' },
    { label: lang === 'vi' ? 'Câu Hỏi Thường Gặp' : 'FAQ', href: 'faq', type: 'view', route: '/faq' },
  ];

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

  const handleClick = (e: React.MouseEvent, item: (typeof navItems)[0]) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (item.type === 'view') {
      onNavigate(item.href as ViewState);
    } else {
      if (currentView !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const elem = document.getElementById(item.href);
          if (elem) window.scrollTo({ top: elem.offsetTop - 100, behavior: 'smooth' });
        }, 100);
      } else {
        const elem = document.getElementById(item.href);
        if (elem) window.scrollTo({ top: elem.offsetTop - 100, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || currentView !== 'home' || isMenuOpen
            ? 'bg-white/90 dark:bg-[#0a0c14]/90 backdrop-blur-xl border-b border-slate-100 dark:border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/home" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl overflow-hidden shadow-lg">
              <img src="/ic_launcher_ios.png" alt="Phả Ký Việt Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-[22px] font-[900] tracking-tight text-slate-900 dark:text-white">Phả Ký Việt</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => {
              if (item.type === 'view' && item.route) {
                return (
                  <Link
                    key={item.label}
                    to={item.route}
                    className={`text-[15px] font-bold tracking-tight transition-all hover:text-[#00c4a7] ${
                      location.pathname === item.route ? 'text-[#00c4a7]' : 'text-slate-500 dark:text-slate-400 hover:scale-105'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={(e) => handleClick(e, item)}
                  className={`text-[15px] font-bold tracking-tight transition-all hover:text-[#00c4a7] ${
                    item.href === currentView ? 'text-[#00c4a7]' : 'text-slate-500 dark:text-slate-400 hover:scale-105'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={onToggleLang}
              className="hidden sm:flex h-10 px-4 bg-slate-100/80 dark:bg-white/5 rounded-full items-center gap-2 text-slate-700 dark:text-slate-300 transition-all hover:bg-slate-200 dark:hover:bg-white/10 border border-transparent dark:border-white/5"
            >
              <span className="text-[14px] font-[900] tracking-tighter">{lang.toUpperCase()}</span>
            </button>
            <button
              onClick={onToggleTheme}
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-all hover:scale-110"
            >
              {theme === 'light' ? '☀️' : '🌙'}
            </button>
            <Link
              to="/"
              className="h-10 px-4 md:px-6 bg-[#00c4a7] text-white rounded-[12px] text-[14px] md:text-[15px] font-[900] hover:bg-[#00b398] transition-all active:scale-95 shadow-lg shadow-teal-500/10 flex items-center justify-center"
            >
              {lang === 'vi' ? 'Tải Về' : 'Download'}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-slate-600 dark:text-slate-400"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white/80 dark:bg-[#0a0c14]/95 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)}></div>
        <div
          className={`absolute top-0 left-0 right-0 pt-24 pb-12 px-6 bg-white dark:bg-[#0a0c14] border-b border-slate-100 dark:border-white/5 transform transition-transform duration-500 ease-out shadow-2xl ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item, idx) => {
              if (item.type === 'view' && item.route) {
                return (
                  <Link
                    key={item.label}
                    to={item.route}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                    className={`py-4 text-[22px] font-[900] tracking-tight border-b border-slate-50 dark:border-white/[0.03] flex items-center justify-between group transition-all ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    } ${location.pathname === item.route ? 'text-[#00c4a7]' : 'text-slate-800 dark:text-slate-200'}`}
                  >
                    {item.label}
                    <svg
                      className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${location.pathname === item.route ? 'text-[#00c4a7]' : 'text-slate-300 dark:text-slate-700'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              }
              return (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={(e) => handleClick(e, item)}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                  className={`py-4 text-[22px] font-[900] tracking-tight border-b border-slate-50 dark:border-white/[0.03] flex items-center justify-between group transition-all ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  } ${item.href === currentView ? 'text-[#00c4a7]' : 'text-slate-800 dark:text-slate-200'}`}
                >
                  {item.label}
                  <svg
                    className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${item.href === currentView ? 'text-[#00c4a7]' : 'text-slate-300 dark:text-slate-700'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              );
            })}
          </div>
          <div
            className={`mt-8 flex items-center justify-between transition-all duration-700 delay-300 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="flex gap-4">
              <button
                onClick={onToggleLang}
                className="px-6 py-3 bg-slate-100 dark:bg-white/5 rounded-2xl text-[15px] font-[900] text-slate-800 dark:text-white"
              >
                {lang === 'vi' ? '🇻🇳 Tiếng Việt' : '🇺🇸 English'}
              </button>
              <button
                onClick={onToggleTheme}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 text-xl"
              >
                {theme === 'light' ? '☀️' : '🌙'}
              </button>
            </div>
            <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">v1.0.0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
