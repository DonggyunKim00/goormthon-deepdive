// 문자열을 반대로 출력하는 프로그램

const input = ['goorm', 'donggyun', 'helloworld!!'];

const solution = (input) => {
  const reverse = input.map((string) => {
    const stack = [];
    for (let i = 0; i < string.length; i++) {
      stack.push(string[i]);
    }

    let newString = '';
    while (stack.length > 0) {
      newString += stack.pop();
    }

    return newString;
  });

  return reverse;
};

console.log(solution(input));
