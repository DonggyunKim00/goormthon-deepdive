// items 배열을 아래와 같이 count하고 나온 name들을 배열형태로 묶어주는 예제

// {
//   X: {name: ['A','C','F'], count: 3},
//   Y: {name: ['B','E'], count: 2},
//   Z: {name: ['D'], count: 1}
// }

const items = [
  { name: 'A', category: 'X' },
  { name: 'B', category: 'Y' },
  { name: 'C', category: 'X' },
  { name: 'D', category: 'Z' },
  { name: 'E', category: 'Y' },
  { name: 'F', category: 'X' },
];

const newItems = items.reduce((acc, curr) => {
  if (!acc[curr.category]) acc[curr.category] = { name: [], count: 0 };

  acc[curr.category].name.push(curr.name);
  acc[curr.category].count += 1;

  return acc;
}, {});

console.log(newItems);
