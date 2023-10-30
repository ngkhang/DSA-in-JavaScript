function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  let output = [];
  let itemArr1 = arr1[0];
  let itemArr2 = arr2[0];
  let i1 = 1;
  let i2 = 1;

  while (itemArr1 || itemArr2) {
    if (itemArr1 > itemArr2) {
      output.push(itemArr2);
      itemArr2 = arr2[i2];
      i2++;
    }
    else {
      output.push(itemArr1);
      itemArr1 = arr1[i1];
      i1++;
    }
  }
  return output;
}
console.log(mergeSortedArrays([2, 12, 26], [2, 10, 20, 21]));