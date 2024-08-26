## HTTP 프로토콜

- **정의/개념**
  - HTTP(Hypertext Transfer Protocol)
  - HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜
  - 웹에서 데이터를 주고받는 서버-클라이언트 모델의 프로토콜 == 웹 브라우저가 서버와 통신하는 규칙
  - 애플리케이션 계층의 프로토콜
  - TCP를 통해 통신함
- **HTTP의 통신흐름**

  1. 브라우저가 웹서버로 리소스 요청 (request)
  2. 웹서버는 HTML, CSS와 같은 리소스를 응답 (response)
  <br>
  <details>
  <summary>프록시란?</summary>

  - 정의
    - 클라이언트와 서버 사이에서 HTTP 메시지를 이어받고 전달하는 여러 계층의 컴퓨터/머신 중에서도 애플리케이션 계층에서 동작하는 것들을 일반적으로 프록시라고 부른다.
    - 프록시는 눈에 보이거나 그렇지 않을 수도 있으며(프록시를 통해 요청이 변경되거나 변경되지 않는 경우를 말함) 다양한 기능들을 수행할 수 있다.
  - 기능 1. 캐싱 (캐시는 공개 또는 비공개가 될 수 있습니다 (예: 브라우저 캐시)) 2. 필터링 (바이러스 백신 스캔, 유해 컨텐츠 차단(자녀 보호) 기능) 3. 로드 밸런싱 (여러 서버들이 서로 다른 요청을 처리하도록 허용) 4. 인증 (다양한 리소스에 대한 접근 제어) 5. 로깅 (이력 정보를 저장)
    </details>

    <img width="747" alt="스크린샷 2024-08-26 오후 1 37 23" src="https://github.com/user-attachments/assets/ab3760a9-1bfd-4e3a-a6c9-b7917c6f87e6">

  - **HTTP Response 구성**
    - 시작줄: HTTP 메소드, 요청 타겟, HTTP 버전
    - 헤더(Headers): HTTP 헤더의 기본 구조
    - 본문(Body): 단일리소스 or 다중리소스
  - **HTTP Response 구성**
    - 상태줄: HTTP 버전, 상태 코드, 상태 텍스트
    - 헤더: 응답헤더(Via, Vary, Representation 등등)
    - 본문: HTTP 상태 코드 등등

참고자료: [토스페이먼츠 개발자센터](https://docs.tosspayments.com/resources/glossary/http-protocol), [MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Messages)

## 프론트측 기술

- **사용 언어** : HTML, CSS, JavaScript, TypeScript
- **프론트측 프레임워크**
  - React: 가상 DOM, JSX, Component 기반의 유연하고 효율적인 UI 개발
  - Angular: TypeScript 기반, 종합적인 개발 환경 제공, 대규모 애플리케이션에 적합
  - Vue: React와 Angular의 장점을 결합, 쉬운 학습 곡선, 중소형 프로젝트에 적합
  - Svelte: 컴파일 기반 프레임워크, 높은 성능, 간결한 코드 작성
  - Nextjs: React 기반의 SSR 프레임워크
- **통신 라이브러리**
  - fetch API: 브라우저 기본 제공, Promise 기반, Modern JavaScript 환경에서 주로 사용
  - Axios: Promise 기반, 인터셉터, 요청/응답 변환 등 다양한 기능 제공, React, Vue 등에서 많이 사용
  - GraphQL 클라이언트: Apollo Client, Relay 등 GraphQL 서버와 통신하기 위한 전문 라이브러리
  - WebSocket: 실시간 양방향 통신을 위한 프로토콜, Socket.IO 등의 라이브러리를 통해 사용
- **스타일링**
  - styled-components, emotion: CSS-in-JS을 통해 스타일 작업 가능
  - tailwindCSS: 미리 정의된 유틸리티 클래스를 조합하여 빠르게 스타일링
- **상태 관리 라이브러리**
  - Context API: React 기본 제공, 간단한 상태 관리에 적합
  - Redux: 대규모 애플리케이션에 적합, 학습 곡선이 높고, 설정이 복잡할 수 있음
  - Zustand: 간결하고 유연한 상태 관리, 작은 프로젝트에 적합
  - React Query: 데이터 페칭, 캐싱, 동기화를 위한 라이브러리, 상태 관리뿐 아니라 데이터 관리에도 활용 가능

## 백엔드측 기술

- **사용 언어** : Javascript, Python, Java
- **백엔드측 프레임워크**
  - NestJS: TypeScript 기반, Node.js 프레임워크, 엔터프라이즈급 애플리케이션에 적합
  - Django: Python 기반, 배터리 포함형 프레임워크
  - Spring Boot: Java 기반, 스프링 부트스트랩, 빠른 개발 가능
- **데이터베이스**
  - 관계형 데이터베이스: MySQL, PostgreSQL, Oracle 등
  - NoSQL 데이터베이스: MongoDB, Cassandra, Redis 등
- **웹 서버**
  - Apache: 오픈 소스, 안정성, 높은 확장성
  - Nginx: 고성능, 웹 서버 및 리버스 프록시 서버로 사용
- **클라우드 플랫폼**
  - AWS: 가장 큰 클라우드 플랫폼, 다양한 서비스 제공
  - Google Cloud Platform: 머신러닝, 데이터 분석에 강점
  - Microsoft Azure: Windows 환경과의 호환성이 좋음
