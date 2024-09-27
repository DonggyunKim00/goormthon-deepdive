// Promise의 상태
// 대기(pending): 비동기 처리 로직이 아직 완료되지 않은 상태
// 이행(fulfilled): 비동기 처리가 완료되어 프로미스가 결과값을 반환해준 상태
// 거부(rejected): 비동기 처리가 실패하거나 오류가 발생한 상태

function fetchData() {
  return new Promise((resolve, reject) => {
    const success = false;
    if (success) resolve('성공');
    else reject('실패');
  });
}

fetchData()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(() => {
    console.log('--- 모든 작업 끝 ---');
  });

// Promise.all()
// 모든 비동기 작업이 끝난 후에 한번에 가져옴

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, 'foo')
);
// const promise4 = new Promise.reject('실패');

Promise.all([promise1, promise2, promise3]).then((value) => console.log(value));

// Promise.race()
// 가장 먼저 완료된 비동기 처리만 처리함!
const pro1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
const pro2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));
Promise.race([pro1, pro2]).then((value) => console.log(value));
