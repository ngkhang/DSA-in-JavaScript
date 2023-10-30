/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let point = 0;
  let step = 0;
  while (step < nums.length) {
    if (nums[point] === 0) {
      nums.splice(point, 1);
      nums.push(0);
    } else point++;
    step++;
  }
  return nums;
};
