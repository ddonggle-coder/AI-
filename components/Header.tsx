import React, { useState } from 'react';
import { PageView } from '../App';

interface HeaderProps {
  onNavigate: (view: PageView) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '초기화면', view: 'home' as PageView },
    { label: 'HR AIA란?', view: 'aia-info' as PageView },
    { label: 'About', href: '#philosophy' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button onClick={() => handleNavClick('home')} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0A192F] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl italic">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0A192F]">AI인사팀</span>
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.view ? handleNavClick(item.view) : null}
                className="text-sm font-semibold text-slate-600 hover:text-[#0074D9] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button 
              onClick={() => handleNavClick('consultation')}
              className="bg-[#0074D9] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 transition-all"
            >
              무료 상담 신청
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2}/> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2}/>}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.view ? handleNavClick(item.view) : null}
                className="text-left text-sm font-semibold text-slate-600"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('consultation')}
              className="w-full bg-[#0074D9] text-white py-3 rounded-lg font-bold"
            >
              무료 상담 신청
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;