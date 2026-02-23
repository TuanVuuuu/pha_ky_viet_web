import React, { useState } from 'react';
import type { Language } from '../types';

interface Screenshot {
  id: number;
  title_vi: string;
  title_en: string;
  caption_vi: string;
  caption_en: string;
  image: string;
}

const DEMO_IMAGES = [
  { file: 'add-member.png', title_vi: 'Thêm thành viên', title_en: 'Add Member', caption_vi: 'Gắn quan hệ cha, mẹ, vợ/chồng, con', caption_en: 'Link parent, spouse, children' },
  { file: 'edit-member.png', title_vi: 'Chỉnh sửa thành viên', title_en: 'Edit Member', caption_vi: 'Xem và sửa tên, ảnh, ghi chú', caption_en: 'View and edit name, photo, notes' },
  { file: 'avatar-gallery.png', title_vi: 'Kho ảnh đại diện', title_en: 'Avatar Gallery', caption_vi: 'Chọn ảnh đại diện mặc định cho thành viên', caption_en: 'Choose default avatar for members' },
  { file: 'system-settings.png', title_vi: 'Cài đặt hệ thống', title_en: 'System Settings', caption_vi: 'Tùy chỉnh giao diện và cài đặt ứng dụng', caption_en: 'Customize interface and app settings' },
];

const InteractiveDemo: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots: Screenshot[] = DEMO_IMAGES.map((d, i) => ({
    id: i + 1,
    title_vi: d.title_vi,
    title_en: d.title_en,
    caption_vi: d.caption_vi,
    caption_en: d.caption_en,
    image: `/demo/${d.file}`,
  }));

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && activeIndex > 0) setActiveIndex(activeIndex - 1);
    else if (direction === 'right' && activeIndex < screenshots.length - 1) setActiveIndex(activeIndex + 1);
  };

  const itemWidth = 280;
  const gap = 24;

  return (
    <section
      id="screenshots"
      className="py-24 md:py-32 bg-white dark:bg-[#0a0c14] transition-colors duration-500 overflow-hidden scroll-mt-24 border-y border-slate-50 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[40px] md:text-[64px] font-[1000] tight-heading mb-6 tracking-tighter text-slate-950 dark:text-white leading-[1.1]">
            {lang === 'vi' ? 'Xem Phả Ký Việt' : 'See Phả Ký Việt'}{' '}
            <span className="text-[#00c4a7]">{lang === 'vi' ? 'hoạt động' : 'in action'}</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-bold max-w-2xl mx-auto leading-relaxed opacity-80">
            {lang === 'vi'
              ? 'Giao diện trực quan để xem cây gia phả, thêm thành viên và quản lý hồ sơ.'
              : 'Intuitive interface to view the family tree, add members and manage profiles.'}
          </p>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="absolute top-[40%] -translate-y-1/2 left-0 right-0 z-40 flex justify-between pointer-events-none px-2 md:px-10">
            <button
              onClick={() => handleScroll('left')}
              disabled={activeIndex === 0}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center pointer-events-auto transition-all border border-slate-100 dark:border-white/10 ${
                activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'hover:scale-110 active:scale-95'
              }`}
            >
              <svg className="w-5 h-5 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={activeIndex === screenshots.length - 1}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center pointer-events-auto transition-all border border-slate-100 dark:border-white/10 ${
                activeIndex === screenshots.length - 1 ? 'opacity-0 pointer-events-none' : 'hover:scale-110 active:scale-95'
              }`}
            >
              <svg className="w-5 h-5 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="w-full flex justify-center items-center h-[450px] md:h-[600px] relative">
            <div
              className="flex items-center transition-all duration-700 ease-out absolute"
              style={{
                transform: `translateX(${(1 - activeIndex) * (itemWidth + gap)}px)`,
                width: `${screenshots.length * (itemWidth + gap)}px`,
                left: `calc(50% - ${itemWidth / 2}px - ${1 * (itemWidth + gap)}px)`,
              }}
            >
              {screenshots.map((s, idx) => {
                const isCenter = idx === activeIndex;
                const isAdjacent = Math.abs(idx - activeIndex) === 1;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveIndex(idx)}
                    style={{ width: `${itemWidth}px`, marginRight: `${gap}px` }}
                    className={`shrink-0 transition-all duration-700 cursor-pointer relative ${
                      isCenter ? 'scale-100 z-30 opacity-100' : isAdjacent ? 'scale-[0.85] z-20 opacity-100' : 'scale-[0.7] z-10 opacity-100'
                    }`}
                  >
                    <div className="w-full aspect-[9/18.5] rounded-[32px] md:rounded-[36px] overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-2xl relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full scale-110 origin-center">
                          <img
                            src={s.image}
                            alt={lang === 'vi' ? s.title_vi : s.title_en}
                            className="w-full h-full object-cover object-[50%_-10%]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center transition-all duration-500">
            <h3 className="text-2xl md:text-[32px] font-[1000] text-slate-900 dark:text-white tracking-tighter mb-2">
              {lang === 'vi' ? screenshots[activeIndex].title_vi : screenshots[activeIndex].title_en}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.15em] text-[12px] md:text-[14px] opacity-60">
              {lang === 'vi' ? screenshots[activeIndex].caption_vi : screenshots[activeIndex].caption_en}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
