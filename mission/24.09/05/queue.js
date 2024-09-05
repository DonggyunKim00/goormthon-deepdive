// push, shift 메소드 이용하지 않고 구현
class Queue {
  constructor() {
    this.list = [];
    this.front = 0; // 데이터 삭제 시 이용
    this.rear = 0; // 데이터 추가 시 이용
  }

  enqueue(value) {
    this.list[rear] = value;
    this.rear += 1;
  }

  dequeue() {
    if (this.front >= this.rear) return;
    this.front += 1;

    return this.list[this.front - 1];
  }

  size() {
    return this.rear - this.front;
  }

  lastInsertValue() {
    if (!this.size()) return;

    return this.list[this.front];
  }

  firstInsertValue() {
    if (!this.size()) return;

    return this.list[this.rear - 1];
  }
}

// push, shift 메소드 이용하여 구현
class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(value) {
    this.list.push(value);
  }

  dequeue() {
    return this.list.shift();
  }

  size() {
    return this.list.length;
  }

  firstInsertValue() {
    return this.list[0];
  }

  lastInsertValue() {
    return this.list[this.list.length - 1];
  }
}
