
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userPrompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `당신은 'AI인사팀(K Prime HR)'의 수석 AI 인사 컨설턴트입니다. 
        K Prime의 철학은 "Operationalizing Complexity(복잡한 로직의 도구화)"입니다.
        당신은 단순히 조언하는 것을 넘어, 구체적인 AIA(AI Agent) 도구들을 추천하고 인사 로직을 설명해야 합니다.
        
        핵심 답변 원칙:
        1. "컨설팅 보고서가 아니라 실행 도구"임을 강조하세요.
        2. 채용, 평가, 보상, 조직관리 등 4가지 카테고리의 12가지 AIA 라인업을 숙지하고 적재적소에 제안하세요.
        3. 답변은 매우 전문적이고(B2B SaaS 톤), 데이터 중심적이어야 합니다.
        4. 어려운 인사 용어는 쉽게 풀어서 설명하되, 로직의 깊이는 유지하세요.
        
        사용 가능한 AIA 도구 예시: 직무 R&R 최적화, 전략적 총보상 설계, AI BEI 면접관, 90일 온보딩 내비게이터 등.`,
        temperature: 0.6,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "현재 시스템 점검 중입니다. 구체적인 도입 문의는 고객센터로 연락 부탁드립니다.";
  }
};
