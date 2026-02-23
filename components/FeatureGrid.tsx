import React from 'react';
import type { Language } from '../types';

const FeatureGrid: React.FC<{ lang: Language }> = ({ lang }) => {
  const featureItems = [
    {
      title: lang === 'vi' ? 'Cây gia phả' : 'Family Tree',
      desc:
        lang === 'vi'
          ? 'Xem toàn bộ cây phả hệ gia đình, dòng họ với giao diện dạng cây, dễ dàng điều hướng và phóng to thu nhỏ.'
          : 'View the full family and clan tree with a tree-style interface, easy navigation and zoom.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      highlight: true,
    },
    {
      title: lang === 'vi' ? 'Thêm thành viên' : 'Add Members',
      desc:
        lang === 'vi'
          ? 'Thêm thành viên mới vào cây, gắn quan hệ với thành viên đã có (cha, mẹ, vợ/chồng, con…).'
          : 'Add new members to the tree and link relationships (parent, spouse, children, etc.).',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      title: lang === 'vi' ? 'Hồ sơ thành viên' : 'Member Profiles',
      desc:
        lang === 'vi'
          ? 'Xem và chỉnh sửa thông tin chi tiết từng thành viên (tên, ảnh, quan hệ, ghi chú…).'
          : 'View and edit detailed information for each member (name, photo, relationships, notes).',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: lang === 'vi' ? 'Quan hệ trực quan' : 'Visual Relations',
      desc:
        lang === 'vi'
          ? 'Hiển thị mối quan hệ cha-mẹ, vợ-chồng, con cái rõ ràng trên cây phả hệ.'
          : 'Display parent, spouse and children relationships clearly on the tree.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="py-32 bg-white dark:bg-[#0a0c14] transition-colors duration-500 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[42px] md:text-[64px] font-[1000] tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
            {lang === 'vi' ? 'Mọi thứ bạn cần để' : 'Everything you need to'}{' '}
            <span className="text-[#00c4a7]">{lang === 'vi' ? 'quản lý gia phả' : 'manage your genealogy'}</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-2xl font-semibold max-w-3xl mx-auto leading-relaxed opacity-80">
            {lang === 'vi'
              ? 'Tính năng trực quan cho xây dựng và bảo tồn cây gia phả gia đình, dòng họ.'
              : 'Intuitive features for building and preserving family and clan trees.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((item, i) => (
            <div
              key={i}
              className={`group p-10 rounded-[40px] border-[3px] transition-all duration-500 flex flex-col items-start text-left bg-[#f8fafc]/40 dark:bg-white/[0.02] hover:-translate-y-4 ${
                item.highlight
                  ? 'border-[#00c4a7] shadow-[0_20px_40px_rgba(0,196,167,0.15)] dark:shadow-[0_20px_60px_rgba(0,196,167,0.1)]'
                  : 'border-slate-100 dark:border-white/5 hover:border-[#00c4a7] hover:shadow-[0_30px_60px_-15px_rgba(0,196,167,0.2)]'
              }`}
            >
              <div className="w-14 h-14 bg-[#e6fcf9] dark:bg-teal-500/10 text-[#00c4a7] rounded-[22px] flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-[22px] font-[900] mb-5 text-slate-900 dark:text-white leading-tight tracking-tight transition-colors group-hover:text-[#00c4a7]">
                {item.title}
              </h3>
              <p className="text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed font-bold opacity-90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
