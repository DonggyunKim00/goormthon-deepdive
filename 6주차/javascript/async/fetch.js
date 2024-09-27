fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res1) => res1.json())
  .then((json) => console.log(json))
  .then(() => fetch('https://jsonplaceholder.typicode.com/todos/2'))
  .then((res) => res.json())
  .then((res) => console.log(res));
