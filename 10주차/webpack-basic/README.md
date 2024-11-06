#### Cannot use import statement outside a module

1. npm init -y 로 package.json 만들기
2. npm i webpack webpack-cli -D
3. package.json scripts에 "build": "webpack --mode production" 추가 => 파일 번들링
4. npm run build => 번들링한 파일을 dist 폴더에 만들어줌
5. index.html 에 script 태그 src를 번들링한 파일 경로로 바꿔줌

#### 라이브러리 설치

1. npm i nanoid => unique한 id를 생성해주는 라이브러리
2. `nanoid()` 를 사용한 번들링

#### Webpack 설정

- 번들링을 할때 필요한 설정을 webpack.config.js 에 넣어주면 됨

#### Weppack Loader

- 자바스크립트 파일 말고도 html,css,image,font 등 웹 자원들을 변환할 수 있게 함
- npm i -D css-loader style-loader sass sass-loader
