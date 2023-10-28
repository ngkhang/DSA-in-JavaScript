// Rule 1: Always worst Case
// Rule 2: Remove Constants
function printHaftElement(number) {
  let size = Math.floor(number / 2); // 1
  for (let idx = 0; idx < size; idx++) {
    console.log(idx);     // n/2
  }
}
// 1 + n/2
// -> O(1 + n/2) = O(n/2) = O(n)


// Rule 3: Different inputs should have different variables.
// Steps in order -> O(n + m)
function stepLoop(arr1, arr2) {
  arr1.forEach(ele => console.log(ele)); // O(n)
  arr2.forEach(ele => console.log(ele)); // O(m)
}

// Nested steps -> -> O(n^2)
function nestedLoop(arr) {
  for (let idx = 0; idx < arr; idx++) {
    for (let jdx = 0; jdx < arr; jdx++) {
      console.log(arr[idx], arr[jdx]);
    }
  }
}


// Rule 4: Drop Non-dominant terms
function rule4(arr) {
  arr.forEach(num => console.log(num));

  arr.forEach(num1 => {
    arr.forEach(num2 => console.log(num1 + num2))
  });
}
// O(n + n^2) -> O(n^2)