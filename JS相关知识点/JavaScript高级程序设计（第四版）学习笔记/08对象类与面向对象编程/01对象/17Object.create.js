const person = {
  name: 'Bob',
  arr: [1, 2, 3, 4]
}

const newP = Object.create(person)
newP.arr.push(5)
console.log(person);

const newP2 = Object.create(person, {
  age: {
    value: 12
  },
  gender: {
    value: '男'
  },
  name: {
    value: 'Lucy'
  }
})
console.log(newP2.name);

console.log(person);

console.log(newP2.__proto__ === person);