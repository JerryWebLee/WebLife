class Foo {
  constructor() {
    console.log(this);
  }
  fun() {
    console.log(this);
  }
  get myBar() {

  }
  static myStatic() { }

}
const foo = new Foo()

console.log(foo.__proto__ === Foo.prototype);

const newfoo = new foo.constructor()
console.log(newfoo);