import React from 'react';
import type { Language } from '../types';

interface NotFoundProps {
  lang: Language;
  onBack: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ lang, onBack }) => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 grid-bg bg-white dark:bg-[#0a0c14] transition-colors duration-500">
      <div className="max-w-2xl mx-auto px-6 text-center animate-in fade-in zoom-in duration-700">
        <div className="mb-12 inline-block">
          <div className="text-[100px] md:text-[140px] font-mono font-bold text-slate-200 dark:text-slate-800 leading-none select-none tracking-tighter">
            (╥﹏╥)
          </div>
          <div className="text-[60px] md:text-[80px] font-[1000] text-[#00c4a7] leading-none mt-[-20px] tracking-tighter">
            404
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter text-slate-900 dark:text-white mb-6">
          {lang === 'vi' ? 'Trang Không Tìm Thấy' : 'Page Not Found'}
        </h1>

        <p className="text-slate-500 dark:text-slate-400 font-bold text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
          {lang === 'vi'
            ? 'Trang bạn tìm không tồn tại. Hãy quay lại trang chủ để tiếp tục.'
            : 'The page you are looking for does not exist. Go back home to continue.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBack}
            className="h-16 px-10 bg-slate-900 dark:bg-[#00c4a7] text-white rounded-[20px] font-[900] text-[17px] flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {lang === 'vi' ? 'Quay lại Trang chủ' : 'Back to Home'}
          </button>
          <div className="text-slate-400 dark:text-slate-600 font-mono text-sm tracking-widest uppercase py-4 sm:py-0">
            // ERROR_CODE: NOT_FOUND
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-100 dark:border-white/5 opacity-40">
          <div className="flex justify-center gap-12 font-mono text-xl text-slate-300 dark:text-slate-700">
            <span>¯\_(ツ)_/¯</span>
            <span>🌳</span>
            <span>📖</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
