function fn(a, b, c, d) {
  console.log(arguments);
  console.log(typeof arguments);
  // 报错，因为arguments不是数组对象
  // arguments.forEach(element => {})
  const arr = Array.from(arguments)
  console.log(arr);
  arr.forEach(item => { console.log(item); })

  const arr1 = Array.from('JerryLee')
  console.log(arr1);

  const m = new Map().set('happy', 'haha').set('hurt', 'cry')
  const arr2 = Array.from(m)
  console.log(arr2);

  const s = new Set().add(1).add(2).add(3)
  const arr3 = Array.from(s)
  console.log(arr3);
  const objIterator = {
    name: 'Bob',
    age: 13,
    gender: '男',
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 3
  }

  const arr4 = Array.from(objIterator)
  console.log(arr4);

  const arr5 = [1, 2, 3, 4]
  console.log(Array.from(arr5, (item) => item ** 3));

  const arr6 = Array.prototype.slice.call(arguments)
  console.log(arr6);
  console.log(arr6 instanceof Array); //true

  const arr7 = Array.of(arguments)
  console.log(arr7 instanceof Array); //true
  console.log(Array.isArray(arr7)); // true
}
fn(1, 2, 3, 4)