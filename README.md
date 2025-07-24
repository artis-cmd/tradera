# Turn Trader Clone

Turn Trader의 Study 페이지를 완벽하게 클론한 Next.js 프로젝트입니다.

## 프로젝트 개요

이 프로젝트는 Turn Trader의 Study 페이지를 Next.js와 TypeScript로 구현한 클론 프로젝트입니다. 실제 웹사이트의 디자인과 기능을 완벽하게 재현했습니다.

## 주요 기능

- **로그인 시스템**: 테스트 계정 (test@test.com / password)을 통한 인증
- **5개 학습 카테고리**:
  - Basics (기초)
  - Market (시장)
  - Strategy (전략)
  - Risk (위험관리)
  - Psychology (심리)
- **사이드바 네비게이션**: 직관적인 메뉴 구조
- **3D 푸시 버튼 효과**: 인터랙티브한 UI 요소
- **반응형 디자인**: 모바일과 데스크톱 모두 지원

## 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui
- **State Management**: React Context API
- **Build Tool**: Bun
- **Deployment**: Netlify

## 설치 방법

1. 저장소를 클론합니다:
```bash
git clone https://github.com/artis-cmd/turn-trader-clone.git
cd turn-trader-clone
```

2. 의존성을 설치합니다:
```bash
bun install
```

## 실행 방법

### 개발 서버 실행
```bash
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

### 빌드
```bash
bun run build
```

### 프로덕션 실행
```bash
bun start
```

### 정적 내보내기
```bash
bun run export
```

## 로그인 정보

테스트용 로그인 정보:
- **이메일**: test@test.com
- **비밀번호**: password

## 프로젝트 구조

```
turn-trader-clone/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx         # 메인 페이지
│   │   ├── layout.tsx       # 루트 레이아웃
│   │   ├── globals.css      # 글로벌 스타일
│   │   └── ClientBody.tsx   # 클라이언트 컴포넌트
│   ├── components/          # React 컴포넌트
│   │   ├── ui/              # UI 컴포넌트
│   │   ├── LoginPage.tsx    # 로그인 페이지
│   │   ├── Dashboard.tsx    # 대시보드
│   │   └── StudyPage.tsx    # 학습 페이지
│   ├── contexts/            # React Context
│   │   └── AuthContext.tsx  # 인증 컨텍스트
│   ├── hooks/               # 커스텀 훅
│   └── lib/                 # 유틸리티 함수
├── public/                  # 정적 파일
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 주요 컴포넌트

- **AuthContext**: 로그인 상태 관리
- **LoginPage**: 로그인 인터페이스
- **Dashboard**: 메인 대시보드
- **StudyPage**: 학습 카테고리 페이지
- **PushButton**: 3D 효과 버튼 컴포넌트

## 스크린샷

프로젝트의 실제 동작 모습을 확인하려면 로그인 후 Study 페이지를 방문해보세요.

## 배포

이 프로젝트는 Netlify에서 정적 사이트로 배포할 수 있도록 설정되어 있습니다.

## 라이센스

MIT License

## 기여

이슈 리포트나 풀 리퀘스트는 언제든 환영합니다.
