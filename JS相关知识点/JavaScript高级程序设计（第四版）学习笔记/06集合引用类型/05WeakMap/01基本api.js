const wm = new WeakMap()

let key1 = {}, key2 = {}, key3 = { id: 1, name: 'Bob' }
wm.set(key1, 'val1').set(key2, 'val2').set(key3, 'val3')
console.log(wm);
console.log(wm.get(key1));
// console.log(...wm); wm不可迭代
// 键置为空，对应的value也会被垃圾回收期回收
key1 = null
console.log(wm.get(key1));