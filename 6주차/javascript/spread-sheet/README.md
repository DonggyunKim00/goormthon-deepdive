### Blob(Binary Large Object)

- 주로 이미지, 비디오 같은 미디어 데이터를 다룰 때 사용
- 데이터 크기, 타입, 데이터 송수신을 위해 작은 Blob 객체로 나누는 작업으로 사용
- url을 이용한 다운로드 로직
  - 1. a 태그 생성
  - 2. href 속성 값으로 blob 객체 url 할당
  - 3. a.download 에 (파일 이름.확장자) 형태로 할당
  - 4. 강제 onClick 이벤트 실행

```javascript
// blob 객체 생성
const blob = new Blob([csv]);

// blob 객체를 위한 url 생성
const url = URL.createObjectURL(blob);

// a 태그를 이용한 다운로드 로직
const a = document.createElement('a');
a.href = csvUrl;
a.download = 'Spreadsheet File Name.csv';
a.click();
```
