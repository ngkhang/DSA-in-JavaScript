
//Implement a function that reverses a string using iteration...and then recursion!
function reverseStrLoop(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function reverseStrRecursion(str) {
  // Solution 1:
  let len = str.length - 1;
  if (len === 0) return str[len];
  else {
    let newStr = str.slice(0, len);
    return str[len] + reverseStrRecursion(newStr);
  }

  // Solution 2:
  // if (str === '') return '';
  // return reverseStrRecursion(str.substring(1)) + str.charAt(0);
}

let outputLoop = reverseStrLoop('yoyo mastery');
let outputRecursion = reverseStrRecursion('yoyo mastery');
console.log(outputLoop === outputRecursion);