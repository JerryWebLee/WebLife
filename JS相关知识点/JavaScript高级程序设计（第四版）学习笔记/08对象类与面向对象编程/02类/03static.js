class Person {
  constructor(age) {
    this.name = 'Bob'
    this.age = age
  }
  // static方法只能存在一个
  static locate() {
    console.log('class', this);
  }
  locate() { console.log('prototype', this); }

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
p1.locate()
Person.prototype.locate()
Person.locate()

// console.log(p1.name);
// console.log(p1.age);