// call
// 함수를 호출하는 함수
// 첫번째 인자로 thisArg(객체)를 넣어주면 this의 참조가 바뀜
// 두번째 인자부터는 함수에 파라미터로 받을 수 있게 됨!

// apply
// call 과 같은 동작을 하는 함수
// 차이점은 두번째 인자를 배열로 넘겨준다는 것

const fullName = function (city, country) {
  console.log(this.firstName + ' ' + this.lastName, city, country);
};

const person1 = {
  firstName: 'Kim',
  lastName: 'Donggyun',
};

fullName.call(person1, 'seoul', 'gwangjingu');
fullName.apply(person1, ['seoul', 'gwangjingu']);

// bind
// 직접 함수를 실행 X, 반환 O
// 반환된 함수를 할당해서 사용해줘야함!!

function func(language) {
  if (language === 'kor') console.log(`language: ${this.korGreeting}`);
  else console.log(`language: ${this.engGreeting}`);
}

const greeting = {
  korGreeting: '안녕',
  engGreeting: 'hello',
};

const boundFunc = func.bind(greeting);
func('kor'); // language: undefined
boundFunc('kor'); // language: 안녕
