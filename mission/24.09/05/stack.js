// push,pop 메소드 없이 구현
class Stack {
  constructor() {
    this.list = [];
    this.pos = 0;
  }

  push(value) {
    this.list[this.pos] = value;
    this.pos += 1;
  }

  pop() {
    if (!this.pos) return;

    let popValue = this.list[this.pos - 1];
    this.pos -= 1;

    return popValue;
  }

  size() {
    return this.pos;
  }

  top() {
    if (!this.pos) return;

    return this.list[this.pos - 1];
  }
}

// push,pop 메소드 사용하여 구현
class Stack {
  constructor() {
    this.list = [];
    this.len = 0;
  }

  push(value) {
    this.list.push(value);
    this.len += 1;
  }

  pop() {
    if (!this.len) return;

    this.len -= 1;
    return this.list.pop();
  }

  size() {
    return this.len;
  }

  top() {
    if (!this.pos) return;

    return this.list[this.len - 1];
  }
}
