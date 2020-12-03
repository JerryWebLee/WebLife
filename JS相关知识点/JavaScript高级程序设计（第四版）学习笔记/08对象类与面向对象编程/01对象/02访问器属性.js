let person = {
}

Object.defineProperty(person, 'name', {
  configurable: true,
  enumerable: true,
  get() {
    if (this.name_ === undefined) {
      return new Error('姓名为空')
    }
    return this.name_
  },
  set(name) {
    this.name_ = name
  }
})

console.log(person.name);
person.name = 'Lucy'
console.log(person.name);
