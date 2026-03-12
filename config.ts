/**
 * K Prime AI인사팀 - n8n 연동 설정
 * 납품 전 아래 URL들을 실제 n8n Webhook URL로 교체하세요.
 */
const config = {
    n8n: {
      // B02 · 지원자 직무적합도 ATS 레포트 생성기
      atsWebhookUrl: 'https://aihrteam.app.n8n.cloud/webhook/ats-api',
  
      // 추후 다른 n8n 워크플로우 추가 시 여기에
      // reportSummaryUrl: 'https://your-n8n.com/webhook/report-summary',
    },
  };
  
  export default config;