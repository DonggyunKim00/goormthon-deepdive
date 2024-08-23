# HTML

#### 시맨틱태그

- 사용하는 이유
  - 웹 접근성(Accessibility === A11y)
- 종류
  - `<article>`
  - `<aside>`
  - `<details>`
  - `<figcaption>`
  - `<figure>`
  - `<footer>`
  - `<form>`
  - `<header>`
  - `<main>`
  - `<mark>`
  - `<nav>`
  - `<section>`
  - `<summary>`
  - `<time>`

# CSS

#### 💡스타일 적용의 우선순위

1. 인라인 시트
2. 내부 스타일 시트
3. 외부 스타일 시트

#### 💡색상

1. rgb 값 => rgb(0,0,0) , rgb(255,255,255)
2. hex 값 => #0012FF
3. rgba 값 => rgba(0,0,0,투명도)
4. hsl => hsl(색,채도,명도)

#### 💡수치 값

1. px
2. %
3. em, rem

- em : 상위에 있는 요소의 font-size가 기준
- rem : html tag 에서 지정된 font-size가 기준 (없다면 브라우저 기본값) <br>
  => 브라우저 기본값을 없애기 위해 reset.css 사용

#### 💡Pseudo-class

- `:hover`
- `:active`
- `:focus`
- `:first-child`
- `:first-of-type`
- `:last-of-type`

#### 💡Pseudo-element

- `::before`
- `::after`
- `::selection`
- `::marker`
- `::first-letter`
- `::first-line`

#### 💡CSS 변수

- CSS 변수의 이름을 지정할때는 변수 맨 앞에 `--` 를 붙여줘야함
- 변수를 호출할때는 var(변수명) 형식을 사용
- :root 의사클래스는 문서트리의 루트요소를 선택
- 특정 변수가 정의되었는지 안되었는지 모를때, 변수값이 없다면 var() 중첩 가능 => "대체 변수"
  <br> ex) `color: var(--new-font-color, var(--normal-font-color,blue))`
- 유효하지 않은 CSS 변수값이 설정될 경우 그 속성의 초기값이나 상속된 값을 사용

#### image

- object-fit
  - fill : 기본값, 종횡비 유지X
  - contain : 종횡비 유지, 주어진 치수 조정
  - cover : 종횡비 유지, 주어진 치수에도 맞춤 => 이미지가 잘림
  - scale-down : 가장 작은 이미지?
- object-position
  - right
  - left

#### background-clip

- border-box : 배경색상을 border 부분까지 채움
- padding-box : 배경색상을 padding 부분까지 채움
- content-box : 배경색상을 content 부분까지 채움

#### 자료

- [리액트 접근성](https://ko.legacy.reactjs.org/docs/accessibility.html)
- [애니메이션 관련 아티클](https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9)
- [베지어 곡선 툴](https://cubic-bezier.com/#.17,.67,.83,.67)
