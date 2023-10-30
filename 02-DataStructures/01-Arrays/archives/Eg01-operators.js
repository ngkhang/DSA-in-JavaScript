const arr = ['a', 1, 'bc'];
// Access -> O(1)
console.log(arr[1]);


// Insert
arr.unshift('start');       // unshift() -> O(n)
console.log(arr);

arr.splice(2, 0, 'splice'); // splice() -> O(n)
console.log(arr);


// Append
arr.push('new');            // push() -> O(1)
console.log(arr);


// Delete
arr.pop();                  // pop() -> O(1)
console.log(arr);

arr.shift();                // shift() -> O(n)
console.log(arr);