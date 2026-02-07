
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIALineup from './components/AIALineup';
import UpcomingAIA from './components/UpcomingAIA';
import AIAgentChat from './components/AIAgentChat';
import Footer from './components/Footer';
import ATSDetail from './components/ATSDetail';
import AIADetail from './components/AIADetail';
import CategoryDetail from './components/CategoryDetail';
import ConsultationForm from './components/ConsultationForm';

export type PageView = 'home' | 'ats-detail' | 'aia-info' | 'category-detail' | 'consultation';

const App: React.FC = () => {
  const [view, setView] = useState<PageView>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const [isDifyActive, setIsDifyActive] = useState(false);
  const [isDifyOpen, setIsDifyOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const navigateToCategory = (id: number) => {
    setSelectedCategoryId(id);
    setView('category-detail');
  };

  const renderContent = () => {
    switch (view) {
      case 'ats-detail':
        return (
          <ATSDetail 
            onBack={() => setView('home')} 
            onConsult={() => setView('consultation')} 
            onActivateDify={() => {
              setIsDifyActive(true);
              setIsDifyOpen(true);
            }}
          />
        );
      case 'aia-info':
        return <AIADetail onBack={() => setView('home')} onConsult={() => setView('consultation')} />;
      case 'category-detail':
        return (
          <CategoryDetail 
            categoryId={selectedCategoryId} 
            onBack={() => setView('home')} 
            onConsult={() => setView('consultation')}
          />
        );
      case 'consultation':
        return <ConsultationForm onBack={() => setView('home')} />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={setView} />
            
            {/* Section: Why it fails */}
            <section className="py-24 bg-[#0A192F] text-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">왜 기존 방식은 <span className="text-blue-400">실패</span>했을까요?</h2>
                  <p className="text-slate-400 text-lg">K Prime이 제시하는 '인사의 도구화' 솔루션</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  <div className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-red-500/20 relative group">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M6 18L18 6M6 6l12 12" strokeWidth={3}/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold">기존의 한계</h3>
                    </div>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                      <span className="text-red-400 font-bold">고가 컨설팅</span>은 보고서 작성 후 실행 단계에서 멈추고,<br />
                      <span className="text-red-400 font-bold">범용 솔루션</span>은 우리 회사만의 특수성을 담지 못합니다.
                    </p>
                    <ul className="space-y-4">
                      {["현실과 동떨어진 수천만 원짜리 보고서", "인사 로직이 없는 단순 데이터 기록기", "결국 담당자의 수작업으로 돌아가는 운영"].map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-slate-400 bg-white/5 p-4 rounded-xl">
                          <span className="text-red-500 font-bold">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-10 rounded-[2.5rem] bg-blue-600 shadow-2xl shadow-blue-500/20 relative">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeWidth={3}/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold">AI인사팀의 해답</h3>
                    </div>
                    <p className="text-lg text-blue-50 mb-8 leading-relaxed">
                      복잡한 HR 로직은 <span className="font-bold">AIA가 자동화</span>합니다.<br />
                      당신은 <span className="font-bold">최종 의사결정</span>에만 집중하세요. 전문가의 지능을 도구로 드립니다.
                    </p>
                    <ul className="space-y-4">
                      {["검증된 컨설팅 방법론의 알고리즘화", "즉시 실행 가능한 실무 중심 리포트", "조직 성장에 맞춰 진화하는 다이내믹 엔진"].map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-white bg-white/10 p-4 rounded-xl">
                          <span className="font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <AIALineup onNavigateCategory={navigateToCategory} />

            <UpcomingAIA />

            {/* Section: Philosophy */}
            <section id="philosophy" className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-black text-navy mb-4">서비스 소개</h2>
                  <p className="text-slate-500 text-lg">K Prime HR이 추구하는 전문성의 민주화</p>
                </div>

                <div className="text-center mb-20">
                   <h3 className="text-4xl font-black text-navy mb-2">K Prime <span className="text-blue-600">철학</span></h3>
                   <p className="text-slate-400 italic">"복잡함을 단순함으로, 전문성을 일상으로"</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {[
                    { title: "Operationalizing Complexity", subtitle: "복잡한 로직의 도구화", icon: "💡", desc: "고급 인사 컨설팅의 블랙박스를 걷어내고 누구나 버튼 하나로 실행 가능한 디지털 도구를 만듭니다." },
                    { title: "Executable Intelligence", subtitle: "실행 가능한 지능", icon: "⦿", desc: "단순한 챗봇이 아닙니다. 인사 규정, 보상 테이블, 채용 가이드를 직접 생성하는 실무형 지능입니다." },
                    { title: "Democratizing Expertise", subtitle: "전문성의 민주화", icon: "👥", desc: "대기업 인사팀만 누리던 최고 수준의 HR 인프라를 합리적인 비용으로 모든 기업에 보급합니다." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all text-center group">
                      <div className="w-20 h-20 bg-slate-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      <h4 className="text-2xl font-black text-navy mb-2">{item.title}</h4>
                      <p className="text-blue-600 font-bold text-sm mb-6">{item.subtitle}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-[#0A192F] mb-4">왜 AI인사팀인가?</h2>
                  <p className="text-slate-500">기존의 비효율을 해결하는 가장 스마트한 선택</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-center border-separate border-spacing-0 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <thead className="bg-slate-50 text-slate-500 text-base font-bold">
                      <tr>
                        <th className="p-6 border-b border-slate-200">구분</th>
                        <th className="p-6 border-b border-slate-200">고가 컨설팅</th>
                        <th className="p-6 border-b border-slate-200">범용 SaaS</th>
                        <th className="p-6 border-b border-slate-200 bg-blue-50 text-blue-600">AI인사팀.com</th>
                      </tr>
                    </thead>
                    <tbody className="text-base">
                      {[
                        { label: "비용", old: "3,000만원~1억원", cheap: "월 수십만 원", prime: "전체AIA 사용 시 20만원/년,1인 또는 단일AIA 사용 시 각 4만원/년,1인" },
                        { label: "실행력", old: "보고서 제공 후 종료", cheap: "기능적 툴 제공", prime: "인사 로직 기반의 자동 실행" },
                        { label: "전문성", old: "컨설턴트 역량 의존", cheap: "기초 기능 위주", prime: "표준화된 전문가 지능(AIA)" },
                        { label: "유지보수", old: "추가 비용 발생", cheap: "업데이트 제한적", prime: "성장에 따른 실시간 진화" },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-6 border-b border-slate-100 font-bold text-slate-700">{row.label}</td>
                          <td className="p-6 border-b border-slate-100 text-slate-500">{row.old}</td>
                          <td className="p-6 border-b border-slate-100 text-slate-500">{row.cheap}</td>
                          <td className="p-6 border-b border-slate-100 font-bold text-blue-700 bg-blue-50/30">{row.prime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <AIAgentChat />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header onNavigate={setView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setView} />

      {/* Global Dify Chatbot Widget */}
      {isDifyActive && (
        <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end">
          {isDifyOpen && (
            <div className="mb-4 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden w-[90vw] md:w-[450px] h-[700px] flex flex-col animate-[fadeIn_0.3s_ease-out]">
              <div className="bg-navy p-4 text-white flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-bold text-sm">AIA 정밀 진단 (테스트용)</span>
                </div>
                <button 
                  onClick={() => setIsDifyOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 w-full h-full bg-white">
                <iframe
                  src="https://udify.app/workflow/0Vtq6IJGl7u76aIi"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  title="Dify Workflow"
                ></iframe>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsDifyOpen(!isDifyOpen)}
            className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 active:scale-95 transition-all animate-bounce"
            title="AIA 진단 도구"
          >
            {isDifyOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <span className="leading-none">🤖</span>
            )}
          </button>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default App;
