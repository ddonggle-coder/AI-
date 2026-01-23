import React from 'react';

interface AIADetailProps {
  onBack: () => void;
  onConsult: () => void;
}

const AIADetail: React.FC<AIADetailProps> = ({ onBack, onConsult }) => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-[#0A192F] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <button onClick={onBack} className="text-blue-400 font-bold mb-8 hover:text-blue-300 transition-colors flex items-center justify-center mx-auto space-x-2">
            <span>← 메인 화면으로</span>
          </button>
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase border border-blue-500/30">
            What is HR AIA?
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Human Expert × <span className="text-blue-500">AI Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-medium max-w-3xl mx-auto leading-relaxed">
            "AI 기술로 무장한 시니어가 <br className="md:hidden" /> 대한민국 중소기업의 인사를 혁신합니다."
          </p>
        </div>
      </div>

      {/* Section 1: Solution (PDF Page 4) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black text-sm uppercase tracking-widest">Solution</span>
          <h2 className="text-4xl font-black text-navy mt-4 mb-6">검증된 AIA를 쇼핑하고,<br />코디네이터가 완성을 돕습니다</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-blue-500 transition-all group relative overflow-hidden">
              <div className="text-6xl absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity uppercase font-black italic">{item.num}</div>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-navy mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
              <div className="flex gap-2">
                {item.tags.map(t => (
                  <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-lg uppercase tracking-widest">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Core Technology (PDF Page 5) */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 space-y-8">
              <span className="text-blue-400 font-black text-sm uppercase tracking-widest">Core Technology</span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">직무명이 없어도 괜찮습니다<br /><span className="text-blue-400 italic">Bottom-up</span> 방식의 혁신</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                하는 일만 말하면 AI가 “직무”를 역산해 인사제도를 짜줍니다. 
                기존의 Top-down 방식에서 벗어나 실제 과업 데이터를 기반으로 정확한 결과물을 도출합니다.
              </p>
              
              <div className="space-y-6">
                 {[
                   { t: "기존 방식 (Top-down)", desc: "직무명 선택 → 역할 정의 (부정확함) → 시간 경과 시 정합성 결여", icon: "❌" },
                   { t: "K Prime 방식", desc: "실제 업무 내용 → AI 분석 → 정확한 직무 도출 → 완벽한 HR 리포트", icon: "✓" }
                 ].map((comp, i) => (
                   <div key={i} className={`p-6 rounded-2xl border ${i === 1 ? 'border-blue-500 bg-blue-500/10' : 'border-slate-800 bg-slate-900/50'}`}>
                     <div className="flex items-center space-x-3 mb-2">
                       <span className="text-xl">{comp.icon}</span>
                       <span className={`font-bold ${i === 1 ? 'text-blue-400' : 'text-slate-400'}`}>{comp.t}</span>
                     </div>
                     <p className="text-sm text-slate-300 pl-8">{comp.desc}</p>
                   </div>
                 ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10">
              <div className="space-y-8">
                {[
                  { title: "과업 입력", desc: "\"제가 주로 하는 일은...\" 자연어로 업무 내용을 자유롭게 설명합니다.", icon: "⌨️" },
                  { title: "Drilling (심층 분석)", desc: "AI가 자율성, 복잡성, 영향력 3대 기준으로 심층 질문을 던집니다.", icon: "🔍" },
                  { title: "Inverse Mapping", desc: "인사빅데이터(직업 DB) 역추적을 통해 표준 직무를 확정합니다.", icon: "🔄" },
                  { title: "Auto Generation", desc: "JD, 채용기준, 적정 연봉 밴드가 자동으로 생성/업데이트됩니다.", icon: "📄" }
                ].map((step, i) => (
                  <div key={i} className="flex space-x-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-xl font-black shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                      {i < 3 && <div className="w-0.5 h-12 bg-blue-600/30 my-2"></div>}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-black text-white mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: IP Protection (PDF Page 10) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-16 md:p-24 space-y-8 border-b md:border-b-0 md:border-r border-slate-50">
              <span className="text-blue-600 font-black text-sm uppercase tracking-widest">IP Protection</span>
              <h2 className="text-4xl font-black text-navy leading-tight">남의 것을 베끼지 않습니다<br />K Prime의 문법으로 재창조합니다</h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                지적재산권 보호는 K Prime 플랫폼의 신뢰성을 보장하는 핵심 요소입니다. 
                우리는 3단계 방어 전략을 통해 법적 리스크를 원천 차단합니다.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-dashed border-slate-200">
                <p className="text-xs text-navy font-bold leading-relaxed italic">
                  "K Prime은 기존 지식의 단순 복제가 아닌, 전문가의 암묵지(Tacit Knowledge)를 알고리즘화하여 표준화된 '지식 재창조' 플랫폼입니다."
                </p>
              </div>
            </div>

            <div className="p-16 md:p-24 bg-slate-50 space-y-12">
               <div>
                  <h4 className="text-xl font-black text-navy mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm mr-3">🛡️</span>
                    Legal Firewall (법적 방화벽)
                  </h4>
                  <ul className="space-y-4 text-xs text-slate-500">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>IP 자가진단 체크리스트:</strong> 제작 전 지적재산권 침해 여부 필수 점검</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>면책 동의 의무화:</strong> 제작자의 법적 보증 동의서 제출 필수</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>분쟁 해결 절차:</strong> 명확한 분쟁 조정 프로세스 구축</span>
                    </li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-xl font-black text-navy mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm mr-3">✨</span>
                    Abstraction & Re-creation
                  </h4>
                  <ul className="space-y-4 text-xs text-slate-500">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>특정 기업 데이터 사용 금지:</strong> 고유 내부 자료(Internal Data) 사용 원천 차단</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>가변형 엔진 문법 변환:</strong> 모든 로직은 K Prime 전용 문법으로 재구성</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>새로운 2차 저작물:</strong> 원본과 구별되는 완전히 새로운 결과물로 탄생</span>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <div className="bg-blue-600 p-16 md:p-24 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-10 transition-opacity"></div>
           <div className="relative z-10">
             <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight italic">"Operationalizing Complexity"</h2>
             <p className="text-blue-100 text-xl md:text-2xl mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
               복잡한 인사의 블랙박스를 걷어내고 <br />
               전문가의 지능을 당신의 도구로 만드세요.
             </p>
             <button 
               onClick={onConsult}
               className="bg-white text-blue-600 px-16 py-6 rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-2xl"
             >
               AIA 도입 맞춤 상담 신청
             </button>
           </div>
         </div>
      </section>
    </div>
  );
};

export default AIADetail;