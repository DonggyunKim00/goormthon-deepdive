// 모든 객체는 Object.prototype을 상속받는다! 
// => 즉, 프로토타입 체인에서 Object.prototype이 최상위 객체임

function Person(name, email, birthday) {
  this.name = name;
  this.email = email;
  this.birthday = new Date(birthday);
}

// 공통되는 부분은 prototype에 넣어주는게 효율적임!
Person.prototype.calculateAge = function(){
    const diff = Date.now() = this.birthday.getTime();
    const ageDate = new Date(Diff);
    return Math.abs(ageDate.getUTCFullYear() - 1920);
  };

const john = new Person('john', 'john@abc.com', '7-10-91');
const han = new Person('han', 'han@abc.com', '2-9-91');

console.log(john);
console.log(han);