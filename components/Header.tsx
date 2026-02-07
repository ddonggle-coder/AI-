
import React, { useState } from 'react';
import { PageView } from '../App';

interface HeaderProps {
  onNavigate: (view: PageView) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '홈', view: 'home' as PageView },
    { label: 'HR AIA란?', view: 'aia-info' as PageView },
    { label: '회사철학', href: '#philosophy' },
    { label: '전체 AI도구 리스트', view: 'tool-list' as PageView },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button onClick={() => handleNavClick('home')} className="flex items-center group">
              <div className="w-11 h-11 bg-gradient-to-br from-[#0A192F] to-[#1B4965] rounded-xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-2xl italic tracking-tighter">A</span>
              </div>
              <div className="ml-3 flex flex-col items-start">
                <span className="text-xl font-black tracking-tighter text-[#0A192F] leading-none">AI인사팀</span>
                <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] mt-1 leading-none uppercase">K Prime HR</span>
              </div>
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                   if(item.view) handleNavClick(item.view);
                   else {
                     const el = document.getElementById(item.href?.replace('#', '') || '');
                     if(el) el.scrollIntoView({ behavior: 'smooth' });
                   }
                }}
                className={`text-sm font-bold transition-colors tracking-tight ${item.label === '전체 AI도구 리스트' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleNavClick('consultation')}
              className="bg-blue-600 text-white px-7 py-3 rounded-2xl text-sm font-black shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all"
            >
              무료 도입 상담
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2.5}/> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2.5}/>}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6 animate-[fadeIn_0.2s_ease-out]">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.view ? handleNavClick(item.view) : null}
                className="text-left text-lg font-bold text-slate-700"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('consultation')}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-center shadow-xl shadow-blue-500/20"
            >
              무료 도입 상담
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
