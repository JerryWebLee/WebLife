class Person {
  constructor(age) {
    this.name = 'Bob'
    this.age = age
  }

  set name(newName) {
    if (newName === this.name) {
      console.log('set重名');
      return
    }
    console.log('set');
    this.name_ = newName
  }

  get name() {
    console.log('get');
    return this.name_
  }
}

const p1 = new Person(13)
p1.name = 'Bob'

// console.log(p1.name);
// console.log(p1.age);