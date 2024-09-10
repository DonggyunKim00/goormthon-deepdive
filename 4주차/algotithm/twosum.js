const nums = [3, 2, 4];
const target = 6;

const twoSum = (nums, target) => {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i < j && nums[i] + nums[j] === target) answer.push(i, j);
    }
  }

  return answer;
};

console.log(twoSum(nums, target));
