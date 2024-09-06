const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const currValue = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > currValue) {
      arr[prev + 1] = arr[prev];
      prev -= 1;
    }

    arr[prev + 1] = currValue;
  }
  return arr;
};

console.log(insertionSort([6, 1, 3, 4, 5, 7, 2, 9]));

// 2 3 5 1
