import React from 'react';
import { Link } from 'react-router-dom';
import type { Language, ViewState } from '../types';

interface FooterProps {
  lang: Language;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, currentView, onNavigate }) => {
  const footerItems = [
    { label: lang === 'vi' ? 'Chính Sách Bảo Mật' : 'Privacy Policy', href: 'privacy', type: 'view', route: '/privacy' },
    { label: lang === 'vi' ? 'Điều Khoản Sử Dụng' : 'Terms of Use', href: 'terms', type: 'view', route: '/terms' },
    { label: lang === 'vi' ? 'Câu Hỏi Thường Gặp' : 'FAQ', href: 'faq', type: 'view', route: '/faq' },
    { label: lang === 'vi' ? 'Hỗ Trợ' : 'Support', href: 'support', type: 'view', route: '/support' },
    { label: lang === 'vi' ? 'Liên Hệ' : 'Contact', href: 'contact', type: 'scroll' },
  ];

  const handleClick = (e: React.MouseEvent, item: (typeof footerItems)[0]) => {
    e.preventDefault();
    if (item.type === 'view') {
      onNavigate(item.href as ViewState);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <footer className="bg-white dark:bg-[#0a0c14] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-slate-100 dark:border-white/10 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <Link to="/home" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-lg overflow-hidden relative">
                <img src="/ic_launcher_ios.png" alt="Phả Ký Việt Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-[22px] font-[900] tracking-tighter text-[#111] dark:text-white">Phả Ký Việt</span>
            </Link>

            <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4">
              {footerItems.map((item) => {
                if (item.type === 'view' && item.route) {
                  return (
                    <Link
                      key={item.label}
                      to={item.route}
                      className="text-[14px] md:text-[15px] font-bold text-slate-500 dark:text-slate-400 hover:text-[#00c4a7] transition-colors"
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
                    className="text-[14px] md:text-[15px] font-bold text-slate-500 dark:text-slate-400 hover:text-[#00c4a7] transition-colors"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-8 opacity-40">
              <span className="text-slate-500 dark:text-slate-600 text-sm">App Store (sắp ra mắt)</span>
              <span className="text-slate-500 dark:text-slate-600 text-sm">Google Play (sắp ra mắt)</span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-[13px] font-bold text-slate-300 dark:text-slate-700">
              © 2025 Phả Ký Việt. {lang === 'vi' ? 'Gia phả gia đình, dòng họ.' : 'Family & clan genealogy.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
