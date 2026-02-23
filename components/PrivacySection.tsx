import React from 'react';
import type { Language } from '../types';

const PrivacySection: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <section id="privacy-banner" className="py-32 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,196,167,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black tight-heading mb-6 leading-tight">
            {lang === 'vi' ? 'Dữ liệu gia phả, ' : 'Your genealogy data, '}
            <br />
            <span className="text-[#00c4a7]">{lang === 'vi' ? 'Thuộc về gia đình bạn' : 'Stays in your family'}</span>
          </h2>
          <p className="text-xl text-slate-400 font-bold">
            {lang === 'vi'
              ? 'Phả Ký Việt được thiết kế để bảo vệ thông tin gia đình. Dữ liệu của bạn có thể lưu trữ cục bộ và bạn kiểm soát quyền chia sẻ.'
              : 'Phả Ký Việt is designed to protect family information. Your data can be stored locally and you control sharing.'}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 font-black text-lg">
            🔒 {lang === 'vi' ? 'Bảo mật' : 'Secure'}
          </div>
          <div className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 font-black text-lg">
            🛡️ {lang === 'vi' ? 'Kiểm soát của bạn' : 'Your control'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
