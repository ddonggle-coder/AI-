
import React from 'react';

const UPCOMING_TOOLS = [
  { title: "징계 양정 가이드", desc: "사례별 노동법 판례를 기반으로 공정한 징계 수위를 제안합니다.", status: "Q3 2025" },
  { title: "퇴사 위험도 예측", desc: "활동 로그와 설문을 분석하여 핵심 인재의 이탈 징후를 조기에 포착합니다.", status: "Q4 2025" },
  { title: "임금 체계 시뮬레이션", desc: "최저임금 및 업종별 평균 데이터를 기반으로 최적의 임금 밴드를 설계합니다.", status: "Q3 2025" },
  { title: "근로계약 자동 생성", desc: "복잡한 수당 구조를 법적 리스크 없이 계약서로 즉시 자동 변환합니다.", status: "Q2 2025" },
  { title: "직장 내 괴롭힘 탐지", desc: "조직 내 소통 데이터를 분석하여 잠재적 갈등 요소를 사전에 리포트합니다.", status: "DEVELOPMENT" },
  { title: "글로벌 HR 내비게이터", desc: "해외 법인 설립 시 국가별 노동법과 인사 관행 가이드를 즉시 제공합니다.", status: "Q1 2026" }
];

const UpcomingAIA: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full italic mb-4 inline-block">Future Roadmap</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] leading-tight mb-6">
              AIA는 멈추지 않고 <br /> <span className="text-blue-600">진화하고 있습니다</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              현재 제공되는 12개 전문 AIA 외에도, <span className="font-bold text-[#0A192F]">100개 이상의 신규 AIA 개발 로드맵</span>이 진행 중입니다. 
              현장의 모든 인사 고민이 도구(AIA)로 해결되는 날까지 K Prime의 지능은 확장됩니다.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center space-x-4">
            <span className="text-4xl font-black text-blue-600 leading-none">100+</span>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
              Additional AIA<br />Under Development
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING_TOOLS.map((tool, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all relative group">
              <div className="absolute top-8 right-8">
                <span className="px-3 py-1 bg-slate-50 text-slate-300 text-[10px] font-black rounded-lg uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {tool.status}
                </span>
              </div>
              <h4 className="text-xl font-black text-[#0A192F] mb-4 mt-2">{tool.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{tool.desc}</p>
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center shadow-2xl shadow-blue-500/20 group cursor-default">
             <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl mb-6">
               ⚡
             </div>
             <h4 className="text-white font-black text-2xl mb-3 italic tracking-tight">And much more...</h4>
             <p className="text-blue-100 text-sm leading-relaxed font-medium">
               귀사만의 특수한 인사 로직도 <br />
               AIA로 맞춤 제작이 가능합니다.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingAIA;
