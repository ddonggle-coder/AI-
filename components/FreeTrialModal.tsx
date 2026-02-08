
import React, { useState } from 'react';
import { PageView } from '../App';

interface FreeTrialModalProps {
  onClose: () => void;
  onHideToday: () => void;
  onNavigate: (view: PageView) => void;
}

const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ onClose, onHideToday, onNavigate }) => {
  const [hideChecked, setHideChecked] = useState(false);

  const handleClose = () => {
    if (hideChecked) {
      onHideToday();
    }
    onClose();
  };

  const handleGoToTools = () => {
    onNavigate('tool-list');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden w-full max-w-lg transform animate-[scaleIn_0.3s_cubic-bezier(0.16,1,0.3,1)]">
        {/* Header Decor */}
        <div className="h-3 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
        
        <div className="p-10 text-center">
          <div className="inline-block px-5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6">
            Limited Time Offer
          </div>
          
          <h2 className="text-4xl font-black text-[#0A192F] mb-8 leading-tight tracking-tighter italic">
            무료 체험 이벤트!
          </h2>
          
          <div className="space-y-4 mb-12">
            <p className="text-xl font-bold text-slate-700 leading-snug">
              1개월 간 <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">인사AI 앱을 무료</span>로 사용해 보세요.
            </p>
            <p className="text-base text-slate-500 font-medium">
              마음껏 사용하시고 업무를 효율화 해보세요.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-6">
              <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                사용후기 및 보완요청을 보내주시면<br />
                <span className="text-navy font-black">소정의 커피 상품권</span>을 보내드립니다.
              </p>
            </div>
          </div>

          <button 
            onClick={handleGoToTools}
            className="w-full bg-[#0074D9] text-white py-6 rounded-2xl font-black text-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/30 hover:scale-[1.02] active:scale-95 group relative overflow-hidden"
          >
            <span className="relative z-10">무료 체험 써보기</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </button>
        </div>

        {/* Footer */}
        <div className="px-10 py-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
          <label className="flex items-center space-x-2 cursor-pointer group">
            <div className="relative">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={hideChecked}
                onChange={() => setHideChecked(!hideChecked)}
              />
              <div className={`w-5 h-5 border-2 rounded transition-colors ${hideChecked ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300'}`}>
                {hideChecked && (
                  <svg className="w-full h-full text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xs font-bold text-slate-500 group-hover:text-slate-700 transition-colors">오늘 더 보지 않기</span>
          </label>
          
          <button 
            onClick={handleClose}
            className="text-xs font-black text-slate-400 hover:text-navy transition-colors flex items-center space-x-1"
          >
            <span>닫기</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default FreeTrialModal;
