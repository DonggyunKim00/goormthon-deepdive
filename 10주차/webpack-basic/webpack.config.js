const path = require('path'); // nodejs 내장 라이브러리

module.exports = {
  // 어떤 환경을 위한 건지?
  mode: 'development',
  // 번들링의 시작 경로가 어디인지?
  entry: path.resolve(__dirname, 'src/index.js'),
  // 웹팩 작업을 통해 생성된 결과물
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  // css 모듈을 번들링할 수 있게 해줌
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // <style> 태그를 사용할 수 있게함
          'css-loader', // CSS => CommonJs 로 변환
          'sass-loader', // sass => css로 변환
        ],
      },
    ],
  },
};
