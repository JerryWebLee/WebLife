let obj = {
  id: 1
}

let person = Object.create(obj)

console.log(person);
person.name = 'Bob'

console.log(person);
console.log(person.id);
console.log(Object.getPrototypeOf(person) === obj);


// delete person.name
// console.log(person.name);
console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('id'));