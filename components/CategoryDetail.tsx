import React from 'react';
import { CATEGORIES } from './AIALineup';

interface CategoryDetailProps {
  categoryId: number;
  onBack: () => void;
  onConsult: () => void;
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({ categoryId, onBack, onConsult }) => {
  const category = CATEGORIES[categoryId];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="bg-[#1B4965] py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Office" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 relative z-10">
          <div className="text-8xl bg-white/10 w-36 h-36 rounded-[2.5rem] flex items-center justify-center border border-white/20 shadow-2xl backdrop-blur-md">
            {category.icon}
          </div>
          <div className="text-center md:text-left pt-2">
            <button onClick={onBack} className="text-blue-300 font-bold mb-6 hover:text-white transition-colors flex items-center space-x-2">
              <span>← 라인업으로 돌아가기</span>
            </button>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">{category.name}</h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">{category.desc}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {category.tools.map((tool, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col group hover:translate-y-[-10px] transition-all duration-500">
              <div className="h-60 overflow-hidden bg-slate-200">
                <img 
                  src={tool.img} 
                  alt={tool.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <div className="p-10 flex-grow">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded tracking-tighter shadow-md">AIA PRO</span>
                  <span className="text-slate-200">|</span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">K Prime HR</span>
                </div>
                <h3 className="text-3xl font-black text-navy mb-6 leading-tight">{tool.title}</h3>
                <p className="text-blue-600 font-bold text-sm mb-8 leading-relaxed">"{tool.question}"</p>
                <div className="space-y-5 mb-10">
                  {tool.desc.split(',').map((point, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-500 font-black text-[10px]">✓</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-snug">{point.trim()}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200">
                   <p className="text-navy text-xs font-bold text-center italic leading-relaxed">
                     Core Logic: {tool.highlight}
                   </p>
                </div>
              </div>
              <div className="p-10 pt-0">
                <button 
                  onClick={onConsult}
                  className="w-full py-4.5 bg-navy text-white rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-xl shadow-navy/20"
                >
                  상세 도입 가이드 신청
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-[#0A192F] p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" alt="FooterBg" className="w-full h-full object-cover" />
           </div>
           <div className="relative z-10">
             <h4 className="text-4xl md:text-5xl font-black text-white mb-8">아직 고민 중이신가요?</h4>
             <p className="text-slate-300 mb-12 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
               귀사의 현재 상황에 가장 적합한 {category.name} 도구가 무엇인지 <br />
               K Prime의 전문가가 1:1로 맞춤 진단해 드립니다.
             </p>
             <button 
               onClick={onConsult}
               className="bg-blue-600 text-white px-16 py-6 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-500/40 transition-all hover:scale-105 active:scale-95"
             >
               무료 맞춤 컨설팅 신청
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;