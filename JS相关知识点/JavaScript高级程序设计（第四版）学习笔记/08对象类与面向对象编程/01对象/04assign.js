// let person = {
//   name: 'Bob',
//   age: 29
// }

// let person2 = {
//   name: 'Lucy',
//   age: 27,
//   salary: 16000
// }
// const result = Object.assign(person, person2)
// person2.name = 'Lili'
// console.log(person2);
// console.log(result);
// console.log(person === result);

const a = {
  a: 'aaa'
}
const b = {
  b: 'bbb',
  bb: {
    a: 'AAA',
    b1: 'b1',
    b2: 'b2',
    b3: {
      bbb: 'bbb'
    }
  }
}

const obj = {}

const result2 = Object.assign(obj, a, b)
console.log(result2 === obj);
obj.c = 'ccc'
console.log(result2);

