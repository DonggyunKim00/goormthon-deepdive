const binarySearch = (arr, findValue) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] > findValue) right = middle - 1;
    else if (arr[middle] < findValue) left = middle + 1;
    else return middle;
  }

  return -1;
};
