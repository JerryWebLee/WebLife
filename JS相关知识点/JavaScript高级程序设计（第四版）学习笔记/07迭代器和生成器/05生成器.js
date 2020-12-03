function* generatorFn() {
}
function* generatorFn() {
}
let generatorFn = function* () {

}

let foo = {
  * generatorFn() { }
}

class Foo {
  * generatorFn() { }
}

class bar {
  static * generatorFn() { }
}