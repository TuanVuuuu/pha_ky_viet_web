import React from 'react';
import type { Language } from '../types';

const UseCases: React.FC<{ lang: Language }> = ({ lang }) => {
  const cases = [
    {
      title: lang === 'vi' ? 'Gia đình nhỏ' : 'Nuclear Family',
      desc:
        lang === 'vi'
          ? 'Xây dựng cây gia phả cho gia đình ba thế hệ: ông bà, cha mẹ, con cháu.'
          : 'Build a family tree for three generations: grandparents, parents, children.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items:
        lang === 'vi'
          ? ['Ông bà, cha mẹ', 'Con cháu', 'Quan hệ rõ ràng']
          : ['Grandparents, parents', 'Children', 'Clear relationships'],
    },
    {
      title: lang === 'vi' ? 'Dòng họ' : 'Clan & Lineage',
      desc:
        lang === 'vi'
          ? 'Quản lý phả hệ dòng họ nhiều thế hệ, nhiều chi nhánh.'
          : 'Manage multi-generation clan genealogy with multiple branches.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      items:
        lang === 'vi'
          ? ['Nhiều thế hệ', 'Chi nhánh', 'Tổ tiên xa']
          : ['Multiple generations', 'Branches', 'Distant ancestors'],
    },
    {
      title: lang === 'vi' ? 'Hồ sơ cá nhân' : 'Personal Records',
      desc:
        lang === 'vi'
          ? 'Lưu thông tin từng thành viên: tên, ảnh, ngày sinh, ghi chú.'
          : 'Store each member\'s info: name, photo, birth date, notes.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      items:
        lang === 'vi'
          ? ['Tên, ảnh', 'Ngày sinh', 'Ghi chú']
          : ['Name, photo', 'Birth date', 'Notes'],
    },
    {
      title: lang === 'vi' ? 'Chia sẻ & in ấn' : 'Share & Print',
      desc:
        lang === 'vi'
          ? 'Xuất hoặc chia sẻ cây gia phả với người thân khi cần.'
          : 'Export or share the family tree with relatives when needed.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      items:
        lang === 'vi'
          ? ['Xuất ảnh', 'Chia sẻ', 'In ấn']
          : ['Export image', 'Share', 'Print'],
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-[#0a0c14] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[40px] md:text-[56px] font-[1000] tracking-tighter text-slate-900 dark:text-white mb-6 leading-tight">
            {lang === 'vi' ? 'Phù hợp cho' : 'Perfect for'}{' '}
            <span className="text-[#00c4a7]">{lang === 'vi' ? 'mọi gia đình' : 'every family'}</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-bold max-w-3xl mx-auto leading-relaxed">
            {lang === 'vi'
              ? 'Dù là gia đình nhỏ hay dòng họ lớn, Phả Ký Việt giúp bạn xây dựng và lưu giữ cây gia phả trực quan.'
              : 'Whether a small family or a large clan, Phả Ký Việt helps you build and preserve your family tree visually.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="group relative p-10 rounded-[40px] border-[3px] border-slate-100 dark:border-white/5 bg-[#f8fafc]/50 dark:bg-white/[0.01] transition-all duration-500 hover:-translate-y-3 hover:border-[#00c4a7] hover:shadow-[0_30px_60px_-15px_rgba(0,196,167,0.15)] overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#00c4a7]/5 rounded-full transition-transform group-hover:scale-150 duration-700"></div>
              <div className="w-14 h-14 bg-[#e6fcf9] dark:bg-teal-500/10 text-[#00c4a7] rounded-[20px] flex items-center justify-center mb-10 shadow-sm relative z-10">
                {c.icon}
              </div>
              <div className="relative z-10">
                <h3 className="text-[24px] font-[900] text-slate-900 dark:text-white mb-4 tracking-tight">
                  {c.title}
                </h3>
                <p className="text-[15px] text-slate-500 dark:text-slate-400 font-bold leading-relaxed mb-8 opacity-90">
                  {c.desc}
                </p>
                <ul className="space-y-3">
                  {c.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[14px] font-[800] text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00c4a7]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
