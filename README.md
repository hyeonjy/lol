# League of Legends 챔피언 웹 애플리케이션
## 1. 프로젝트 소개
LoL은 전 세계적으로 인기 있는 온라인 게임으로, 두 팀의 플레이어들이 서로 경쟁하며 상대팀의 넥서스를 파괴하는 것을 목표로 합니다. 이 게임에서 플레이어들은 '`챔피언(Champion)`'이라는 캐릭터를 조종합니다.

이 프로젝트는 **리그 오브 레전드 (LoL)** 의 데이터를 활용하여 다양한 챔피언 및 아이템 정보를 제공하는 웹 애플리케이션입니다. **Riot Games API** 와 **Data Dragon** 을 활용하여 실제 게임 데이터를 조회하고 표시하며, Next.js와 TypeScript를 기반으로 웹 애플리케이션을 만들었습니다.

- **Next.js**: App Router, 동적 라우팅, SSR/ISR/CSR 방식 활용
- **TypeScript**: 타입 안정성을 높이고 제네릭으로 유연한 개발 진행
- **Tanstack Query**: 데이터 상태 관리와 성능 최적화 방법
- **사용자 경험 개선**: 로딩 상태 처리, 반응형 디자인, 다크모드 구현

## 2. 주요 기능
### 1. 챔피언 리스트 조회
- 모든 챔피언의 기본 정보를 조회하고 화면에 표시합니다.
### 2. 챔피언 상세 정보 조회
- 특정 챔피언의 세부 정보를 확인할 수 있습니다.
### 3. 챔피언 로테이션 조회
- 현재 무료로 플레이 가능한 챔피언 목록을 실시간으로 가져옵니다.
### 4. 아이템 리스트 조회
게임 내 모든 아이템의 정보를 확인할 수 있습니다.

##  **구현된 기능**


###  💡 **기본 기능**

1. **프로젝트 셋업**:
    - Next.js, TypeScript 설치 및 프로젝트 구조 구성
    - Tailwind CSS 설치 및 설정
2. **데이터 Fetching**:
    - Riot API 및 Data Dragon에서 데이터를 Fetch
    - 클라이언트 및 서버 컴포넌트로 데이터 처리
3. **Tanstack Query 활용**:
    - 상태 관리 및 데이터 캐싱 최적화
    - 로딩 및 에러 상태 처리

### 🔥 **추가 기능**

1. **로딩 및 에러 처리 개선**
    - React Suspense와 에러 경로 처리 컴포넌트 작성
2. **성능 최적화**
    - 이미지 최적화: Next.js `<Image>` 컴포넌트 사용
3. **UI 개선 및 다크모드 구현**
    - 반응형 디자인 및 다크모드 설정

## 🛠️ 3. 기술 스택
<div style="display:flex">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" style="margin-right: 5px">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"  style="margin-right: 5px">
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"  style="margin-right: 5px">
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=black"  style="margin-right: 5px">
</div>

<br>

- 프론트엔드: Next.js, React, TypeScript
- API 및 데이터: Riot Games API, Data Dragon
- 스타일링: Tailwind CSS 

## 4. 프로젝트 구조
```
📂 프로젝트 루트  
├── 📁 app  
│   ├── 📁 champions  
│   │   ├── 📄 page.tsx       # 챔피언 리스트 페이지 (ISR 활용)  
│   │   ├── 📁 [id]  
│   │   │   └── 📄 page.tsx   # 챔피언 상세 페이지 (동적 라우팅)  
│   ├── 📁 rotation  
│   │   └── 📄 page.tsx       # 챔피언 로테이션 페이지 (CSR 활용)  
│   ├── 📁 items  
│   │   └── 📄 page.tsx       # 아이템 리스트 페이지 (SSG 활용)  
│   ├── 📁 api  
│   │   ├── 📁 rotation  
│   │   │   └── 📄 route.ts   # 챔피언 로테이션 API 엔드포인트  
│   └── 📄 layout.tsx         # 전체 레이아웃 설정  
├── 📁 utils  
│   └── 📄 serverApi.ts       # 서버 데이터 호출 함수  
├── 📄 .env                   # 환경 변수 (Riot API 키 설정)  
└── 📄 README.md              # 프로젝트 소개 문서  
```



## 5. API 명세서

![image](https://github.com/user-attachments/assets/12ca6d4f-b29a-4d5f-bfb8-7e7b8e686da8)


LoL은 전 세계적으로 인기 있는 온라인 게임으로, 두 팀의 플레이어들이 서로 경쟁하며 상대팀의 넥서스를 파괴하는 것을 목표로 합니다. 이 게임에서 플레이어들은 '`챔피언(Champion)`'이라는 캐릭터를 조종합니다.

- **챔피언(Champion)**: LoL에서 플레이어가 조종하는 캐릭터입니다. 각 챔피언은 고유한 능력과 플레이 스타일을 가지고 있습니다.

- **챔피언 로테이션(Champion Rotation)**: 매주 무료로 플레이할 수 있는 챔피언들의 목록입니다. 새로운 챔피언을 구매하지 않아도 다양한 챔피언을 경험해볼 수 있습니다.

 챔피언과 아이템 정보 그리고 챔피언 로테이션을 조회해볼 수 있습니다.

## ✅ 트러블 슈팅 작성 
https://velog.io/@hg024246/%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-%EB%A6%AC%EA%B7%B8-%EC%98%A4%EB%B8%8C-%EB%A0%88%EC%A0%84%EB%93%9C-%EC%A0%95%EB%B3%B4-%EC%95%B1
