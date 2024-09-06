const linearSearch = (arr, findValue) => {
  let answer;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findValue) {
      answer = arr[i];
      break;
    }
  }

  return answer;
};
