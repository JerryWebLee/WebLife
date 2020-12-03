class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayName() {
    console.log(this.name);
  }
}

class Students extends Person {
  constructor(name, age, id) {
    super(name, age)
    this.id = id
    console.log(this);
  }
  static createStudentWidthId(id) {
    return new Students('Lucy', 33, id)
  }
}
const s = new Students('Bob', 23, 1)
// console.log(s instanceof Person);
