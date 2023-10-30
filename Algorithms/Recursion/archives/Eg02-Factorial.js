function findFactorialRecursion(number) {
  if (number === 2) return 2;
  return number * findFactorialRecursion(number - 1);
}

function findFactorialLoop(number) {
  let output = 1;
  for (let index = 2; index <= number; index++) {
    output *= index;
  }
  return output;
}


console.log(findFactorialRecursion(4)); // 24
console.log(findFactorialLoop(4));      // 24