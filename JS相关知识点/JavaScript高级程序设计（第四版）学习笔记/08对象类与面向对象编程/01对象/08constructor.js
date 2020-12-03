function Person() {

}

let person = new Person()
// console.log(person);
// console.log(Person.constructor);
// console.log(Person.prototype.constructor === Person);
console.log(Person.prototype.isPrototypeOf(person));
console.log(person.__proto__);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.getPrototypeOf(person));