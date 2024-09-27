// 상속
// 부모 클래스의 메서드를 상속받아서 사용할 수 있음

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Hello my name is ${this.name}`;
  }
}

class Client extends Person {
  constructor(name, email, phone, address) {
    super(name, email);

    this.phone = phone;
    this.address = address;
  }
}

const john = new Client('john', 'john@abc.com', '010-222-3333', 'seoul');
console.log(john.introduce());

console.log(john.__proto__);
