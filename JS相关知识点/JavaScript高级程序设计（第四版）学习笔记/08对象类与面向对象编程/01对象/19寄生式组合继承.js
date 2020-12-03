// 组合继承问题：子类原型Sub.prototype上有一组属性，占用内存，而且用不到
/* function Super(name) {
  this.name = name
  this.color = ['red', 'yellow', 'green']
}

Super.prototype.sayName = function () {
  console.log(this.name);
}

function Sub(name, age) {
  Super.call(this)
  this.age = age
}

Sub.prototype = new Super()
Sub.prototype.constructor = Sub

Sub.prototype.sayAge = function () {
  console.log(this.age);
}

console.log(Sub.prototype.name);
console.log(Sub.prototype.color);
const sub = new Sub()
sub.color.push(4)
console.log(sub.color);
console.log(Sub.prototype.color); */

// 寄生式组合继承
// 避免了Sub.prototype上不必要页用不到的属性

function inheritProptype(Super, Sub) {
  // 创建父类原型对象的原型实例对象
  const prototype = Object.create(Super.prototype)
  // 增强原型实例对象，将原型实例对象的构造函数指向子类Sub
  prototype.constructor = Sub
  // 将原型实例对象赋值给子类Sub
  Sub.prototype = prototype
}

function Super(name) {
  this.name = name
  this.color = ['red', 'yellow', 'green']
}

Super.prototype.sayName = function () {
  console.log(this.name);
}

function Sub(name, age) {
  Super.call(this, name)
  this.age = age
}

inheritProptype(Super, Sub)

const sub = new Sub('Lily', 13)
console.log(sub.name);
console.log(sub.age);
sub.sayName()
console.log(Object.hasOwnProperty(Sub.prototype, 'name')); //false
console.log(Object.hasOwnProperty(Sub.prototype, 'color')); //false