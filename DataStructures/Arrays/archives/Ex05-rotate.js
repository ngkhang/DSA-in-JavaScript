/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  let len = nums.length;
  let step = k > len ? k % len : k;
  let wrapArr = nums.slice(len - step);
  nums.splice(len - step);
  nums.unshift(...wrapArr);
  return nums;
};