const map = new Map([
  ['key1', 'val1'],
  ['key2', 'val2'],
  ['key3', 'val3'],
  ['key4', 'val4'],
])

console.log(map);
map.set('key5', 'val5')
// console.log(map.size);
// console.log(map.get('key2'));
// console.log(map.has('key2'))
// console.log(map);
console.log(map.entries === map[Symbol.iterator]);

// for (let item of map.entries()) {
//   console.log(item);
// }

// for (let item of map[Symbol.iterator]()) {
//   console.log(item);
// }
map.delete('key3')
console.log(...map);
console.log(...map.keys());
console.log(...map.values());

// const map1 = new Map({
//   [Symbol.iterator]: function* () {
//     yield ['key1', 'val1']
//     yield ['key2', 'val2']
//     yield ['key3', 'val3']
//     yield ['key4', 'val4']
//   }
// })

// console.log(map1);