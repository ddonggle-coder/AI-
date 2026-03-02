### 웹 앱 구조 정의서 (AI인사팀.com)

이 문서는 코딩 에이전트가 “어떤 화면/문구/기능을 수정해야 할 때, 어느 파일을 손대야 하는지”를 빠르게 파악하도록 돕기 위한 구조 정의서입니다.

---

## 1. 진입 및 렌더링 구조

- **엔트리 HTML**
  - **파일**: `index.html`
  - **역할**
    - `<div id="root"></div>`: React 앱이 마운트되는 루트 컨테이너
    - Tailwind CDN 및 폰트 로딩
    - 전역 `body` 스타일, 브랜드 컬러 CSS 정의
    - `importmap`으로 `react`, `react-dom`, `@google/genai` 외부 의존성 매핑
    - `index.css` 전역 스타일 로드
    - React 엔트리 스크립트: `<script type="module" src="/index.tsx"></script>`

- **React 엔트리**
  - **파일**: `index.tsx`
  - **역할**
    - `ReactDOM.createRoot(document.getElementById('root'))`로 `App` 컴포넌트를 `#root`에 마운트
    - 전역 `StrictMode` 활성화
  - **수정 가이드**
    - 전역 상태 관리, 에러 경계, 전역 레이아웃 래퍼 추가 시 이 파일에서 `App`을 감싸는 부분 수정

---

## 2. 전역 레이아웃 & 페이지 전환 구조

- **루트 컴포넌트**
  - **파일**: `App.tsx`
  - **주요 상태**
    - `PageView`: `'home' | 'ats-detail' | 'aia-info' | 'category-detail' | 'consultation' | 'tool-list'`
    - `view`: 현재 화면 종류 (`PageView`)
    - `selectedCategoryId`: `AIALineup` → `CategoryDetail`로 넘어가는 카테고리 ID
    - `isDifyActive`, `isDifyOpen`: 하단 Dify ATS 진단 iframe 위젯 활성 상태
    - `showFreeTrial`: 무료 체험 모달 노출 여부
  - **전역 레이아웃**
    - 상단: `Header onNavigate={setView}`
    - 본문: `renderContent()`가 `view` 값에 따라 적절한 화면 컴포넌트 렌더
    - 하단: `Header`가 한 번 더 렌더링된 뒤 `Footer` 렌더링
  - **뷰 전환 함수**
    - `setView('home' | 'ats-detail' | 'aia-info' | 'category-detail' | 'consultation' | 'tool-list')`
    - `navigateToCategory(id: number)`: 카테고리 선택 후 `category-detail`로 이동
  - **전역 부가 기능**
    - `view` 변경 시 `window.scrollTo(0, 0)`
    - `localStorage`의 `hideFreeTrialUntil`을 활용한 무료 체험 모달 노출 제어
    - `isDifyActive`/`isDifyOpen`에 따라 우측 하단 Dify iframe 챗봇 위젯 표시

- **`renderContent()`에 따른 뷰 매핑**
  - `'ats-detail'` → `ATSDetail`
  - `'aia-info'` → `AIADetail`
  - `'category-detail'` → `CategoryDetail`
  - `'consultation'` → `ConsultationForm`
  - `'tool-list'` → `ToolList`
  - `'home'`(기본) → 랜딩 페이지 구성:
    - `Hero`
    - “왜 기존 방식은 실패했을까요?” 섹션 (`App.tsx` 내)
    - `AIALineup`
    - `UpcomingAIA`
    - “서비스 소개 / K Prime 철학 / 3개 카드” 섹션 (`id="philosophy"`, `App.tsx` 내)
    - “왜 AI인사팀인가?” 비교 표 섹션 (`App.tsx` 내)
    - `AIAgentChat`

- **수정 가이드 (전역/레이아웃/라우팅 관련)**
  - **새 뷰(페이지) 추가**
    - `PageView` 타입에 새 문자열 추가
    - `renderContent()`의 `switch`문에 해당 뷰 `case` 추가
    - `Header` 등에서 `onNavigate('새뷰이름')` 버튼/메뉴 추가
  - **라우터 도입**
    - 현재는 내부 state만 사용하므로 모든 라우팅 관련 코드는 `App.tsx` 중심
    - 라우터 도입 시 `App`를 라우터로 감싸고 각 case를 `Route`로 분리

---

## 3. 상단/하단 공통 영역

### 3.1 헤더 (`Header.tsx`)

- **파일**: `components/Header.tsx`
- **역할**
  - 고정 상단 내비게이션 바
  - 로고 / 서비스명 / 상단 네비 메뉴 / 모바일 메뉴 / “무료 도입 상담” 버튼
  - `onNavigate(view: PageView)`를 통해 상위 `App`의 `view` 변경
- **주요 요소**
  - `navItems`:
    - `'홈' → 'home'`
    - `'HR AIA란? → 'aia-info'`
    - `'회사철학' → '#philosophy'`(스크롤 이동)
    - `'전체 AI도구 리스트' → 'tool-list'`
- **수정 포인트**
  - 상단 메뉴 추가/삭제/텍스트 변경 → `navItems` 수정
  - 회사철학 섹션 앵커 이동 → `id="philosophy"` 유지 필요

### 3.2 푸터 (`Footer.tsx`)

- **파일**: `components/Footer.tsx`
- **역할**
  - 회사 소개, AIA 라인업 간단 메뉴, Company 메뉴, 저작권/정책 링크
  - 일부 버튼에서 `onNavigate(view)` 호출
