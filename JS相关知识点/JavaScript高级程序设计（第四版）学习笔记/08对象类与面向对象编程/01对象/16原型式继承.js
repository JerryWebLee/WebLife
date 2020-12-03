const person = {
  name: 'Bob',
  arr: [1, 2, 3, 4]
}

// 原型式继承，本质是浅拷贝
function object(o) {
  function Fun() { }
  Fun.prototype = o
  return new Fun()
}

const p1 = object(person)
p1.name = 'Lucy'
p1.arr.push(5)
console.log(person);