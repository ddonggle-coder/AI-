
import React from 'react';

interface ToolListProps {
  onBack: () => void;
  onConsult: () => void;
}

const ToolList: React.FC<ToolListProps> = ({ onBack, onConsult }) => {
  const tools = [
    { category: '채용(완료)', name: '지원자 이력서 정보 취합기' },
    { category: '채용(완료)', name: '지원자 직무적합도 ATS 레포트 작성기' },
    { category: '채용', name: '1차 서류전형 결과보고서 작성기' },
    { category: '채용', name: '면접일정 조율기' },
    { category: '채용', name: '면접평가표 양식 작성기' },
    { category: '채용', name: '면접결과 종합레포트 작성기' },
    { category: '채용(정리중)', name: '지원자 처우 산정기' },
    { category: '채용', name: '채용합격자 종합 안내문 작성기' },
    { category: '채용', name: '고용브랜드 및 직무 제안서 (채용홍보물) 생성기' },
    { category: '채용', name: '신규입사자 90일 온보딩 운영기' },
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-24 font-['Pretendard']">
      <div className="bg-[#0A192F] py-24 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <button onClick={onBack} className="text-blue-400 font-bold mb-8 hover:text-blue-300 transition-colors flex items-center justify-center mx-auto space-x-2">
            <span>← 홈으로 돌아가기</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter">
            전체 AI <span className="text-blue-500">도구 리스트</span>
          </h1>
          <p className="text-slate-400 text-lg">인사의 모든 과정을 도구로 해결하는 K Prime의 AIA 엔진 라인업</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-6 px-8 text-left text-sm font-black uppercase tracking-widest border-r border-slate-800">구분 / 상태</th>
                  <th className="py-6 px-8 text-left text-sm font-black uppercase tracking-widest">AI 도구 명칭</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                    <td className="py-6 px-8 border-r border-slate-100 align-middle">
                      <div className="flex flex-col">
                        <span className={`text-xs font-black px-3 py-1 rounded-full w-fit ${
                          tool.category.includes('완료') ? 'bg-blue-100 text-blue-600' : 
                          tool.category.includes('정리중') ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {tool.category}
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-8 align-middle">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-navy group-hover:text-blue-600 transition-colors">
                          {tool.name}
                        </span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={onConsult}
                            className="text-[10px] font-black bg-navy text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                          >
                            상담문의
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-12 bg-slate-50 text-center border-t border-slate-100">
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              위 리스트는 현재 제공 중이거나 곧 업데이트 예정인 핵심 채용 도구들입니다.<br />
              <span className="font-bold text-navy">K Prime HR</span>은 이외에도 조직 관리, 성과 평가, 보상 체계 등 100개 이상의 AIA를 개발하고 있습니다.
            </p>
            <button 
              onClick={onConsult}
              className="bg-blue-600 text-white px-12 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
            >
              기업 전용 AIA 패키지 맞춤 상담
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolList;
