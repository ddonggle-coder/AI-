
import React, { useState } from 'react';

interface ATSDetailProps {
  onBack: () => void;
  onConsult: () => void;
  onActivateDify?: () => void;
}

const ATSDetail: React.FC<ATSDetailProps> = ({ onBack, onConsult, onActivateDify }) => {
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const handleDiagnose = () => {
    setIsDiagnosing(true);
    setTimeout(() => {
      setIsDiagnosing(false);
      setShowReport(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2500);
  };

  return (
    <div className="pt-20 bg-slate-100 min-h-screen pb-24 font-['Pretendard']">
      {/* --- "ATS진단이란?" 섹션 (결과 보기 전) --- */}
      {!showReport && (
        <div className="space-y-0">
          {/* Hero Header: 홈 화면 네온 스타일 적용 */}
          <div className="bg-[#0A192F] py-24 text-white relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
                className="w-full h-full object-cover opacity-20"
                alt="bg"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
              <button onClick={onBack} className="text-blue-400 font-bold mb-8 flex items-center space-x-2 hover:text-blue-300 transition-colors text-base mx-auto md:mx-0">
                <span>← 홈으로 돌아가기</span>
              </button>
              
              <div className="relative mb-12">
                <h1 className="flex flex-col md:flex-row items-center justify-center select-none italic">
                  <span className="inline-block font-['Black_Han_Sans'] text-6xl md:text-8xl leading-none tracking-tighter neon-white pr-2">
                    AI인사팀
                  </span>
                  <span className="inline-block font-['Orbitron'] text-4xl md:text-6xl leading-none tracking-widest neon-blue py-4">
                    .COM
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mt-6 font-bold tracking-tight">
                  1인 정밀 적합도 진단부터 <span className="text-white underline decoration-blue-500 underline-offset-4">다수 후보자 비교/랭킹</span>까지
                </p>
              </div>

              {!isDiagnosing && (
                <div className="flex flex-col items-center space-y-4">
                  <button 
                    onClick={handleDiagnose}
                    className="group relative bg-[#0074D9] text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 overflow-hidden"
                  >
                    <span className="relative z-10">개인별 적합도 상세결과 보기</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  </button>
                  
                  {/* New Test Button */}
                  <button 
                    onClick={() => {
                      if(onActivateDify) onActivateDify();
                    }}
                    className="group relative bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all shadow-xl hover:scale-105 active:scale-95"
                  >
                    <span>개인별 적합도 진단하기(테스트용)</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Case Study Contents: ㅇㅇ제약 언론홍보 리포트 반영 */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 space-y-24 pb-24">
            
            {/* 1. 종합 스코어카드 비교 (4P 기반) */}
            <section className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-slate-100">
              <div className="mb-12 border-b border-slate-100 pb-8">
                <span className="text-blue-600 font-black text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full italic">Case Analysis 01</span>
                <h3 className="text-3xl font-black text-navy mt-4 italic leading-tight">후보자별 종합 스코어카드 비교</h3>
                <p className="text-slate-500 text-base mt-2 font-medium">ㅇㅇ제약 언론홍보(PR Manager) 후보자 3인 정량 비교 결과</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "문OO (33세)", key: "Crisis Manager", exp: "80.8 (A)", comp: "100.0 (S)", rating: "최우수(Best)", color: "blue", best: true },
                  { name: "김OO (30세)", key: "Digital Transformer", exp: "57.4 (C+)", comp: "78.5 (B+)", rating: "보류(Hold)", color: "slate" },
                  { name: "조OO (34세)", key: "Brand Campaigner", exp: "50.8 (C)", comp: "85.7 (A)", rating: "미흡(Drop)", color: "slate" },
                ].map((cand, i) => (
                  <div key={i} className={`p-8 rounded-3xl border-2 transition-all hover:scale-[1.02] ${cand.best ? 'border-blue-500 bg-blue-50/30' : 'border-slate-100 bg-white'}`}>
                    {cand.best && <span className="bg-blue-600 text-white text-[12px] font-black px-4 py-1 rounded-full uppercase mb-4 inline-block">BEST CHOICE</span>}
                    <h4 className="text-2xl font-black text-navy mb-1">{cand.name}</h4>
                    <p className="text-blue-600 text-sm font-bold mb-6 italic">{cand.key}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-bold">직무 경험 적합도</span>
                        <span className="text-navy font-black">{cand.exp}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-bold">핵심 역량 적합도</span>
                        <span className="text-navy font-black">{cand.comp}</span>
                      </div>
                    </div>
                    
                    <div className={`text-center py-4 rounded-xl font-black text-base uppercase ${cand.best ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {cand.rating}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. 5대 핵심 요소 레이더 분석 (6P 기반) */}
            <section className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-slate-100 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="mb-12 border-b border-slate-100 pb-8 relative z-10">
                <span className="text-blue-600 font-black text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full italic">Case Analysis 02</span>
                <h3 className="text-3xl font-black text-navy mt-4 italic leading-tight">5대 핵심 요소 정량 비교</h3>
                <p className="text-slate-500 text-base mt-2 font-medium">위기 관리, 전략 기획 등 핵심 역량 밸런스 분석</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-72 h-72 border-2 border-dashed border-slate-200 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full bg-blue-500/10 clip-path-polygon rotate-12"></div>
                    </div>
                    <div className="text-xs font-black text-slate-400 space-y-1 text-center">
                      <p>Crisis Management</p>
                      <p className="text-blue-600">문OO 압승</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-6">
                  {[
                    { t: "문OO: 위기 관리 압승 (Crisis: 100.0)", d: "법학 전공 및 대형 위기 대응 경험을 바탕으로 위기 관리 및 언론 관계 영역에서 독보적인 우위 점함.", icon: "🛡️" },
                    { t: "김OO: AI 활용 독주 (AI Skill: 85.0)", d: "생성형 AI 활용 능력은 최상위 수준이나, 핵심인 산업 이해도와 위기 관리 점수가 낮아 단독 수행에 리스크 존재.", icon: "🤖" },
                    { t: "조OO: 전략적 기획 우수 (Strategy: 85.5)", d: "마케팅 관점의 브랜드 홍보 전략 수립 능력은 탁월하나, 규제 산업(ㅇㅇ)에 필수적인 위기 관리 능력 부족.", icon: "📢" }
                  ].map((insight, idx) => (
                    <div key={idx} className="flex space-x-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-lg transition-all">
                      <div className="text-3xl">{insight.icon}</div>
                      <div>
                        <p className="font-black text-navy text-base mb-1">{insight.t}</p>
                        <p className="text-sm text-slate-500 leading-relaxed">{insight.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. 핵심 역량 적합도 (7P 기반) */}
            <section className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-slate-100">
              <div className="mb-12 border-b border-slate-100 pb-8">
                <span className="text-blue-600 font-black text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full italic">Case Analysis 03</span>
                <h3 className="text-3xl font-black text-navy mt-4 italic leading-tight">행동 특성 모델 기반 잠재력 평가</h3>
                <p className="text-slate-500 text-base mt-2 font-medium">유연성, 정보 수집, 개념적 사고 등 역량 대조</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="text-xs font-black uppercase text-slate-400 border-b-2 border-slate-100">
                    <tr>
                      <th className="py-5 px-4">역량 항목</th>
                      <th className="py-5 px-4 text-center">Target</th>
                      <th className="py-5 px-4 text-center text-blue-600">① 문OO</th>
                      <th className="py-5 px-4 text-center">② 김OO</th>
                      <th className="py-5 px-4 text-center">③ 조OO</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { item: "유연성/적응력", target: "Lv.3", m: "Lv.5 (+2)", k: "Lv.4 (+1)", j: "Lv.4 (+1)" },
                      { item: "정보 수집", target: "Lv.3", m: "Lv.4 (+1)", k: "Lv.5 (+2)", j: "Lv.3 (0)" },
                      { item: "개념적 사고", target: "Lv.4", m: "Lv.4 (0)", k: "Lv.2 (-2)", j: "Lv.3 (-1)" },
                      { item: "영향력 행사", target: "Lv.3", m: "Lv.4 (+1)", k: "Lv.3 (0)", j: "Lv.5 (+2)" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="py-5 px-4 font-bold text-navy text-base">{row.item}</td>
                        <td className="py-5 px-4 text-center font-bold text-slate-400">{row.target}</td>
                        <td className="py-5 px-4 text-center font-black text-blue-600">{row.m}</td>
                        <td className="py-5 px-4 text-center text-slate-500">{row.k}</td>
                        <td className="py-5 px-4 text-center text-slate-500">{row.j}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-10 p-10 bg-blue-900 text-white rounded-[2.5rem] shadow-xl">
                <p className="text-base font-black mb-3 flex items-center italic">
                  <span className="mr-3 text-xl">💡</span> 종합 역량 분석 결과
                </p>
                <p className="text-sm text-blue-100 leading-relaxed font-medium">
                  문OO은 위기 관리에 필수적인 논리/적응력을 완비했습니다. 조OO는 확산력(Impact), 김OO는 기술력(Tech)에 강점이 있으나, ㅇㅇ 산업의 핵심인 '개념적 사고(위기 대응 논리)' 역량에서 문OO이 유일하게 적합 판정을 받았습니다.
                </p>
              </div>
            </section>
          </div>
        </div>
      )}

      {/* --- 분석 중 애니메이션 --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* --- 상세보기 리포트 --- */}
        {showReport && (
          <div className="space-y-16 animate-[fadeIn_0.8s_ease-out]">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setShowReport(false)} className="text-slate-500 font-bold hover:text-navy transition-colors text-base">
                ← 진단 페이지로
              </button>
              <h2 className="text-2xl font-black text-navy italic uppercase tracking-tighter">ATS진단 상세 리포트</h2>
              <div className="flex space-x-2">
                <button onClick={() => window.print()} className="bg-navy text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-900 transition-all">
                  PDF 다운로드
                </button>
              </div>
            </div>

            {/* PAGE 1: Scorecard & Overview */}
            <div className="bg-white shadow-2xl rounded-sm overflow-hidden border border-slate-200">
              <div className="bg-[#1e293b] p-8 text-white flex justify-between items-center border-b-4 border-orange-500">
                <div className="flex items-center space-x-5">
                  <div className="text-4xl">📊</div>
                  <div>
                    <h1 className="text-2xl font-black tracking-tight uppercase">K Prime Job Fit Report</h1>
                    <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">ㅇㅇ제약 / ㅇㅇ연구</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-white">김OO 지원자</p>
                  <p className="text-xs text-slate-400">ATS-S/D 202542 | 2025-12-15</p>
                </div>
              </div>

              <div className="p-12 space-y-12">
                <div>
                  <h3 className="text-xl font-black text-navy mb-8 flex items-center">
                    <span className="w-1.5 h-6 bg-orange-500 mr-4 rounded-full"></span> Scorecard Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-2xl border border-slate-100 text-center shadow-sm">
                      <p className="text-xs font-black text-slate-400 mb-4 uppercase">■ 직무 경험 적합도</p>
                      <p className="text-6xl font-black text-blue-900">67.1</p>
                      <p className="text-base font-bold text-slate-500 mt-4">대체로 부적합</p>
                    </div>
                    <div className="bg-white p-10 rounded-2xl border border-slate-100 text-center shadow-sm">
                      <p className="text-xs font-black text-slate-400 mb-4 uppercase">■ 핵심 역량 적합도</p>
                      <p className="text-6xl font-black text-blue-900">86.3</p>
                      <p className="text-base font-bold text-slate-500 mt-4">부분 적합</p>
                    </div>
                    <div className="bg-[#1e293b] p-10 rounded-2xl text-center relative overflow-hidden">
                      <p className="text-xs font-black text-blue-300 mb-4 uppercase tracking-widest">TOTAL FIT SCORE</p>
                      <p className="text-7xl font-black text-white">76.7</p>
                      <div className="mt-5 bg-orange-500 text-white font-black py-2 px-8 rounded-full text-sm inline-block">부분 적합</div>
                    </div>
                  </div>
                  <div className="mt-10 p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                    <p className="text-base text-slate-600 leading-relaxed">
                      <span className="font-black text-navy mr-3">■ 종합 적합도 의견:</span> "B (보통) - 정량적 경험 점수는 '보완필요'이나, ㅇㅇ신약 및 ㅇㅇ 등 핵심 직무 기술(Skill)의 적합도가 매우 높아 실무 성과는 '우수'가 기대됨."
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-navy mb-8 flex items-center">
                    <span className="w-1.5 h-6 bg-orange-500 mr-4 rounded-full"></span> 분석 개요 (Analysis Overview)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-widest">Company / ORG. / Job Info</p>
                      <ul className="text-sm space-y-4 text-slate-700">
                        <li className="flex justify-between border-b border-slate-200 pb-3"><span>• Target Industry</span> <span className="font-bold">ㅇㅇ/바이오</span></li>
                        <li className="flex justify-between border-b border-slate-200 pb-3"><span>• Target Company</span> <span className="font-bold">ㅇㅇ제약</span></li>
                        <li className="flex justify-between border-b border-slate-200 pb-3"><span>• Target Position</span> <span className="font-bold">ㅇㅇ연구</span></li>
                        <li className="flex justify-between border-b border-slate-200 pb-3"><span>• Candidate</span> <span className="font-bold">"김OO (경력 34개월)"</span></li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <p className="text-xs font-bold text-slate-400 mb-3 uppercase">직무 키워드</p>
                        <p className="text-sm text-slate-600 leading-relaxed">ㅇㅇ, ㅇㅇ (ㅇㅇ), Tech Transfer, GMP Validation</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <p className="text-xs font-bold text-slate-400 mb-3 uppercase">채용 사유</p>
                        <p className="text-sm text-slate-600 leading-relaxed">ㅇㅇ ㅇㅇ 기반 ㅇㅇ 파이프라인 확장과 글로벌 기술 수출 가속화를 위해 충원함.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center text-slate-400 text-sm italic font-medium">
              * 가독성을 위해 본문의 텍스트 크기를 전반적으로 상향 조정하였습니다.
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .clip-path-polygon {
          clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
        }
      `}</style>
    </div>
  );
};

export default ATSDetail;
