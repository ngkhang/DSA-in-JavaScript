function containsCommonItem(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) map[arr1[i]] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) return true;
  }
  return false;
}

console.log(containsCommonItem(['a', 'b', 'c', 'x'], ['z', 'y', 'i']) === false);
console.log(containsCommonItem(['a', 'b', 'c', 'x'], ['z', 'y', 'x']) === true);