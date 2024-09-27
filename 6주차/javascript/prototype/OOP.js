class Person {
  constructor(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
  }

  // 클래스 내부의 메서드는 프로토타입 안에있음 =>  프로토타입 메서드
  introduce() {
    return `Hello my name is ${this.name}`
  }

  calculateAge(){
    const diff = Date.now() = this.birthday.getTime();
    const ageDate = new Date(Diff);
    return Math.abs(ageDate.getUTCFullYear() - 1920);
  };

  // 보통 this를 사용하지 않을때 static 메서드로 정의함 => 정적 메서드
  static multipleNumbers(x,y) {
    return x * y;
  }

}

const john = new Person('john', 'john@abc.com', '7-10-91');
const han = new Person('han', 'han@abc.com', '2-9-91');

console.log(john);
console.log(han);