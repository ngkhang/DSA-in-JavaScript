function reverse(str) {
  if (typeof str !== 'string' || str.length <= 1)
    return 'string unvaild';

  // Solution 1 -> O(n)
  let output = '';
  for (let idx = str.length - 1; idx >= 0; idx--) {
    output += str[idx];
  }
  return output;

  // Solution 2
  // return [...str].reverse().join('');
}

console.log(reverse('Hi! JavaScript is fun'));
