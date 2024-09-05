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
