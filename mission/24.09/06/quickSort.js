const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else if (arr[i] > pivot) right.push(arr[i]);
    else equal.push(arr[i]);
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
};

console.log(quickSort([6, 1, 3, 4, 5, 7, 2, 9]));
