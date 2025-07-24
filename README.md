# Turn Trader Clone

Turn Trader의 Study 페이지를 완벽하게 클론한 Next.js 프로젝트입니다.

![Turn Trader Screenshot](https://via.placeholder.com/800x400/1c4b8b/ffffff?text=Turn+Trader+Study+Page)

## ✨ 주요 기능

- **🔐 로그인 시스템**: 테스트 계정으로 간편 로그인
- **📚 5개 학습 카테고리**: Basics, Market, Strategy, Risk, Psychology
- **🎛️ 사이드바 네비게이션**: HOME, STUDY, TRAINING, SIMULATOR, LIVE
- **🎨 3D 푸시 버튼 효과**: 원본과 동일한 인터랙티브 버튼
- **📱 반응형 디자인**: 모든 기기에서 완벽한 UI
- **🎯 진행률 추적**: 각 카테고리별 학습 진행 상황 표시

## 🚀 기술 스택

- **Frontend**: Next.js 15 + TypeScript
- **스타일링**: Tailwind CSS + shadcn/ui
- **아이콘**: Lucide React
- **상태관리**: React Context API
- **빌드 도구**: Bun
- **배포**: Netlify

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/artis-cmd/turn-trader-clone.git
cd turn-trader-clone
```

### 2. 의존성 설치
```bash
bun install
```

### 3. 개발 서버 실행
```bash
bun run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 🔑 로그인 정보

**테스트 계정 1:**
- 이메일: `test@test.com`
- 비밀번호: `password`

**테스트 계정 2:**
- 이메일: `demo@turntrader.com`
- 비밀번호: `demo123`

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # React 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── push-button.tsx  # 커스텀 3D 버튼
│   │   └── ...
│   ├── LoginPage.tsx     # 로그인 페이지
│   └── StudyPage.tsx     # 학습 페이지
├── contexts/             # React Context
│   └── AuthContext.tsx   # 인증 컨텍스트
└── hooks/                # 커스텀 훅
    └── use-toast.ts
```

## 🎨 주요 컴포넌트

### StudyPage.tsx
- 5개 학습 카테고리 카드
- 진행률 바와 퍼센트 표시
- 하늘색 그라데이션 배경
- 금융 아이콘 워터마크

### LoginPage.tsx
- 3D 푸시 버튼 효과
- 폼 유효성 검사
- 토스트 알림
- 원본과 동일한 디자인

### PushButton.tsx
- 커스텀 3D 효과
- Primary/Secondary 변형
- 호버 및 활성 상태

## 🌐 라이브 데모

**배포된 사이트**: [https://same-jtwb77s9sz9-latest.netlify.app](https://same-jtwb77s9sz9-latest.netlify.app)

## 📋 빌드 및 배포

### 프로덕션 빌드
```bash
bun run build
```

### 정적 사이트 내보내기
```bash
bun run build
```

### Netlify 배포
이 프로젝트는 Netlify에 바로 배포할 수 있도록 설정되어 있습니다.

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 새 기능 브랜치를 만드세요 (`git checkout -b feature/새기능`)
3. 변경사항을 커밋하세요 (`git commit -am '새 기능 추가'`)
4. 브랜치에 푸시하세요 (`git push origin feature/새기능`)
5. Pull Request를 만드세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 🙏 감사의 말

- 원본 Turn Trader 사이트의 뛰어난 UI/UX 디자인
- shadcn/ui의 훌륭한 컴포넌트 라이브러리
- Next.js와 Tailwind CSS 팀

---

**Made with ❤️ by [Your Name]**
