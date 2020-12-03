let NAME = 'name', AGE = 'age', GENDER = 'gender', SAYNAME = 'sayName'

const person = {
  [NAME]: 'Bob',
  [AGE]: 23,
  [GENDER]: '男',
  [SAYNAME]() {
    console.log(this.name);
  }
}
console.log(person);
person.sayName()