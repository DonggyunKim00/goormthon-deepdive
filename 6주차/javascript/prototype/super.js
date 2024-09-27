class Car {
  constructor(brand) {
    this.carName = brand;
  }

  present() {
    return 'I have a' + this.carName;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    // 1️⃣ 자식 클래스 내에서 부모의 셍성자를 호출
    super(brand);

    this.model = mod;
  }

  show() {
    // 2️⃣ 자식 클래스 내에서 부모클래스의 메서드를 호출
    return super.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model('Ford', 'Mustang');
console.log(myCar.show());
