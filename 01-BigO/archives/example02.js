// Example: O(c) - constant
let a = 10;
const b = 12;

let i = 0;
while (i < 1000) {
  i += 1;
}

// Example: O(n) - linear
let step = 0;
while (i < n) {
  i += 1;
}

while (i < n) {
  i = i + 10; // 👉 F(n) = n/10 -> O(n)
}

// Example: O(n^2)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // ...
  }
}
// 👉 f(n) = n*n -> O(f(n)) = n^2

for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    // ...
  }
}
// 👉 f(n) = n*(n + (n-1) + (n-2)+ ... + 2 + 1)
//         = n*((n+1)/2)
//         = (n^2)/2 + n/2
// -> O(f(n)) = n^2

// Example:
for (let i = 0; i < n; i++) {
  for (let j = i; j < 2 * n; j++) { }
  for (let j = i; j < 3 * n; j++) { }
}
// 👉 f(n) = n * (2*n + 3*n) = n * 5*n
// -> O(f(n)) = n^2

for (let i = 0; i < n; i++) {
  for (let j = i; j < 21; j++) { }
  for (let j = i; j < n * n; j += 2) { }
}
// 👉 f(n) = n * (21 + (n*n)/2)
// -> O(f(n)) = n^3

// Example: O(n*log(n))
let low = 0, high = n - 1;
while (low <= high) {
  let mid = (high + low) / 2;
  if (arr[mid] === value) return mid;
  else if (arr[mid] < value) low = mid + 1;
  else high = mid - 1;
}
return - 1;
// 👉 f(n) = n*log(n)
// -> O(f(n)) = n*log(n)