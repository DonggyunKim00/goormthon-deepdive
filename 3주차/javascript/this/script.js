// This 참조

// Method this => 해당 객체 참조

const audio = {
  title: 'a',
  play() {
    console.log('play this', this);
  },
};

audio.play();

audio.stop = function () {
  console.log('stop this', this);
};
audio.stop();
audio.play();

// Function this => 전역 객체를 참조
function playAudio() {
  console.log(this);
}

playAudio();

// Constructor (생성자) 함수 this => 빈 객체
function Audio(title) {
  this.title = title;
  console.log(this);
}

const audioA = new Audio('a');
const audioB = new Audio('b');
const audioC = new Audio('c');
const audioD = new Audio('d');

const a = {
  title: 'audio',
  categories: ['rock', 'pop', 'hiphop'],
  displayCategories() {
    // this.title은 함수 내에서 쓰이기때문에 전역 객체를 참조한다.
    // 따라서 title 속성이 없기때문에 undefined 출력
    this.categories.forEach(function (category) {
      console.log(`title: ${this.title}, category: ${category}`);
    });

    console.log('\n');

    // forEach 에 두번째 인자로는 thisArg 로서 함수 내부 this의 참조가 됨
    this.categories.forEach(
      function (category) {
        console.log(`title: ${this.title}, category: ${category}`);
      },
      { title: 'ooo' }
    );

    console.log('\n');

    this.categories.forEach(function (category) {
      console.log(`title: ${this.title}, category: ${category}`);
    }, this);

    console.log('\n');

    // lexical this
    // 화살표 함수에 있는 this는 항상 상위 스코프의 this를 참조한다.
    // 내부 this의 상위스코프는 this.categories의 this 임!
    // this.categories는 자기 자신의 객체를 가리키고있음 => 메서드에서 사용된 this이기 때문
    this.categories.forEach((category) => {
      console.log(`title: ${this.title}, category: ${category}`);
    });
  },
};

a.displayCategories();
