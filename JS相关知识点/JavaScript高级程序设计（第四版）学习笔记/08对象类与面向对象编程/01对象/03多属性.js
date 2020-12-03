let person = {}

Object.defineProperties(person, {
  name: {
    value: 'Bob',
  },
  age: {
    value: 22
  },
  gender: {
    value: '男'
  },
  prop: {
    value: 'student'
  }
})

console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.hasOwnProperty('name'));
console.log(Object.propertyIsEnumerable('age'));
