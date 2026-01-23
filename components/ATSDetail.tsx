import React, { useState } from 'react';

interface ATSDetailProps {
  onBack: () => void;
  onConsult: () => void;
}

const ATSDetail: React.FC<ATSDetailProps> = ({ onBack, onConsult }) => {
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const handleDiagnose = () => {
    setIsDiagnosing(true);
    setTimeout(() => {
      setIsDiagnosing(false);
      setShowReport(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 2500);
  };

  return (
    <div className="pt-20 bg-slate-100 min-h-screen pb-24 font-['Pretendard']">
      {/* Hero Header */}
      {!showReport && (
        <div className="bg-[#0A192F] py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <button onClick={onBack} className="text-blue-400 font-bold mb-8 flex items-center space-x-2 hover:text-blue-300 transition-colors text-sm">
              <span>← 홈으로 돌아가기</span>
            </button>
            <div className="max-w-3xl">
              <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">K Prime HR Intelligence</span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter italic">ATS진단이란?</h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 font-medium">
                서류 너머의 역량까지 읽어내는 <br /> <span className="text-white underline decoration-blue-500 underline-offset-8">AIA 정밀 진단 리포트</span>를 경험하세요.
              </p>
              {!isDiagnosing && (
                <button 
                  onClick={handleDiagnose}
                  className="group relative bg-[#0074D9] text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">지금 바로 진단결과 보기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isDiagnosing && (
          <div className="flex flex-col items-center justify-center py-32 space-y-8 bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 animate-pulse">
            <div className="relative w-28 h-28">
              <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-navy mb-3">AIA 엔진 분석 중...</p>
              <p className="text-slate-400 font-medium">후보자의 5대 핵심 요소와 행동 역량을 대조하고 있습니다.</p>
            </div>
          </div>
        )}

        {!showReport && !isDiagnosing && (
          <div className="space-y-32 py-20">
            {/* Section: Solution (PDF 4p) */}
            <section className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-slate-100">
               <div className="flex flex-col md:flex-row gap-12 items-center">
                 <div className="md:w-1/2 space-y-6">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Solution</span>
                    <h3 className="text-3xl font-black text-navy leading-tight">검증된 AIA를 쇼핑하고,<br />코디네이터가 완성을 돕습니다</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      필요한 HR 기능 모듈을 장바구니에 담아 즉시 사용 가능합니다. 마치 앱스토어에서 앱을 다운로드하듯 필요한 HR 기능만 선택할 수 있습니다.
                    </p>
                 </div>
                 <div className="md:w-1/2 grid grid-cols-1 gap-4">
                    {[
                      { t: "AIA Shop", d: "앱스토어처럼 필요한 모듈을 즉시 사용" },
                      { t: "Micro-Consulting", d: "전문가의 저렴하고 빠른 밀착 지원" },
                      { t: "Dynamic Engine", d: "성장 단계에 맞춰 변하는 지능형 시스템" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                         <div className="w-10 h-10 bg-navy text-white rounded-xl flex items-center justify-center font-black text-sm">{i+1}</div>
                         <div>
                           <p className="font-bold text-navy text-sm">{item.t}</p>
                           <p className="text-xs text-slate-400">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
               </div>
            </section>

            {/* Section: Core Technology (PDF 5p) */}
            <section className="bg-navy p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>
               <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                  <span className="text-blue-400 font-black text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">Core Technology</span>
                  <h3 className="text-4xl font-black leading-tight italic">"직무명이 없어도 괜찮습니다"</h3>
                  <p className="text-slate-400 max-w-2xl leading-relaxed">
                    하는 일만 말하면 AI가 “직무”를 역산해 인사제도를 짜줍니다. 실제 업무 내용에서 출발하는 Task-First Bottom-up 방식의 혁신을 경험하세요.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 pt-8">
                    {["과업 입력", "심층 분석(Drilling)", "Inverse Mapping", "Auto Generation"].map((step, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/10 font-bold text-sm">{step}</div>
                        {i < 3 && <div className="text-blue-400">→</div>}
                      </div>
                    ))}
                  </div>
               </div>
            </section>

            {/* Section: IP Protection (PDF 10p) */}
            <section className="max-w-4xl mx-auto">
               <div className="text-center mb-12">
                 <span className="text-blue-600 font-black text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">IP Protection</span>
                 <h3 className="text-3xl font-black text-navy mt-4 mb-4 leading-tight">남의 것을 베끼지 않습니다<br />K Prime의 문법으로 재창조합니다</h3>
                 <p className="text-slate-500 text-sm">지적재산권 보호는 K Prime 플랫폼의 신뢰성을 보장하는 핵심 요소입니다.</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
                    <h4 className="font-black text-navy mb-4 flex items-center">
                      <span className="w-6 h-6 bg-red-50 text-red-500 rounded flex items-center justify-center text-xs mr-2">🛡️</span>
                      Legal Firewall (법적 방화벽)
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed italic">
                      IP 자가진단 체크리스트와 면책 동의 의무화, 명확한 분쟁 해결 절차를 통해 법적 리스크를 원천 차단합니다.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
                    <h4 className="font-black text-navy mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-50 text-blue-600 rounded flex items-center justify-center text-xs mr-2">✨</span>
                      Abstraction & Re-creation
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed italic">
                      특정 기업 데이터 사용을 금지하고, 모든 로직을 K Prime 전용 문법으로 변환하여 새로운 2차 저작물로 재창조합니다.
                    </p>
                  </div>
               </div>
            </section>
          </div>
        )}

        {showReport && (
          <div className="space-y-12 animate-[fadeIn_0.8s_ease-out]">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setShowReport(false)} className="text-slate-500 font-bold hover:text-navy transition-colors text-sm">
                ← 진단 페이지로
              </button>
              <h2 className="text-2xl font-black text-navy italic uppercase tracking-tighter">ATS진단 상세보기</h2>
              <button 
                onClick={() => window.print()}
                className="bg-navy text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-blue-900 transition-all"
              >
                PDF 다운로드
              </button>
            </div>

            {/* --- PAGE 1: Scorecard & Overview --- */}
            <div className="bg-white shadow-2xl rounded-sm overflow-hidden border border-slate-200">
              <div className="bg-[#1e293b] p-6 text-white flex justify-between items-center border-b-4 border-orange-500">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h1 className="text-xl font-black tracking-tight">K Prime Job Fit Report</h1>
                    <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">OO 제약사 (Global Pharma) / 제제연구 (Formulation Researcher)</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black">익명 지원자 A</p>
                  <p className="text-[9px] text-slate-400">ATS-S/D 202542 | 2025-12-15</p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Scorecard Summary */}
                <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
                  <h3 className="text-sm font-black text-navy mb-6 flex items-center">
                    <span className="w-1 h-4 bg-orange-500 mr-2 rounded-full"></span> Scorecard Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-lg border border-slate-100 text-center">
                      <p className="text-[10px] font-black text-slate-400 mb-2">■ 직무 경험 적합도</p>
                      <p className="text-4xl font-black text-blue-900">67.1</p>
                      <p className="text-xs font-bold text-slate-500 mt-2">대체로 부적합</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-slate-100 text-center">
                      <p className="text-[10px] font-black text-slate-400 mb-2">■ 핵심 역량 적합도</p>
                      <p className="text-4xl font-black text-blue-900">86.3</p>
                      <p className="text-xs font-bold text-slate-500 mt-2">부분 적합</p>
                    </div>
                    <div className="bg-[#1e293b] p-6 rounded-lg text-center relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-full h-full bg-orange-500/10 pointer-events-none"></div>
                      <p className="text-[10px] font-black text-blue-300 mb-2 uppercase tracking-widest">TOTAL FIT SCORE</p>
                      <p className="text-5xl font-black text-white">76.7</p>
                      <div className="mt-4 bg-orange-500 text-white font-black py-1 px-4 rounded-full text-xs inline-block">부분 적합</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white border border-slate-100 rounded-lg">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <span className="font-bold text-navy">■ 종합 적합도 의견:</span> "B (보통) - 정량적 경험 점수는 '보완 필요'이나, 개량신약 및 ODT 등 핵심 직무 기술(Skill)의 적합도가 매우 높아 실무 성과는 '우수'가 기대됨."
                    </p>
                  </div>
                </div>

                {/* Analysis Overview */}
                <div className="border border-slate-200 rounded-lg p-6">
                  <h3 className="text-sm font-black text-navy mb-6 flex items-center">
                    <span className="w-1 h-4 bg-orange-500 mr-2 rounded-full"></span> 분석 개요 (Analysis Overview)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase">Company / Job Info</p>
                        <ul className="text-xs space-y-1.5 text-slate-700">
                          <li className="flex justify-between"><span>• Target Industry</span> <span className="font-bold">Pharmaceuticals / Bio</span></li>
                          <li className="flex justify-between"><span>• Target Company</span> <span className="font-bold">OO 제약사 (Global Pharma)</span></li>
                          <li className="flex justify-between"><span>• Target Position</span> <span className="font-bold">제제연구 (Formulation Researcher)</span></li>
                          <li className="flex justify-between"><span>• Candidate</span> <span className="font-bold">익명 지원자 (경력 34개월)</span></li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                          <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase">업무분류/유형</p>
                          <p className="text-[11px] text-slate-600 leading-relaxed">개량신약 독자 연구, ODF(구강붕해필름) 특화 기술, GMP 규정 준수</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                          <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase">직무 키워드</p>
                          <p className="text-[11px] text-slate-600 leading-relaxed">Modified New Drug, Smart Film (ODF), Tech Transfer, Validation</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase">채용 사유</p>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          OO 제약사는 스마트 필름 기술을 기반으로 한 개량신약 파이프라인 확장과 글로벌 기술 수출 가속화를 위해 즉시 실무 수행이 가능한 연구원을 충원함.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase">직무 특성</p>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          단순 제제 실험을 넘어 특허 회피 전략 수립, 대량 생산을 위한 공정 밸리데이션, 그리고 타 제약사로의 기술 이전을 위한 CTD 자료 작성 능력이 복합적으로 요구됨.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- PAGE 2 & 3: Details --- */}
            <div className="bg-white shadow-2xl rounded-sm overflow-hidden border border-slate-200 p-8 space-y-12">
               <p className="text-center text-slate-400 text-sm italic py-12">상세 분석 내용이 이어집니다... (실제 리포트에서는 모든 데이터가 제공됩니다)</p>
            </div>

            {/* Bottom CTA */}
            <div className="flex justify-center pt-8">
               <button 
                 onClick={onConsult}
                 className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all"
               >
                 무료 ATS진단하기
               </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ATSDetail;