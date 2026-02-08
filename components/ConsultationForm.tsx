
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
          <p className="text-slate-500 text-xl mb-10 leading-relaxed font-medium">
            담당 컨설턴트가 24시간 이내에 (영업일 기준) <br />
            기재해주신 연락처로 상담을 도와드리겠습니다.
          </p>
          <button onClick={onBack} className="bg-navy text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl">홈으로 돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Sample Report Preview */}
          <div className="lg:col-span-7 space-y-12">
            <div className="sticky top-32">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-navy mb-4 italic">Sample Result Report</h2>
                <p className="text-slate-500 text-lg">AIA가 생성하는 실제 진단 리포트 예시입니다. (익명 처리됨)</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden max-h-[850px] overflow-y-auto custom-scrollbar p-10 space-y-12">
                
                {/* PDF Page 1 Simulation: Summary */}
                <div className="border-b border-slate-100 pb-12">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <h3 className="text-2xl font-black text-blue-900 mb-1">K Prime Job Fit Report</h3>
                      <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">ATS-S/D 202542 | ㅇㅇ제약</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-400">김OO 지원자</p>
                      <p className="text-xs text-slate-300">2025-12-15</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-8">
                    <h4 className="text-base font-bold text-navy mb-6 flex items-center">
                      <span className="mr-3 text-xl">📊</span> Scorecard Summary
                    </h4>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm">
                        <p className="text-xs font-bold text-slate-400 mb-2 uppercase">직무 경험</p>
                        <p className="text-3xl font-black text-blue-600">67.1</p>
                        <p className="text-xs text-slate-400 mt-2">부적합</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm">
                        <p className="text-xs font-bold text-slate-400 mb-2 uppercase">역량 적합</p>
                        <p className="text-3xl font-black text-blue-600">86.3</p>
                        <p className="text-xs text-slate-400 mt-2">부분 적합</p>
                      </div>
                      <div className="bg-blue-900 p-6 rounded-xl text-center shadow-lg transform scale-110">
                        <p className="text-[10px] font-bold text-blue-200 mb-2 uppercase">TOTAL FIT</p>
                        <p className="text-4xl font-black text-white">76.7</p>
                        <div className="mt-2 bg-orange-500 text-[10px] font-black py-0.5 rounded-full text-white uppercase px-2">PARTIAL</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">Company / Job</p>
                      <ul className="text-sm space-y-2 text-slate-600">
                        <li>• Industry: ㅇㅇ/바이오</li>
                        <li>• Position: ㅇㅇ연구</li>
                        <li>• Candidate: 김OO (34개월)</li>
                      </ul>
                    </div>
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">Job Keywords</p>
                      <div className="flex flex-wrap gap-2">
                        {['ㅇㅇ', 'GMP', '연구', 'Analysis'].map(k => (
                          <span key={k} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-500">{k}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* PDF Page 2 Simulation: Comparison Graph */}
                <div className="border-b border-slate-100 pb-12">
                  <h4 className="text-base font-bold text-navy mb-8 flex items-center">
                    <span className="mr-3 text-xl">📈</span> Score Comparison Analysis
                  </h4>
                  <div className="space-y-6">
                    {[
                      { label: "ㅇㅇ 연구", req: 100, cand: 80 },
                      { label: "분석/Validation", req: 90, cand: 72 },
                    ].map((bar, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex justify-between text-sm font-bold">
                          <span className="text-slate-600">{bar.label}</span>
                          <span className="text-blue-600">요구 {bar.req} / 지원자 {bar.cand}</span>
                        </div>
                        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-slate-300" style={{ width: `${bar.req}%` }}></div>
                          <div className="absolute top-0 left-0 h-full bg-blue-600 z-10" style={{ width: `${bar.cand}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 text-center border-t border-slate-50">
                  <p className="text-xs text-slate-300 font-bold uppercase tracking-widest">© K Prime HR - Global Big Data System</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Consultation Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
              <div className="bg-[#0A192F] p-10 text-white text-center">
                <h1 className="text-3xl font-black mb-3 italic">무료 도입 상담</h1>
                <p className="text-blue-200 text-base font-medium">리포트와 동일한 수준의 정밀 진단을 도와드립니다.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-10 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy ml-1">성함 *</label>
                  <input 
                    required type="text" value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base"
                    placeholder="홍길동"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy ml-1">회사명 *</label>
                  <input 
                    required type="text" value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base"
                    placeholder="(주)K-Prime"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-1">이메일 *</label>
                    <input 
                      required type="email" value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base"
                      placeholder="contact@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-1">연락처 *</label>
                    <input 
                      required type="tel" value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy ml-1">관심 분야</label>
                  <select 
                    value={formData.interest}
                    onChange={e => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base appearance-none cursor-pointer font-medium"
                  >
                    <option value="all">전체 AIA 도입 문의</option>
                    <option value="ats">무료 ATS 진단</option>
                    <option value="org">조직/직무 분석</option>
                    <option value="comp">보상/성과 체계</option>
                    <option value="rec">채용/온보딩</option>
                    <option value="flow">몰입/조직 문화</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy ml-1">추가 문의사항</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base"
                    placeholder="궁금한 점이나 도입 목적을 알려주세요."
                  />
                </div>

                <div className="flex items-center space-x-3 py-2">
                  <input type="checkbox" required id="privacy" className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer" />
                  <label htmlFor="privacy" className="text-xs text-slate-400 cursor-pointer font-medium">개인정보 수집 및 이용에 동의합니다. (상담용) *</label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20 active:scale-95"
                >
                  상담 신청 완료하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
  );
};

export default ConsultationForm;
