function Person() {
  this.age = 12
}


Person.prototype.name = 'Bob'

const person = new Person()

console.log(person.name);
console.log(person.hasOwnProperty('name'));
console.log(person.__proto__.hasOwnProperty('name'));
console.log('name' in person);

console.log(Object.keys(person));


