import React from 'react';
import { PageView } from '../App';

interface HeroProps {
  onNavigate: (view: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
          alt="Office Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <div className="relative mb-12 px-6">
          <h1 className="flex flex-col md:flex-row items-center justify-center select-none italic">
            <span className="inline-block font-['Black_Han_Sans'] text-8xl md:text-[11.5rem] leading-none tracking-tighter neon-white pr-4">
              AI인사팀
            </span>
            <span className="inline-block font-['Orbitron'] text-6xl md:text-[8rem] leading-none tracking-widest neon-blue ml-[-0.5rem] py-6">
              .COM
            </span>
          </h1>
          <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-40 bg-blue-500/10 blur-[130px] pointer-events-none"></div>
        </div>

        <p className="text-2xl md:text-4xl font-bold mb-12 opacity-95 tracking-tight drop-shadow-lg">
          누구나 쉽게 인사컨설팅 수준의 인사를 바로 쓰는 곳
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <button 
            onClick={() => onNavigate('ats-detail')}
            className="bg-[#0074D9] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transform group overflow-hidden relative"
          >
            <span className="relative z-10">무료 ATS진단 확인하기</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('lineup');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="bg-white/5 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/15 transition-all hover:scale-105 active:scale-95 transform"
          >
            전체 AIA 둘러보기
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19 14l-7 7-7-7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;