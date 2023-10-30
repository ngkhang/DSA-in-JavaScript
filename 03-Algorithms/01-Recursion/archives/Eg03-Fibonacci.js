// Index: 0 1 2 3 4 5
// Fib:   0 1 1 2 3 5

// 👉 O(n)
function lastNumberFibonacciLoop(n) {
  let fNum = 0;
  let sNum = 1;
  if (n < 2) return n;
  for (let step = 2; step < n + 1; step++) {
    [fNum, sNum] = [sNum, sNum + fNum]
  }
  return sNum;
}

// 👉 O(2^n)
function lastNumberFibonacciRecursion(n) {
  if (n < 2) return n;
  return lastNumberFibonacciRecursion(n - 1) + lastNumberFibonacciRecursion(n - 2)
}

console.log(lastNumberFibonacciLoop(5));      // 5
console.log(lastNumberFibonacciRecursion(5)); // 5