function fn() {
  reset()
  // 删除某个位置的元素
  console.log(arr.splice(1, 1));
  console.log(arr);
  reset()
  console.log(arr.splice(1, 4, 5, 6, 7, 8));
  console.log(arr);
  reset()
  console.log(arr.splice(3, 1, 3333));
  console.log(arr);
}
// let arr = ['Lucy', 'Lily', 'Bob', 'Nacy', 'HanMeimei', 'LiLei']
let arr, reset = () => arr = [22, 3, 45, 234, 12, 31, 76, 445, 76, 887]
fn()
