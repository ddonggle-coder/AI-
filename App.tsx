import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIALineup from './components/AIALineup';
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
        return <ATSDetail onBack={() => setView('home')} onConsult={() => setView('consultation')} />;
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
                  <p className="text-slate-400 text-lg">K Prime이 제시하는 혁신적인 해결책</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  <div className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-red-500/20 relative group">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M6 18L18 6M6 6l12 12" strokeWidth={3}/>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold">기존의 실패</h3>
                    </div>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                      <span className="text-red-400 font-bold">비싼 컨설팅</span>은 담당자가 운영을 못 해서 실패하고,<br />
                      <span className="text-red-400 font-bold">저가형 솔루션</span>은 흉내만 내다가 끝납니다.
                    </p>
                    <ul className="space-y-4">
                      {["수천만 원 컨설팅 보고서는 서랍 속으로", "저가 솔루션은 깊이 없는 단순 계산기", "실행은 담당자 혼자 감당해야 하는 현실"].map((item, idx) => (
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
                      <h3 className="text-3xl font-bold">K Prime의 해답</h3>
                    </div>
                    <p className="text-lg text-blue-50 mb-8 leading-relaxed">
                      복잡한 수식은 <span className="font-bold">AI가 처리</span>합니다.<br />
                      당신은 <span className="font-bold">'목표'만 입력</span>하세요. 전문가 수준의 결과물을 드립니다.
                    </p>
                    <ul className="space-y-4">
                      {["컨설팅 수준의 로직을 도구화", "즉시 실행 가능한 결과물 제공", "지속적으로 사용 가능한 살아있는 도구"].map((item, idx) => (
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

            {/* Section: Philosophy (Updated to match sample image) */}
            <section id="philosophy" className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-black text-navy mb-4">서비스 소개</h2>
                  <p className="text-slate-500 text-lg">K Prime HR이 추구하는 철학과 가치, 그리고 당신의 인사 업무를 혁신하는 방법</p>
                </div>

                <div className="text-center mb-20">
                   <h3 className="text-4xl font-black text-navy mb-2">K Prime <span className="text-blue-600">철학</span></h3>
                   <p className="text-slate-400 italic">"우리는 복잡한 것을 단순하게, 전문적인 것을 접근 가능하게 만듭니다"</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {[
                    { title: "Operationalizing Complexity", subtitle: "복잡한 로직의 도구화", icon: "💡", desc: "고급 인사 컨설팅의 복잡한 방법론을 누구나 쉽게 사용할 수 있는 도구로 만듭니다." },
                    { title: "Executable Intelligence", subtitle: "실행 가능한 지능", icon: "⦿", desc: "읽기만 하는 보고서가 아닌, 즉시 실행하고 지속적으로 사용할 수 있는 살아있는 도구를 제공합니다." },
                    { title: "Democratizing Expertise", subtitle: "전문성의 민주화", icon: "👥", desc: "대기업만 누리던 최고 수준의 인사 관리를 모든 기업이 합리적인 비용으로 활용할 수 있게 합니다." }
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
                  <h2 className="text-4xl font-bold text-[#0A192F] mb-4">왜 K Prime인가?</h2>
                  <p className="text-slate-500">고가 컨설팅도, 저가 솔루션도 아닌 제3의 선택</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-center border-separate border-spacing-0 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <thead className="bg-slate-50 text-slate-500 text-base font-bold">
                      <tr>
                        <th className="p-6 border-b border-slate-200">구분</th>
                        <th className="p-6 border-b border-slate-200">고가 컨설팅</th>
                        <th className="p-6 border-b border-slate-200">저가 솔루션</th>
                        <th className="p-6 border-b border-slate-200 bg-blue-50 text-blue-600">AI인사팀</th>
                      </tr>
                    </thead>
                    <tbody className="text-base">
                      {[
                        { label: "비용", old: "3,000만원~1억원", cheap: "월 10만원~30만원", prime: "연 20만원/1인 (또는 단건 3만원)" },
                        { label: "실행 가능성", old: "보고서만 받고 종료", cheap: "단순 계산기 수준", prime: "즉시 실행 가능한 도구" },
                        { label: "전문성", old: "매우 높음", cheap: "기초 수준", prime: "컨설팅 수준의 로직" },
                        { label: "지속성", old: "1회성 프로젝트", cheap: "깊이 없는 단순 반복", prime: "지속 업데이트되는 AIA" },
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
    </div>
  );
};

export default App;