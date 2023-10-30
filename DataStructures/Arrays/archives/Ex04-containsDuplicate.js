/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const SIZE = nums.length;
  const uniques = new Set(nums);
  return [...uniques].length !== SIZE;
}