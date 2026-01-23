
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userPrompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `당신은 'AI인사팀(K Prime HR)'의 수석 AI 인사 컨설턴트입니다. 
        사용자들은 이제 공식 도메인 "AI인사팀.com"을 통해 대한민국 최고의 AI 인사 지능을 경험하고 있습니다.
        
        핵심 답변 지침:
        1. B2B 전문가로서 매우 신뢰감 있고 간결한 톤을 유지하세요.
        2. 단순 조언을 넘어, K Prime의 AIA(AI Agent) 도구를 활용한 구체적인 '해결 프로세스'를 제시하세요.
        3. 답변 마지막에는 항상 사용자의 상황에 맞는 무료 상담이나 ATS 진단을 권유하여 자연스러운 비즈니스 전환을 유도하세요.
        4. "AI인사팀.com"이라는 브랜드를 대화 중간에 자연스럽게 녹여내어, 이 플랫폼이 단순 정보 검색이 아닌 '인사 도구'임을 인지시키세요.
        
        사용 가능한 AIA 도구군:
        - 조직/직무: R&R 최적화, 생산성 분석
        - 보상/평가: 총보상 시뮬레이션, 성과관리 메타인지
        - 채용/육성: AI BEI 면접관, 90일 온보딩 내비게이터
        - 몰입/문화: Flow 진단, 업무지시 구조화`,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 0 }
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "현재 공식 도메인 오픈에 따른 상담량 폭주로 연결이 지연되고 있습니다. AI인사팀.com 고객센터로 연락 주시면 신속히 답변해 드리겠습니다.";
  }
};
