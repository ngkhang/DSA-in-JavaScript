
// Recursion without return
let count1 = 0;
function recursionNotReturn() {
  console.log(count1);
  if (count1 > 1) return 'done!'

  count1++;
  recursionNotReturn();
}
console.log(recursionNotReturn());
/*
  0
  1
  2
  undefined
*/

// Recursion with return
let count2 = 0;
function recursionReturn() {
  console.log(count2);
  if (count2 > 1) return 'done!'

  count2++;
  return recursionReturn();
}
console.log(recursionReturn());
/*
  0
  1
  2
  done!
*/