const factorial1 = (n) => {
  if (n <= 1) return 1;

  let res = n;
  while (--n) {
    res *= n;
  }

  return res;
};

const factorial2 = (n) => {
  // 탈출 조건: n이 1 이하일 때 리턴
  if (n <= 1) return 1;

  return n * factorial2(n - 1);
};

console.log(factorial1(5));
console.log(factorial2(5));
