function Super() {
  this.property = true
}

Super.prototype.getSuperValue = function () {
  return this.property
}

function Sub() {
  this.subProperty = false
}

Sub.prototype = new Super()

Sub.prototype.constructor = Sub
const sub = new Sub()
console.log(sub.subProperty);
console.log(Sub.prototype.constructor);