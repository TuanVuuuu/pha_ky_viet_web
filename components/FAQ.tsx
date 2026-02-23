import React, { useState } from 'react';
import type { Language } from '../types';
import { FAQ_EN, FAQ_VI } from '../faq-content';

interface FAQProps {
  lang: Language;
  onBack?: () => void;
}

const FAQ: React.FC<FAQProps> = ({ lang, onBack }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: lang === 'vi' ? 'Tất cả' : 'All' },
    { id: 'account', name: lang === 'vi' ? 'Tài khoản & Bảo mật' : 'Account & Privacy' },
    { id: 'task', name: lang === 'vi' ? 'Sử dụng' : 'Usage' },
    { id: 'general', name: lang === 'vi' ? 'Chung' : 'General' },
  ];

  const faqs = lang === 'vi' ? FAQ_VI : FAQ_EN;

  const filteredFaqs = faqs.filter((f) => {
    const matchesCategory = activeCategory === 'all' || f.category === activeCategory;
    const matchesSearch =
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-40 grid-bg animate-in fade-in duration-700 bg-white dark:bg-[#0a0c14]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <button
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 text-slate-400 font-black text-sm uppercase tracking-widest hover:text-[#00c4a7] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path>
            </svg>
            {lang === 'vi' ? 'Quay lại' : 'Back'}
          </button>

          <h1 className="text-[48px] md:text-[80px] font-[900] tight-heading mb-8 tracking-tighter text-slate-900 dark:text-white leading-none">
            {lang === 'vi' ? 'Trung Tâm' : 'Help'}{' '}
            <br />
            <span className="text-[#00c4a7]">{lang === 'vi' ? 'Trợ Giúp' : 'Center'}</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl font-bold max-w-xl mx-auto mb-12">
            {lang === 'vi' ? 'Giải đáp thường gặp về Phả Ký Việt.' : 'Frequently asked questions about Phả Ký Việt.'}
          </p>

          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder={lang === 'vi' ? 'Tìm kiếm câu hỏi...' : 'Search questions...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 px-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:border-[#00c4a7] focus:ring-4 focus:ring-[#00c4a7]/5 outline-none font-bold text-lg shadow-xl dark:shadow-none transition-all pl-16"
            />
            <svg
              className="w-6 h-6 absolute left-6 top-5 text-slate-300 dark:text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`px-8 py-3 rounded-full text-sm font-black transition-all ${
                activeCategory === cat.id
                  ? 'bg-slate-900 dark:bg-teal-500 text-white shadow-xl scale-105'
                  : 'bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 text-slate-400 dark:text-slate-500 hover:border-slate-200 dark:hover:text-slate-300 hover:scale-105'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-[32px] overflow-hidden transition-all duration-500 bg-white dark:bg-white/5 ${
                  openIndex === idx ? 'border-[#00c4a7] shadow-2xl dark:shadow-teal-500/10' : 'border-slate-100 dark:border-white/10 hover:border-slate-200 dark:hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-7 text-left flex justify-between items-center gap-4 group"
                >
                  <span
                    className={`font-black text-[19px] transition-colors ${
                      openIndex === idx ? 'text-[#00c4a7]' : 'text-slate-800 dark:text-slate-200 group-hover:text-[#00c4a7]'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${
                      openIndex === idx ? 'bg-[#00c4a7] rotate-180' : 'bg-slate-50 dark:bg-white/10'
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 ${openIndex === idx ? 'text-white' : 'text-slate-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-slate-500 dark:text-slate-400 text-[17px] leading-relaxed font-bold whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center text-slate-300 dark:text-slate-700 font-black uppercase tracking-widest">
              {lang === 'vi' ? 'Không tìm thấy kết quả nào' : 'No results found'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
