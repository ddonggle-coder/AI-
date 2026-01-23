import React from 'react';
import { PageView } from '../App';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy text-slate-400 py-20 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-navy font-black text-lg italic">K</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white italic">K Prime HR</span>
            </div>
            <p className="max-w-md text-slate-400 leading-relaxed text-sm">
              우리는 인사 컨설팅의 복잡한 블랙박스를 걷어내고, 누구나 실행 가능한 도구(AIA)로 바꿉니다. 
              기업의 성장은 데이터와 로직 위에 세워져야 한다는 믿음으로 서비스를 만듭니다.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">AIA Lineup</h4>
            <ul className="space-y-4 text-xs">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-400">조직 진단 패키리</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-400">보상 설계 패키지</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-400">성과 평가 패키지</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-400">채용/온보딩 패키지</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-xs">
              <li><button onClick={() => onNavigate('aia-info')} className="hover:text-blue-400">K Prime 철학</button></li>
              <li><button onClick={() => onNavigate('consultation')} className="hover:text-blue-400">도입 상담 문의</button></li>
              <li><button onClick={() => onNavigate('ats-detail')} className="hover:text-blue-400">ATS 진단 신청</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold">
          <p>© 2024 AI인사팀 (K Prime HR Solution). All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;