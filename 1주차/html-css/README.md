# HTML

# CSS

#### 스타일 적용의 우선순위

1. 인라인 시트
2. 내부 스타일 시트
3. 외부 스타일 시트

#### CSS 기본 구조

선택자 , 프로퍼티(속성), 값

#### 색상

1. rgb 값 => rgb(0,0,0) , rgb(255,255,255)
2. hex 값 => #0012FF
3. rgba 값 => rgba(0,0,0,투명도)
4. hsl => hsl(색,채도,명도)

#### 수치 값

1. px
2. %
3. em, rem

- em : 상위에 있는 요소의 font-size가 기준
- rem : html tag 에서 지정된 font-size가 기준 (없다면 브라우저 기본값)
  => 브라우저 기본값을 없애기 위해 reset.css 사용

#### Pseudo-class

- :hover
- :active
- :focus
- :first-child
- :first-of-type
- :last-of-type

#### Pseudo-element

- ::before
- ::after
- ::selection
- ::marker
- ::first-letter
- ::first-line
