async function makeRequests() {
  try {
    const res1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonRes1 = await res1.json();
    console.log(jsonRes1);

    const res2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const jsonRes2 = await res2.json();
    console.log(jsonRes2);
  } catch (err) {
    console.log(error);
  } finally {
    console.log('--- 모든 처리 끝 ---');
  }
}

makeRequests();
