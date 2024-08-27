# CSS

#### Flexbox

**Flex 컨테이너 속성**

- align-items
  - flex-wrap이 nowrap일때 사용
  - baseline : 텍스트를 기준으로 정렬
  - stretch : 끝까지 늘림
- align-content
  - flex-wrap이 wrap일때 사용 => 두줄 이상
  - 값 종류는 align-items와 같음

**Flex Item 속성**

- align-self : 아이템 하나에 대하여 교차축 속성 적용
- order : 아이템 하나하나의 순서를 바꾸고 싶을때 사용
- flex-grow : 아이템의 기본 너비를 자동으로 늘어나게 함
- flex-shrink : 아이템의 기본 너비를 자동으로 줄어들도록 함 (font-size, padding 등 을 줄어들게 할순없음)
- flex-basis: width에서 사용하는 모든 단위 사용가능, 주축에 대해서 적용
- flex
  - flex : flex-grow | flex-shrink | flex-basis
  - 값을 할당할때 단위가 있다면 그 값은 flex-basis가 됨 아니라면 flex-grow,flex-shrink

#### table

- display
  - table
  - table-row
  - table-cell

#### position

- relative : 자기 자신을 기준으로 이동
- absolute : 상단의 static을 제외한 position 속성이 있는 것을 기준으로 이동
- fixed :
- sticky : 요소 사용자의 스크롤 위치를 기준으로 배치 (static + fixed)

#### 미디어 쿼리

- viewport 를 기준으로 변화함
- @media [only 또는 not] [미디어 유형] [and 또는 ,] (조건문) {실행문}
- @media (min-width:500px) and (max-width: 1000px){}
- @media (500px <= width <= 1000px){}

#### -webkit

- webkit- : 구글, 사파리 브라우저에 적용
- moz- : 파이어폭스 브라우저에 적용
- ms- : 익스플로러에 적용
- o- : 오페라 브라우저에 적용

#### Grid CSS

- 2차원(행과 열)의 레이아웃 시스템 제공

- **컨테이너 속성**
  - grid-template-columns: repeat(5,10px);
  - grid-template-rows : 300px 10% 1fr 1fr;
  - grid-template-areas
- **아이템 속성**
  - grid-column-start, grid-column-end
  - grid-row-start, grid-row-end
  - grid-column, grid-row
  - grid-area
