const person = {
  name: 'Lucy',
  age: 23
}

console.log(person.name)
// 使用[]语法的时候，属性名要加引号
console.log(person['name']);

let gender = 'sex'
person[gender] = '男'
// 当属性名为变量表示的时候，如果要通过变量获取该属性值，必须使用[]语法
console.log(person[gender]);
console.log(person.sex);