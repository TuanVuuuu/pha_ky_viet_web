import React from 'react';
import type { Language } from '../types';

const StatsSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const stats = [
    {
      value: '🌳',
      label: lang === 'vi' ? 'Cây gia phả' : 'Family Tree',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      showValue: true,
    },
    {
      value: '+',
      label: lang === 'vi' ? 'Thêm thành viên' : 'Add Members',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      showValue: true,
    },
    {
      value: '📋',
      label: lang === 'vi' ? 'Hồ sơ thành viên' : 'Member Profiles',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      showValue: true,
    },
    {
      value: '',
      label: lang === 'vi' ? 'Quan hệ trực quan' : 'Visual Relations',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      showValue: false,
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 bg-white dark:bg-[#0a0c14] border-b border-slate-50 dark:border-white/5 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="w-14 h-14 md:w-16 md:h-16 mb-6 mx-auto flex justify-center items-center text-[#00c4a7]">
                {stat.icon}
              </div>
              {stat.showValue && (
                <div className="text-[48px] md:text-[72px] font-[1000] text-[#00c4a7] mb-3 leading-none tracking-tighter transition-transform group-hover:scale-105 duration-500">
                  {stat.value}
                </div>
              )}
              <div className="text-[13px] md:text-[15px] font-bold text-slate-400 dark:text-slate-500 tracking-[0.05em] transition-colors group-hover:text-slate-900 dark:group-hover:text-white uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
