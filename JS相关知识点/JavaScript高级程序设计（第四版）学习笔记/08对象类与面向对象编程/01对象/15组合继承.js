function Super() {
  this.arr = [1, 2, 3, 4]
}

Super.prototype.getSuperValue = function () {
  return this.arr
}

function Sub() {
  //  继承父类的构造函数属性和方法
  Super.call(this)
}
// 继承父类原型属性属性和方法
Sub.prototype = new Super()
//  将子类原型的构造函数指向自身
Sub.prototype.constructor = Sub

const sub = new Sub()
console.log(sub.arr);
console.log(sub.getSuperValue());
console.log(Sub.prototype.constructor);

console.log(Super.prototype.isPrototypeOf(sub));
console.log(sub instanceof Sub);
console.log(sub instanceof Super);
console.log(sub instanceof Function); // false
console.log(Sub instanceof Function);
console.log(Sub instanceof Super);  // false
console.log(sub instanceof Object);
console.log(Function instanceof Object); // true
console.log(Object instanceof Function); //true

console.log(Function.prototype.isPrototypeOf(Object)); //true
console.log(Object.prototype.isPrototypeOf(Function)); //true
console.log(Function.prototype.__proto__.__proto__);
console.log(Object.prototype.__proto__);
