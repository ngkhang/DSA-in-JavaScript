function myFunc(input) {
  let count = 0;      // O(1)
  count += 12;        // O(1)

  for (let index = 0; index < input; index++) {  // O(n)
    anotherFunc();          // O(n)
    let isSuccess = true;   // O(n)
    count++;                // O(n)
  }
  return a;                 // O(1)
}

// 1 + 1 + n + n + n + n + 1 = 3 + 4n
// -> Big-O: O(3+4n) = O(n)