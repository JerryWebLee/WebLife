// 如果想列出所有实例属性，无论是否可以枚举，都可以使用Object.getOwnPropertyNames()
let ss = Symbol('ss')
let o = {}
let obj = {
  a: "aaa",
  b: 'bbb',
  c: 'ccc',
  d: [1, 2, 3, 4],
  [ss]: 'ssss',
  [o]: { id: 1 }
}

Object.defineProperty(obj, 'e', {
  enumerable: false,
  value: 'eee'
})

// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertySymbols(obj));

// console.log(Object.values(obj));
// console.log(Object.entries(obj));
const map = new Map(Object.entries(obj))

for (let item of map.values()) {
  console.log(item);
}