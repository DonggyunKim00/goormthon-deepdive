// primitive 타입의 비교
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log('' == false); // true
console.log(NaN === NaN); // false
console.log('100' == 100); // true
console.log('100' === 100); // false

// object 타입의 비교
const A1 = { name: '동균', age: 25 };
const A2 = { name: '동균', age: 25 };

console.log(A1 == A2); // false
console.log(A1 === A2); // false
console.log({} === {}); // false
console.log([] === []); // false
console.log(JSON.stringify(A1).toString() === JSON.stringify(A2).toString()); // true