- **수정 포인트**
  - Footer 카피 변경 → 해당 `p` 텍스트 수정
  - Footer 버튼 클릭 시 이동 페이지 변경 → `onNavigate` 인자 수정

---

## 4. 주요 화면(뷰) 정의 및 파일 매핑

### 4.1 홈 뷰 (`view === 'home'`)

- **구성 파일**
  - `App.tsx` (홈 뷰 섹션 일부 직접 포함)
  - `components/Hero.tsx`
  - `components/AIALineup.tsx`
  - `components/UpcomingAIA.tsx`
  - `components/AIAgentChat.tsx`

- **섹션별 책임**
  - **히어로 영역**
    - **파일**: `components/Hero.tsx`
    - 메인 타이틀/백그라운드 이미지/CTA 버튼
    - “무료 ATS진단 확인하기” → `onNavigate('ats-detail')`
    - “전체 AIA 라인업” → `id="lineup"` 섹션으로 스크롤
  - **“왜 기존 방식은 실패했을까요?” 섹션**
    - **파일**: `App.tsx`
    - 기존 한계 vs AI인사팀 해답, 두 개 컬럼 카드
  - **AIA 라인업 섹션**
    - **파일**: `components/AIALineup.tsx`
    - 카테고리 탭과 각 카테고리별 3개 도구 카드
    - “자세히 보기” → `onNavigateCategory(activeTab)` → `CategoryDetail`
  - **Upcoming AIA (로드맵)**
    - **파일**: `components/UpcomingAIA.tsx`
  - **Philosophy / 서비스 소개 섹션**
    - **파일**: `App.tsx` (`section id="philosophy"`)
  - **“왜 AI인사팀인가?” 비교표**
    - **파일**: `App.tsx`
  - **AI Agent Chat 데모**
    - **파일**: `components/AIAgentChat.tsx`

### 4.2 ATS 상세/진단 뷰 (`view === 'ats-detail'`)

- **파일**: `components/ATSDetail.tsx`
- **역할**
  - ATS 진단 소개/케이스 스터디, 후보자 비교, 정량 분석 리포트 UI
  - `onBack`, `onConsult`, `onActivateDify` props 사용
  - “개인별 적합도 상세결과 보기” → 내부 시뮬레이션 리포트
  - “개인별 적합도 진단하기(테스트용)” → `onActivateDify()` 호출

### 4.3 HR AIA 소개 뷰 (`view === 'aia-info'`)

- **파일**: `components/AIADetail.tsx`
- **역할**
  - HR AIA 개념, 솔루션 구성(AIA Shop / Micro-Consulting / Dynamic Engine), Bottom-up 방식 설명

### 4.4 카테고리 상세 뷰 (`view === 'category-detail'`)

- **파일**: `components/CategoryDetail.tsx`
- **입력**
  - `categoryId`: `AIALineup`에서 선택된 카테고리 ID
  - `onBack`: 라인업(홈)으로 돌아가기
  - `onConsult`: 상담 폼으로 이동
- **역할**
  - 선택된 카테고리 하나의 상세 소개 및 도구 카드

### 4.5 상담 폼 뷰 (`view === 'consultation'`)

- **파일**: `components/ConsultationForm.tsx`
- **역할**
  - 무료 도입 상담 신청 폼 및 완료 화면

### 4.6 전체 AI 도구 리스트 뷰 (`view === 'tool-list'`)

- **파일**: `components/ToolList.tsx`
- **입력**
  - `onBack`, `onConsult`, `onActivateDify`
- **역할**
  - 전체 AIA 도구를 테이블로 나열

---

## 5. 모달 및 전역 위젯

### 5.1 무료 체험 모달

- **파일**: `components/FreeTrialModal.tsx`
- **연결**: `App.tsx`에서 `showFreeTrial` 상태에 따라 전역 렌더

### 5.2 Dify ATS 진단 위젯

- **위치**: `App.tsx` 하단 (`{isDifyActive && ...}`)
- **역할**: 우측 하단 고정 버튼 + 팝업 패널 내부 iframe (`https://udify.app/...`)

---

## 6. “무엇을 어디에서 수정할지” 요약 매핑표

- **랜딩 메인 캐치프레이즈 / 큰 히어로 이미지** → `components/Hero.tsx`
- **상단 네비게이션 메뉴 항목/동작** → `components/Header.tsx`
- **홈 화면의 “왜 기존 방식은 실패했을까요?” 섹션** → `App.tsx` (home 뷰 내부 섹션)
- **홈 화면의 “서비스 소개 / K Prime 철학 / 3개 카드”** → `App.tsx` (`id="philosophy"`)
- **홈 화면의 “왜 AI인사팀인가?” 비교 표** → `App.tsx`
- **AIA 카테고리 및 도구 라인업 카드** → `components/AIALineup.tsx`
- **각 카테고리 상세 소개 화면** → `components/CategoryDetail.tsx`
- **ATS 진단 소개 및 케이스 리포트 화면** → `components/ATSDetail.tsx`
- **HR AIA 개념 소개/철학 상세 페이지** → `components/AIADetail.tsx`
- **무료 도입 상담 폼 및 완료 화면** → `components/ConsultationForm.tsx`
- **전체 AI 도구 리스트 테이블** → `components/ToolList.tsx`
- **무료 체험 모달** → `components/FreeTrialModal.tsx` + `App.tsx` 모달 로직
- **AI 챗봇 데모 UI/메시지 흐름** → `components/AIAgentChat.tsx`
