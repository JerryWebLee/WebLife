function Super(ele) {
  this.property = [1, 2, 3, 4]
  this.addEle = function () {
    this.property.push(ele)
  }
}

function Sub(ele) {
  Super.call(this, ele)
}
const sub = new Sub(5)

// Sub.prototype.constructor = Sub
sub.addEle()
console.log(sub.property);
console.log(Sub.prototype.constructor);

const sub1 = new Sub()
console.log(sub1.property);
/*
问题：
  必须在构造函数中定义方法，因此函数不能复用
  子类不能访问父类原型上定义的方法
 */