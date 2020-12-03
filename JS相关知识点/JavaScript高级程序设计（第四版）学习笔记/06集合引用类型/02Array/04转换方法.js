function fn(arr, num) {

  console.log(arr.valueOf() === arr);
  console.log(arr.toString());
  console.log(arr.toLocaleString());
  console.log(arr.join('||'));
  const arrCopy = arr.join('||').split('||')
  console.log(arrCopy);
  console.log(arrCopy == arr);

  let arr1 = arr
  arr1.length--
  num--
}
let arr = ['Lucy', 'Lily', 'Bob', 'Nacy', 'HanMeimei', 'LiLei']
let num = 11
fn(arr, num)
console.log('-----------------');
console.log(arr);
console.log(num);
