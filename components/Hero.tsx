import React, { useState, useEffect } from 'react';
import type { Language, Theme, ViewState } from '../types';

interface HeroProps {
  lang: Language;
  theme: Theme;
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ lang, theme, onNavigate }) => {
  const [typedText, setTypedText] = useState('');
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);
  const fullText = lang === 'vi' ? 'xây dựng và quản lý cây gia phả' : 'build and manage your family tree';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 200);
    return () => clearInterval(interval);
  }, [lang, fullText]);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setCurrentTheme(isDark ? 'dark' : 'light');
    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains('dark');
      setCurrentTheme(isDarkNow ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative pt-20 md:pt-28 pb-10 px-6 grid-bg min-h-screen flex flex-col items-center bg-white dark:bg-[#0a0c14] transition-colors duration-700 overflow-hidden"
    >
      <div className="absolute top-[35%] left-[5%] md:left-[10%] text-slate-200 dark:text-slate-800 font-mono text-xl md:text-2xl -rotate-12 select-none pointer-events-none opacity-30">
        🌳
      </div>
      <div className="absolute top-[50%] right-[5%] md:right-[10%] text-slate-200 dark:text-slate-800 font-mono text-xl md:text-2xl rotate-12 select-none pointer-events-none opacity-30">
        📖
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 text-center w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6fcf9] dark:bg-teal-500/10 text-[#00c4a7] rounded-full text-[13px] font-bold mb-5 border border-[#b2f2e9] dark:border-teal-500/20 shadow-sm animate-fade-in">
          <span>🌳</span> {lang === 'vi' ? 'Ứng dụng gia phả cho gia đình, dòng họ' : 'Family & clan genealogy app'}
        </div>

        <h1 className="text-[38px] md:text-[68px] lg:text-[82px] font-[1000] tight-heading tracking-tighter text-slate-900 dark:text-white leading-[1.05] mb-3">
          {lang === 'vi' ? 'Xây dựng cây gia phả với' : 'Build your family tree with'}{' '}
          <span className="text-[#00c4a7]">Phả Ký Việt</span>
        </h1>

        <div className="h-10 mb-5">
          <p className="text-[22px] md:text-[32px] font-bold text-[#4fd1c5] opacity-80">
            {typedText}
            <span className="cursor-blink"></span>
          </p>
        </div>

        <p className="max-w-2xl text-[15px] md:text-[17px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 px-4">
          {lang === 'vi'
            ? 'Xem cây phả hệ, thêm thành viên, xem và chỉnh sửa hồ sơ từng thành viên một cách trực quan trên điện thoại.'
            : 'View the family tree, add members, view and edit each member\'s profile intuitively on your phone.'}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12 scale-90 md:scale-100">
          <button
            onClick={() => onNavigate('404')}
            className="h-[56px] min-w-[200px] bg-[#00c4a7] text-white px-7 rounded-[16px] font-bold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_rgba(0,196,167,0.2)]"
          >
            <img src="https://cdn.simpleicons.org/apple/white" alt="Apple" className="w-5 h-5" />
            <span className="text-[16px] font-bold tracking-tight">{lang === 'vi' ? 'Tải cho iOS' : 'Download for iOS'}</span>
          </button>
          <button
            onClick={() => onNavigate('404')}
            className="h-[56px] min-w-[200px] bg-[#f1f3f5] dark:bg-white/5 text-slate-800 dark:text-white px-7 rounded-[16px] font-bold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all border border-slate-200 dark:border-white/10"
          >
            <img src="https://cdn.simpleicons.org/googleplay/black" alt="Google Play" className="w-5 h-5 dark:invert" />
            <span className="text-[16px] font-bold tracking-tight">{lang === 'vi' ? 'Tải cho Android' : 'Download for Android'}</span>
          </button>
        </div>

        <div className="relative w-full flex items-center justify-center h-[70vh] md:h-[80vh] max-h-[900px] animate-float-up px-4 group mb-12">
          <div className="h-full relative aspect-[9/19.5]">
            <div
              className={`w-full h-full rounded-[1.5rem] p-[2%] ${
                currentTheme === 'light' ? 'bg-[#e2e8f0] shadow-2xl' : 'bg-[#1a1c25] shadow-[0_60px_150px_-30px_rgba(0,0,0,0.7)]'
              } border-[1.5px] border-black/10 transition-colors duration-700 relative z-20`}
            >
              <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative border border-black/5 dark:border-white/5 bg-white flex items-center justify-center">
                <img
                  src="/demo/family-tree_demo.png"
                  alt="Phả Ký Việt - Cây gia phả"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-[#00c4a7] blur-[120px] opacity-[0.08] -z-10 rounded-full scale-[1.2]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-float-up { animation: float-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
