// 1. 중복 선언
var score1 = 80;
var score1 = 90;

let number1 = 10;
let number1 = 20; // SyntaxError

const foo1 = 1;
const foo1; // SyntaxError


// 2. 재 할당
var score2 = 80;
score2 = 90;

let number2 = 10;
number2 = 20;

const foo2 = 1;
foo2 = 2; // TypeError


// 3. 스코프
var score3 = 80;

if(score3 > 50){
	var score3 = 10;
}
console.log(score3); // 10

{
	const foo3 = 1;
	let bar3 = 'bar';
	console.log(foo3); // 1
	console.log(bar3); // 'bar'
}
console.log(foo3); // ReferenceError
console.log(bar3); // ReferenceError

// 4. 호이스팅 방식
console.log(score4); // undefined
var score4;
score4 = 1;
console.log(score4); // 1

console.log(number4); // ReferenceError
let number4 = 10;
number4 = 20;
console.log(number4); // 1

console.log(foo4); // ReferenceError
const foo4 = 555;
console.log(foo4) // 555