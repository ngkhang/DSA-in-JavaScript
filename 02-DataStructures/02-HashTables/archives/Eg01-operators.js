const dataExample = {
  name: 'ngkhang',
  age: 22,
  position: 'FE',
  magic: true,
  greeting: () => console.log('Hi'),
}

// Access: O(1)
console.log(dataExample.name);


// Insert: O(1) or O(n) - Hash collision
dataExample.salary = 1000;
console.log(dataExample);


// Delete: O(1)
delete dataExample.magic;
console.log(dataExample);
