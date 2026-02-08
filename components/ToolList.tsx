import React from 'react';

interface ToolListProps {
  onBack: () => void;
  onConsult: () => void;
  onActivateDify?: () => void;
}

const ToolList: React.FC<ToolListProps> = ({ onBack, onConsult, onActivateDify }) => {
  const tools = [
    { no: 1, category: '기타 (사용가능)', name: '보고서/자료 요약기', definition: '각종 보고서나 참고자료에 대해 1. 작성자/일시, 2. 목적/취지, 3. 주요 내용, 4. 인사관점 착안사항의 순으로 핵심내용을 정리해줌', oldTime: '20분', aiOutput: '보고서/자료 요약파일', aiTime: '1분', note: '인기' },
    { no: 2, category: '기타 (사용가능)', name: '우리회사 취업규칙/인사규정 챗봇', definition: '회사의 취업규칙과 인사규정을 업로드한 후 다양한 질문을 하면 이에 대해 바로 응답해 주는 챗봇이 생성됨', oldTime: '-', aiOutput: '실시간 챗봇', aiTime: '1분', note: '' },
    { no: 3, category: '채용 (사용가능)', name: '지원자 이력서 정보 취합기', definition: '다양한 양식의 지원자들의 이력서를 업로드하면, 지원자 각종 정보(학력, 경력 등)를 동일 엑셀파일에 각 1줄씩 자동 생성해줌', oldTime: '인당 10분', aiOutput: '지원자 정보 종합파일 (CSV엑셀)', aiTime: '1분', note: '인기' },
    { no: 4, category: '채용 (사용가능)', name: '지원자 직무적합도 ATS 레포트 생성기', definition: '직무 모집요강과 지원자 이력서를 업로드하면, 지원자 개인에 대한 직무 적합도 평가기준별 점수와 채용가구 의견 등 종합 리포트를 자동 제공함', oldTime: '인당 10분', aiOutput: '직무적합도 ATS레포트', aiTime: '2분', note: '인기' },
    { no: 5, category: '채용 (사용가능)', name: '지원자 처우 산정기', definition: '회사의 직급/연봉기준과 지원자 입사지원서를 업로드하면, 자동으로 지원자의 직급연한과 적용가능 연봉액을 계산해줌', oldTime: '건별 1시간', aiOutput: '지원자 경력연한 및 권장연봉 검토 레포트', aiTime: '3분', note: '인기' },
    { no: 6, category: '인력운영 (사용가능)', name: '직무분석/직무기술서 생성기', definition: '현업관리자/인사담당이 직무 업무유형 질문에 맞게 답변을 하고, 회사기준을 업로드하면 자동으로 직무분석 결과 및 직무기술서를 생성함 (성과책임 및 역량모델, 직무평가 포함)', oldTime: '2박3일', aiOutput: '직무분석결과 및 직무기술서', aiTime: '5분', note: '' },
    { no: 7, category: '채용', name: '1차 서류전형 결과보고서 작성기', definition: '직무 모집요강과 지원자 이력서를 업로드하면, 지원자들에 대한 직무 적합도 비교리포트를 자동 정리해줌 (서류전형)', oldTime: '인당 10분', aiOutput: '지원자 서류전형 결과 보고서', aiTime: '3분', note: '인기' },
    { no: 8, category: '채용', name: '면접일정 조율기', definition: '지원자들에게서 받은 면접일정 구글설문 결과를 종합하여 일정을 확정 후, 각 지원자들에게 확정일정을 안내하는 안내문 자동 생성', oldTime: '인당 5~20분', aiOutput: '문자 안내문 파일', aiTime: '1분', note: '' },
    { no: 9, category: '채용', name: '면접평가표 양식 작성기', definition: '직무 모집요강과 지원자 이력서를 업로드하면, 지원자들관련 경력을 요약/비교하고, 확인해야 할 직무/경력관련 면접질문을 도출하며, 이슈/문제점 등을 자동 도출하여 정리해줌', oldTime: '인당 10분', aiOutput: '지원자별 면접평가표', aiTime: '3분', note: '인기' },
    { no: 10, category: '채용', name: '면접결과 종합레포트 작성기', definition: '최종 합불결정 전, 1/2차 면접관별 평가결과(스캔본)를 업로드하면, 의사결정권자에게 제공할 결과레포트를 자동 정리함', oldTime: '건별 20분', aiOutput: '채용건별 면접결과 레포트', aiTime: '3분', note: '' },
    { no: 11, category: '채용', name: '채용합격자 종합 안내문 작성기', definition: '지원자에게 안내할 종합정보 - 축하인사, 입사일자, 준비서류, 입사일 할일, 지원사항, 현업담당자 등 안내이미지 자동 생성', oldTime: '10분 이상', aiOutput: '지원자 안내 자료(친화적 이미지)', aiTime: '2분', note: '인기' },
    { no: 12, category: '채용', name: '고용브랜드 및 직무 제안서 (채용홍보물) 생성기', definition: '채용직무 정보 뿐 아니라 고용브랜드 및 직무/조직에 지원자에게 주는 제공가치를 보다 지원자에게 어필하는 포인트를 제공해줌 (사전 협업작성 양식 제공)', oldTime: '-', aiOutput: '지원자(경력개발)관점/EX 향상을 위한 직접적/조직적 제공 가치 안내자료', aiTime: '3분', note: '' },
    { no: 13, category: '채용', name: '신규입사자 90일 온보딩 운영기', definition: '조직, 직무, 지원자 정보를 업로드하면, 입사 첫날부터 입사 90일까지 일정별 온보딩 미션(조직, 직무이해 절차 및 직무에서 작은 성공미션)을 정리, 해당조직에 제공할 자료를 생성함', oldTime: '건당 40분', aiOutput: '일정별 온보딩 수행 지원자별 상세양식', aiTime: '3분', note: '' },
    { no: 14, category: '인력운영', name: '월별 인원현황 대시보드 추출기', definition: '회사 전체인원 리스트 파일을 업로드하면, 조직별, 성별, 직급별, 직책별 등 각종 통계/현황분석 보고서를 작성해줌', oldTime: '5시간', aiOutput: '전사 인원 대시보드 (파워포인트)', aiTime: '5분', note: '인기' },
    { no: 15, category: '인력운영', name: '승진심의대상자 추출기', definition: '승진심의기준과 전사 인원현황 리스트를 업로드하면, 자동으로 이번 회차 승진심의 대상자를 List up 해줌', oldTime: '1시간', aiOutput: '승진심의 대상자 리스트', aiTime: '3분', note: '' },
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-24 font-['Pretendard']">
      <div className="bg-[#0A192F] py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <button onClick={onBack} className="text-blue-400 font-bold mb-8 hover:text-blue-300 transition-colors flex items-center justify-center mx-auto space-x-2 text-base">
            <span>← 홈으로 돌아가기</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter">
            전체 AI <span className="text-blue-500">도구 리스트</span>
          </h1>
          <p className="text-slate-400 text-xl">인사의 모든 과정을 도구로 해결하는 K Prime의 AIA 엔진 라인업</p>
        </div>
      </div>

      <div className="max-w-[95%] mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[1200px]">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider font-black">
                  <th className="py-6 px-4 text-center border-r border-slate-800 w-12">no.</th>
                  <th className="py-6 px-6 text-left border-r border-slate-800 w-44">인사영역(개발상태)</th>
                  <th className="py-6 px-6 text-left border-r border-slate-800 w-64">AI 앱 상품명</th>
                  <th className="py-6 px-6 text-left border-r border-slate-800">AI 앱 기능 정의</th>
                  <th className="py-6 px-4 text-center border-r border-slate-800 w-32">기존 작업 시간</th>
                  <th className="py-6 px-6 text-left border-r border-slate-800 w-56">업무 자동화 (AI 산출물)</th>
                  <th className="py-6 px-4 text-center border-r border-slate-800 w-28">AI 소요시간</th>
                  <th className="py-6 px-4 text-center">비고</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors group">
                    <td className="py-6 px-4 text-center text-slate-400 font-bold border-r border-slate-100 text-sm">{tool.no}</td>
                    <td className="py-6 px-6 border-r border-slate-100">
                      <span className={`text-[12px] font-black px-3 py-1 rounded-full whitespace-nowrap ${
                        tool.category.includes('사용가능') ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {tool.category}
                      </span>
                    </td>
                    <td className="py-6 px-6 border-r border-slate-100">
                      {tool.no === 4 ? (
                        <button 
                          onClick={() => onActivateDify && onActivateDify()}
                          className="text-left text-base font-black text-blue-600 hover:underline transition-colors"
                        >
                          {tool.name}
                        </button>
                      ) : (
                        <span className="text-base font-black text-navy group-hover:text-blue-600 transition-colors">
                          {tool.name}
                        </span>
                      )}
                    </td>
                    <td className="py-6 px-6 border-r border-slate-100">
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {tool.definition}
                      </p>
                    </td>
                    <td className="py-6 px-4 text-center border-r border-slate-100">
                      <span className="text-sm font-bold text-slate-400">{tool.oldTime}</span>
                    </td>
                    <td className="py-6 px-6 border-r border-slate-100">
                      <p className="text-sm font-bold text-navy leading-tight">
                        {tool.aiOutput}
                      </p>
                    </td>
                    <td className="py-6 px-4 text-center border-r border-slate-100">
                      <span className="text-sm font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">{tool.aiTime}</span>
                    </td>
                    <td className="py-6 px-4 text-center">
                      {tool.note === '인기' ? (
                        <span className="text-xs font-black bg-orange-500 text-white px-3 py-1 rounded italic">HOT</span>
                      ) : (
                        <button 
                          onClick={onConsult}
                          className="opacity-0 group-hover:opacity-100 transition-all text-[11px] font-black text-blue-500 border border-blue-200 px-3 py-1.5 rounded hover:bg-blue-600 hover:text-white"
                        >
                          문의
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-12 bg-slate-50 text-center border-t border-slate-100">
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              위 리스트는 현재 제공 중이거나 곧 업데이트 예정인 핵심 인사 도구들입니다.<br />
              <span className="font-bold text-navy">K Prime HR</span>은 이외에도 조직 관리, 성과 평가, 보상 체계 등 100개 이상의 AIA를 개발하고 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={onConsult}
                className="bg-blue-600 text-white px-12 py-4 rounded-2xl font-black text-xl hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
              >
                기업 전용 AIA 패키지 맞춤 상담
              </button>
              <button 
                onClick={onBack}
                className="bg-white text-navy border border-slate-200 px-12 py-4 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all"
              >
                홈으로 돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolList;