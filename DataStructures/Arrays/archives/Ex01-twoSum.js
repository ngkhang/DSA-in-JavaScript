/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let output;
  for (const index in nums) {
    let subNum = target - nums[index];
    if (nums.includes(subNum) && subNum !== nums[index]) {
      output = [index * 1, nums.indexOf(subNum)];
      break;
    }
  }
  return output;
};