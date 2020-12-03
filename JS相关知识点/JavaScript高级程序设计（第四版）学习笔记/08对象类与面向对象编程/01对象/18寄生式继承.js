function createAnother(original) {
  let clone = Object.create(original)
  clone.sayHi = function () {
    console.log('hi');
  }
  return clone
}

const person = {
  name: 'Bob',
  arr: [1, 2, 3, 4]
}

const newP1 = createAnother(person)
console.log(newP1);
newP1.sayHi()

// 存在问题：没声明一个对象就会创建一个对象方法，浪费内存
const newP2 = createAnother(person)
console.log(newP2);
newP2.sayHi()