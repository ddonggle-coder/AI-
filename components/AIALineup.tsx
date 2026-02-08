
import React, { useState } from 'react';

interface AIALineupProps {
  onNavigateCategory: (id: number) => void;
}

export const CATEGORIES = [
  {
    id: 0,
    name: "조직 진단 & 직무 관리",
    icon: "🏢",
    desc: "조직 구조를 최적화하고 효율적인 팀 운영을 위한 전문 도구입니다.",
    tools: [
      { title: "조직분석/직무 재분류", question: "적정 인원과 직무 체계가 고민인가요?", desc: "성과책임 정합성 감사, 상-하위 역할 중복 분석, 조직 계층 축소 시뮬레이션", highlight: "데이터로 보니 당신 자리는 팀원과 하는 일이 똑같습니다", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" },
      { title: "가변형 직무설계", question: "직무의 가치를 정확히 측정하고 싶나요?", desc: "하는 일을 입력하면 직무기술서와 보상수준을 즉시 정립해 드립니다", highlight: "어려운 일을 맡으면 직무 등급과 보상이 즉시 오릅니다", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" },
      { title: "생산성 분석", question: "우리 조직의 효율성을 객관적으로 측정하고 싶나요?", desc: "HR ROI(인건비 효율성) 분석, 적정 인원(TO) 예측", highlight: "우리 조직은 인당 생산성이 15% 올랐음을 증명합니다", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: 1,
    name: "보상 설계 & 평가 공정성",
    icon: "💰",
    desc: "공정하고 경쟁력 있는 보상 체계를 구축합니다.",
    tools: [
      { title: "총보상 설계", question: "최적의 연봉 재원을 배분하고 싶나요?", desc: "재무 기반 인건비 한계 설정, 개인별 역량급 자동 계산", highlight: "재무 지표와 연동된 실시간 보상 시뮬레이션을 제공합니다", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" },
      { title: "프로젝트 기여도", question: "누가 실제로 성과에 기여했나요?", desc: "프로젝트 가치 측정, 난이도 기반 기여도 배분", highlight: "단순 근태가 아닌 업무 난이도 기반의 기여도를 산출합니다", img: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&w=800&q=80" },
      { title: "성과관리 메타인지", question: "평가가 공정한지 확인이 필요한가요?", desc: "평가 관대화/편향 탐지, 전략 정렬도 분석", highlight: "평가자의 편향을 AI가 탐지하여 신뢰도를 높입니다", img: "https://images.unsplash.com/photo-1454165833767-027ffea9e78a?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: 2,
    name: "채용 & 육성",
    icon: "👥",
    desc: "최적의 인재를 효율적으로 확보하고 성장시킵니다.",
    tools: [
      { title: "AI 면접관", question: "답변 속 숨겨진 진실을 파악하고 싶나요?", desc: "STAR 기법 답변 분석, 허위 진술 탐지 꼬리 질문 생성", highlight: "면접관의 주관을 배제하고 답변을 정량화합니다", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" },
      { title: "온보딩 내비게이터", question: "신입이 90일 내에 적응하게 돕고 싶나요?", desc: "시기별 미션 자동 배달, 결과물 품질 분석", highlight: "초기 90일의 경험이 인재의 근속을 결정합니다", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" },
      { title: "커리어 내비게이션", question: "성장 경로를 스스로 설계하게 하고 싶나요?", desc: "직무 적합도 진단, 희망 직무 Gap 분석", highlight: "직원의 욕구와 회사의 필요를 데이터로 매칭합니다", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: 3,
    name: "몰입(Flow) & 일하는 방식",
    icon: "⚙️",
    desc: "구성원의 몰입도를 높여 생산적인 문화를 만듭니다.",
    tools: [
      { title: "Flow 진단", question: "왜 몰입하지 못하는지 아시나요?", desc: "업무 난이도 vs 역량 비대칭 분석, 몰입 저해 요인 규명", highlight: "최적의 몰입 상태를 위한 균형점을 제안합니다", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80" },
      { title: "Flow 조직관리", question: "개별 성향에 맞는 관리를 하고 싶나요?", desc: "개인별 Flow 9-Grid 매핑, 잡 크래프팅 가이드", highlight: "일률적인 관리가 아닌 맞춤형 가이드를 제공합니다", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" },
      { title: "업무지시 최적화", question: "지시가 명확하게 전달되고 있나요?", desc: "구두 지시를 구조화된 지시서로 자동 변환", highlight: "모호한 지시를 실행 가능한 태스크로 재구조화합니다", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" }
    ]
  }
];

const AIALineup: React.FC<AIALineupProps> = ({ onNavigateCategory }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="lineup" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-navy mb-4 italic uppercase">인사기능별 AIA</h2>
          <p className="text-slate-500 text-xl font-medium">12가지 전문 AI 도구로 채용, 평가, 보상, 조직 관리의 모든 영역을 전문가 수준으로 자동화하세요</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-5 rounded-2xl text-base font-bold flex items-center space-x-3 transition-all ${
                activeTab === cat.id 
                  ? 'bg-blue-600 text-white shadow-2xl shadow-blue-500/30 translate-y-[-2px]' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CATEGORIES[activeTab].tools.map((tool, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
              <div className="h-56 overflow-hidden bg-slate-100">
                 <img 
                    src={tool.img} 
                    alt={tool.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80";
                    }}
                 />
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-black text-navy mb-3">{tool.title}</h4>
                <p className="text-blue-600 text-sm font-bold mb-5 italic">"{tool.question}"</p>
                <p className="text-slate-500 text-base leading-relaxed mb-10 min-h-[4rem]">{tool.desc}</p>
                <button 
                  onClick={() => onNavigateCategory(activeTab)}
                  className="w-full py-4.5 bg-slate-50 text-navy border border-slate-200 rounded-2xl font-black text-base hover:bg-navy hover:text-white transition-all shadow-sm"
                >
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIALineup;
