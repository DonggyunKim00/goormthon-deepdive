# HTML

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
3. em, remㅈ

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
