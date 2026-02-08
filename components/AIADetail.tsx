
import React from 'react';

interface AIADetailProps {
  onBack: () => void;
  onConsult: () => void;
}

const AIADetail: React.FC<AIADetailProps> = ({ onBack, onConsult }) => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-24 font-['Pretendard']">
      {/* Hero Section */}
      <div className="bg-[#0A192F] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <button onClick={onBack} className="text-blue-400 font-bold mb-10 hover:text-blue-300 transition-colors flex items-center justify-center mx-auto space-x-2 text-lg">
            <span>← 메인 화면으로</span>
          </button>
          <span className="inline-block px-6 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-black mb-8 tracking-widest uppercase border border-blue-500/30 italic">
            What is HR AIA?
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter italic">
            Human Expert × <span className="text-blue-500">AI Intelligence</span>
          </h1>
          <p className="text-xl md:text-3xl text-blue-100 font-bold max-w-4xl mx-auto leading-tight italic">
            "AI 기술로 무장한 시니어가 <br className="md:hidden" /> 대한민국 중소기업의 인사를 혁신합니다."
          </p>
        </div>
      </div>

      {/* Section 1: Solution */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black text-base uppercase tracking-widest italic">Solution</span>
          <h2 className="text-4xl md:text-5xl font-black text-navy mt-4 mb-8 italic">검증된 AIA를 쇼핑하고,<br />코디네이터가 완성을 돕습니다</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              num: "01", 
              title: "AIA Shop (Platform)", 
              desc: "직무, 채용, 평가, 보상 등 필요한 기능 모듈을 장바구니에 담아 즉시 사용 가능합니다. 마치 앱스토어에서 앱을 다운로드하듯 필요한 HR 기능만 선택할 수 있습니다.",
              tags: ["즉시 사용", "모듈형 구조"],
              icon: "🛒"
            },
            { 
              num: "02", 
              title: "Micro-Consulting (Service)", 
              desc: "사용 중 막히는 부분은 '시니어 코디네이터'가 저렴한 비용으로 밀착 지원합니다. 실시간 채팅과 화상 컨설팅을 통해 즉각적인 문제 해결이 가능합니다.",
              tags: ["전문가 지원", "경력 10년+"],
              icon: "🤝"
            },
            { 
              num: "03", 
              title: "Dynamic Engine (Tech)", 
              desc: "정적인 문서가 아닌, 상황에 따라 변하는 '가변형 로직'을 탑재했습니다. 기업의 성장 단계와 산업 특성에 맞춰 자동으로 조정되는 지능형 시스템입니다.",
              tags: ["맞춤 진화", "가변형 로직"],
              icon: "⚙️"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 hover:border-blue-500 transition-all group relative overflow-hidden">
              <div className="text-7xl absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity uppercase font-black italic">{item.num}</div>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-navy mb-6">{item.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed mb-10 font-medium">{item.desc}</p>
              <div className="flex gap-2">
                {item.tags.map(t => (
                  <span key={t} className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[11px] font-black rounded-xl uppercase tracking-widest">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Core Technology */}
      <section className="py-32 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="lg:w-1/2 space-y-10">
              <span className="text-blue-400 font-black text-base uppercase tracking-widest italic">Core Technology</span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight italic">직무명이 없어도 괜찮습니다<br /><span className="text-blue-400 underline decoration-blue-500 underline-offset-8">Bottom-up</span> 방식의 혁신</h2>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                하는 일만 말하면 AI가 “직무”를 역산해 인사제도를 짜줍니다. 
                기존의 Top-down 방식에서 벗어나 실제 과업 데이터를 기반으로 정확한 결과물을 도출합니다.
              </p>
              
              <div className="space-y-8">
                 {[
                   { t: "기존 방식 (Top-down)", desc: "직무명 선택 → 역할 정의 (부정확함) → 시간 경과 시 정합성 결여", icon: "❌" },
                   { t: "K Prime 방식 (AIA)", desc: "실제 업무 내용 → AI 분석 → 정확한 직무 도출 → 완벽한 HR 리포트", icon: "✓" }
                 ].map((comp, i) => (
                   <div key={i} className={`p-8 rounded-[2rem] border ${i === 1 ? 'border-blue-500 bg-blue-500/10 shadow-xl shadow-blue-500/10' : 'border-slate-800 bg-slate-900/50'}`}>
                     <div className="flex items-center space-x-4 mb-3">
                       <span className="text-2xl">{comp.icon}</span>
                       <span className={`text-lg font-black ${i === 1 ? 'text-blue-400' : 'text-slate-400'}`}>{comp.t}</span>
                     </div>
                     <p className="text-base text-slate-300 pl-10 leading-relaxed">{comp.desc}</p>
                   </div>
                 ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 shadow-3xl">
              <div className="space-y-10">
                {[
                  { title: "과업 입력", desc: "\"제가 주로 하는 일은...\" 자연어로 업무 내용을 자유롭게 설명합니다.", icon: "⌨️" },
                  { title: "Drilling (심층 분석)", desc: "AI가 자율성, 복잡성, 영향력 3대 기준으로 심층 질문을 던집니다.", icon: "🔍" },
                  { title: "Inverse Mapping", desc: "인사빅데이터(직업 DB) 역추적을 통해 표준 직무를 확정합니다.", icon: "🔄" },
                  { title: "Auto Generation", desc: "JD, 채용기준, 적정 연봉 밴드가 자동으로 생성/업데이트됩니다.", icon: "📄" }
                ].map((step, i) => (
                  <div key={i} className="flex space-x-8 group">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                      {i < 3 && <div className="w-0.5 h-16 bg-blue-600/30 my-2"></div>}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xl font-black text-white mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-center py-10 text-slate-400 text-base font-bold italic">
        * 가독성을 위해 상세 페이지의 텍스트 크기를 전반적으로 상향 조정하였습니다.
      </div>
    </div>
  );
};

export default AIADetail;
