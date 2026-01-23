import React, { useState } from 'react';

interface ConsultationFormProps {
  onBack: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    interest: 'all',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">✓</div>
          <h2 className="text-4xl font-black text-navy mb-4">신청이 완료되었습니다!</h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            담당 컨설턴트가 24시간 이내에 (영업일 기준) <br />
            기재해주신 연락처로 상담을 도와드리겠습니다.
          </p>
          <button onClick={onBack} className="bg-navy text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">홈으로 돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Sample Report Preview (Based on provided images) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="sticky top-32">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-navy mb-4 italic">Sample Result Report</h2>
                <p className="text-slate-500">AIA가 생성하는 실제 진단 리포트 예시입니다. (익명 처리됨)</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden max-h-[800px] overflow-y-auto custom-scrollbar p-8 space-y-12">
                
                {/* PDF Page 1 Simulation: Summary */}
                <div className="border-b border-slate-100 pb-12">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <h3 className="text-2xl font-black text-blue-900 mb-1">K Prime Job Fit Report</h3>
                      <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">ATS-S/D 202542 | OO제약(Anonymized)</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400">김OO 지원자</p>
                      <p className="text-[10px] text-slate-300">2025-12-15</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-8">
                    <h4 className="text-sm font-bold text-navy mb-6 flex items-center">
                      <span className="mr-2">📊</span> Scorecard Summary
                    </h4>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="bg-white p-5 rounded-xl border border-slate-100 text-center shadow-sm">
                        <p className="text-[10px] font-bold text-slate-400 mb-1">직무 경험 적합도</p>
                        <p className="text-2xl font-black text-blue-600">67.1</p>
                        <p className="text-[10px] text-slate-400 mt-1">대체로 부적합</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl border border-slate-100 text-center shadow-sm">
                        <p className="text-[10px] font-bold text-slate-400 mb-1">핵심 역량 적합도</p>
                        <p className="text-2xl font-black text-blue-600">86.3</p>
                        <p className="text-[10px] text-slate-400 mt-1">부분 적합</p>
                      </div>
                      <div className="bg-blue-900 p-5 rounded-xl text-center shadow-lg transform scale-110">
                        <p className="text-[10px] font-bold text-blue-200 mb-1">TOTAL FIT SCORE</p>
                        <p className="text-3xl font-black text-white">76.7</p>
                        <div className="mt-2 bg-orange-500 text-[10px] font-black py-0.5 rounded-full text-white">부분 적합</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 mb-2">Company / Job</p>
                      <ul className="text-[11px] space-y-1 text-slate-600">
                        <li>• Industry: Pharmaceuticals / Bio</li>
                        <li>• Position: Formulation Researcher</li>
                        <li>• Candidate: 김OO (경력 34개월)</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 mb-2">Job Keywords</p>
                      <div className="flex flex-wrap gap-1">
                        {['Modified New Drug', 'Smart Film', 'Tech Transfer', 'GMP'].map(k => (
                          <span key={k} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[9px] text-slate-500">{k}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* PDF Page 2 Simulation: Comparison Graph */}
                <div className="border-b border-slate-100 pb-12">
                  <h4 className="text-sm font-bold text-navy mb-8 flex items-center">
                    <span className="mr-2">📈</span> Job Experience Fit (Score Comparison)
                  </h4>
                  <div className="space-y-6">
                    {[
                      { label: "개량신약 연구", req: 100, cand: 80 },
                      { label: "ODF/DDS 기술", req: 95, cand: 51 },
                      { label: "분석/Validation", req: 90, cand: 72 },
                      { label: "기술이전(Tech Transfer)", req: 85, cand: 61 },
                    ].map((bar, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[11px] font-bold">
                          <span className="text-slate-600">{bar.label}</span>
                          <span className="text-blue-600">요구 {bar.req} / 지원자 {bar.cand}</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-slate-300" style={{ width: `${bar.req}%` }}></div>
                          <div className="absolute top-0 left-0 h-full bg-blue-600 z-10" style={{ width: `${bar.cand}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PDF Page 3 Simulation: Feedback */}
                <div>
                  <h4 className="text-sm font-bold text-navy mb-6 flex items-center">
                    <span className="mr-2">💡</span> Feedback & Advice
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl">
                      <p className="text-xs font-black text-blue-700 mb-3 flex items-center">
                        <span className="mr-2">✨</span> Strengths
                      </p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        "Strategic Fit: 특정 약물 전달 기술(ODT)에 대한 직접적인 연구 경험은 타 지원자와 차별화되는 강력한 무기입니다."
                      </p>
                    </div>
                    <div className="p-5 bg-orange-50 border border-orange-100 rounded-2xl">
                      <p className="text-xs font-black text-orange-700 mb-3 flex items-center">
                        <span className="mr-2">⚠️</span> Weakness / Advice
                      </p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        "Career Gap Risk: 2년의 경력 단절로 인한 최신 GMP 규정 업데이트 여부를 면접 시 검증할 필요가 있습니다."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 text-center border-t border-slate-50">
                  <p className="text-[10px] text-slate-300 font-bold uppercase tracking-tighter">© K Prime HR - Global Big Data & AI Analysis System</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Consultation Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
              <div className="bg-[#0A192F] p-10 text-white text-center">
                <h1 className="text-3xl font-black mb-3">무료 도입 상담</h1>
                <p className="text-blue-200 text-sm">리포트와 동일한 수준의 정밀 진단을 도와드립니다.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-10 space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy ml-1">성함 *</label>
                  <input 
                    required type="text" value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                    placeholder="홍길동"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy ml-1">회사명 *</label>
                  <input 
                    required type="text" value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                    placeholder="(주)K-Prime"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-navy ml-1">이메일 *</label>
                    <input 
                      required type="email" value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                      placeholder="contact@company.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-navy ml-1">연락처 *</label>
                    <input 
                      required type="tel" value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy ml-1">관심 분야</label>
                  <select 
                    value={formData.interest}
                    onChange={e => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm appearance-none"
                  >
                    <option value="all">전체 AIA 도입 문의</option>
                    <option value="ats">무료 ATS 진단</option>
                    <option value="org">조직/직무 분석</option>
                    <option value="comp">보상/성과 체계</option>
                    <option value="rec">채용/온보딩</option>
                    <option value="flow">몰입/조직 문화</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-navy ml-1">추가 문의사항</label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                    placeholder="리포트 샘플에 대해 궁금한 점이나 도입 목적을 알려주세요."
                  />
                </div>

                <div className="flex items-center space-x-2 py-2">
                  <input type="checkbox" required id="privacy" className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer" />
                  <label htmlFor="privacy" className="text-[10px] text-slate-400 cursor-pointer">개인정보 수집 및 이용에 동의합니다. (상담용) *</label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                >
                  상담 신청 완료하기
                </button>
                <button 
                  type="button"
                  onClick={onBack}
                  className="w-full text-slate-400 font-bold text-xs hover:text-slate-600 transition-colors"
                >
                  취소하고 이전 페이지로
                </button>
              </form>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 shadow-sm">💡</div>
              <p className="text-[11px] text-blue-800 leading-relaxed font-medium">
                <strong>상담 안내:</strong><br />
                신청하신 정보는 100% 보안이 보장되며, K Prime의 수석 컨설턴트가 직접 귀사의 상황을 분석한 기초 가이드를 준비하여 연락드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
  );
};

export default ConsultationForm;