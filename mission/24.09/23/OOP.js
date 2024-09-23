// 1. 추상화: 기본적인 Shape 클래스 정의
class Shape {
  constructor(width, height) {
    this.width = width; // 캡슐화: 모양의 너비
    this.height = height; // 캡슐화: 모양의 높이
  }

  // 메소드: 모양의 크기를 출력
  run() {
    console.log(`이 모양은 너비:${this.width}, 높이:${this.height} 입니다.`);
  }
}

// 2. 상속: 특정한 모양(직사각형, 원 등)을 정의
// 단일 책임 원칙(SRP): 기본 모양과 직사각형, 원 등의 책임을 분리
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  // 개방/폐쇄 원칙(OCP): 기존 Shape 클래스의 메소드를 확장하여 직사각형 정보를 제공
  run() {
    super.run();
    console.log(`이것은 직사각형입니다.`);
  }

  // 직사각형의 면적 계산 메소드
  area() {
    return this.width * this.height;
  }
}

// 객체 생성
let shape = new Shape(10, 20);
let rect = new Rectangle(10, 20);

// 3. 다형성: 같은 메소드가 서로 다른 방식으로 동작
shape.run(); // 이 모양은 너비:10, 높이:20 입니다.
rect.run(); // 이 모양은 너비:10, 높이:20 입니다. 이것은 직사각형입니다.

// 의존 역전 원칙(DIP)을 적용하는 Manager 클래스
class ShapeManager {
  constructor(shape) {
    this.shape = shape;
  }

  displayShape() {
    this.shape.run();
  }

  displayArea() {
    console.log(`면적: ${this.shape.area()}`);
  }
}

// 의존 역전 원칙 적용: ShapeManager는 Rectangle이 아닌 추상화된 Shape에 의존
let manager = new ShapeManager(rect);
manager.displayShape(); // 이 모양은 너비:10, 높이:20 입니다. 이것은 직사각형입니다.
manager.displayArea(); // 면적: 200
