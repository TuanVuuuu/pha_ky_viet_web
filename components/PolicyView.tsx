import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Language } from '../types';
import { marked } from 'marked';
import * as LegalContent from '../legal-content';

interface PolicyViewProps {
  type: 'privacy' | 'terms';
  lang: Language;
  onBack: () => void;
}

const PolicyView: React.FC<PolicyViewProps> = ({ type, lang: defaultLang, onBack }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const platformParam = searchParams.get('platform') as 'android' | 'ios' | null;
  const [platform, setPlatform] = useState<'android' | 'ios'>(platformParam === 'ios' ? 'ios' : 'android');
  const langParam = searchParams.get('lang') as 'vi' | 'en' | null;
  const lang: Language = langParam === 'vi' || langParam === 'en' ? langParam : defaultLang;
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const platformFromUrl = searchParams.get('platform');
    if (platformFromUrl === 'ios' || platformFromUrl === 'android') setPlatform(platformFromUrl);
  }, [searchParams]);

  const handlePlatformChange = (newPlatform: 'android' | 'ios') => {
    setPlatform(newPlatform);
    const params = new URLSearchParams(searchParams);
    params.set('platform', newPlatform);
    params.set('lang', lang);
    setSearchParams(params, { replace: true });
  };

  useEffect(() => {
    let rawMarkdown = '';
    if (type === 'privacy') {
      if (platform === 'android') {
        rawMarkdown = lang === 'vi' ? LegalContent.PRIVACY_ANDROID_VI : LegalContent.PRIVACY_ANDROID_EN;
      } else {
        rawMarkdown = lang === 'vi' ? LegalContent.PRIVACY_IOS_VI : LegalContent.PRIVACY_IOS_EN;
      }
    } else {
      rawMarkdown = lang === 'vi' ? LegalContent.TERMS_VI : LegalContent.TERMS_EN;
    }
    const parsedHtml = marked.parse(rawMarkdown);
    setHtmlContent(parsedHtml as string);
  }, [type, lang, platform]);

  return (
    <div className="min-h-screen pt-32 pb-40 grid-bg animate-in fade-in duration-700 bg-[#f8fafc] dark:bg-[#0a0c14] transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="text-left w-full md:w-auto">
            <button
              onClick={onBack}
              className="mb-8 inline-flex items-center gap-2 text-slate-400 dark:text-slate-500 font-bold text-[13px] uppercase tracking-[0.2em] hover:text-[#00c4a7] dark:hover:text-[#00c4a7] transition-all group"
            >
              <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-[#00c4a7] transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              {lang === 'vi' ? 'Trang chủ' : 'Home'}
            </button>
          </div>

          {type === 'privacy' && (
            <div className="flex bg-white dark:bg-white/5 p-1 rounded-[20px] border border-slate-200 dark:border-white/10 shadow-sm">
              <button
                onClick={() => handlePlatformChange('android')}
                className={`px-6 py-2 rounded-[16px] text-[13px] font-bold transition-all ${
                  platform === 'android' ? 'bg-slate-900 text-white dark:bg-[#00c4a7] dark:text-white shadow-md' : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'
                }`}
              >
                Android
              </button>
              <button
                onClick={() => handlePlatformChange('ios')}
                className={`px-6 py-2 rounded-[16px] text-[13px] font-bold transition-all ${
                  platform === 'ios' ? 'bg-slate-900 text-white dark:bg-[#00c4a7] dark:text-white shadow-md' : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'
                }`}
              >
                iOS
              </button>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-slate-900/60 p-8 md:p-16 rounded-[32px] border border-slate-200 dark:border-white/5 shadow-2xl relative">
          <div className="markdown-content prose-tech" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <div className="mt-20 pt-12 border-t border-slate-100 dark:border-white/5 text-center">
            <p className="text-slate-400 dark:text-slate-500 font-mono text-[14px]">// Phả Ký Việt v1.0.0</p>
          </div>
        </div>
      </div>

      <style>{`
        .prose-tech { font-family: 'JetBrains Mono', monospace; color: #334155; line-height: 1.6; font-size: 16px; }
        .dark .prose-tech { color: #cbd5e1; }
        .prose-tech h1 { font-size: 42px; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 0.5rem; letter-spacing: -0.02em; line-height: 1.1; }
        .dark .prose-tech h1 { color: #ffffff; }
        .prose-tech h1 + p { color: #64748b; font-size: 14px; margin-bottom: 3rem; text-transform: uppercase; letter-spacing: 0.05em; }
        .prose-tech h2 { font-size: 28px; font-weight: 700; color: #0f172a; margin-top: 3.5rem; margin-bottom: 1.5rem; letter-spacing: -0.01em; line-height: 1.2; }
        .dark .prose-tech h2 { color: #f8fafc; }
        .prose-tech h3 { font-size: 20px; font-weight: 700; color: #0f172a; margin-top: 2rem; margin-bottom: 1rem; }
        .dark .prose-tech h3 { color: #e2e8f0; }
        .prose-tech p { margin-bottom: 1.5rem; opacity: 0.9; }
        .prose-tech strong { color: #0f172a; font-weight: 800; }
        .dark .prose-tech strong { color: #ffffff; }
        .prose-tech ul { margin-bottom: 2rem; padding-left: 0.5rem; }
        .prose-tech ul li { position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem; }
        .prose-tech ul li::before { content: "•"; position: absolute; left: 0; color: #64748b; font-weight: bold; }
        .prose-tech blockquote { border-left: 4px solid #cbd5e1; padding: 1rem 1.5rem; color: #64748b; background-color: #f8fafc; margin: 2rem 0; }
        .dark .prose-tech blockquote { background-color: rgba(255,255,255,0.02); border-left-color: rgba(255,255,255,0.1); }
        .prose-tech a { color: #00c4a7; text-decoration: underline; text-underline-offset: 4px; }
      `}</style>
    </div>
  );
};

export default PolicyView;
