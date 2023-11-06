function findFirstRecurringChar(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (map.has(item)) {
      let count = map.get(item);
      map.set(item, count + 1);

      if (count >= 2) return item;
      continue;
    }
    map.set(item, 1);
  }
  return undefined;
}

console.log(findFirstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]) === 2);
console.log(findFirstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]) === 1);
console.log(findFirstRecurringChar([2, 3, 4, 5]) === undefined);