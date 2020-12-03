function fn() {
  reset()
  // console.log(arr.every((item, index, arr) => {
  //   console.log(index, arr);
  //   return item > 1
  // }));
  // console.log(arr.filter((item, index, arr) => {
  //   return item > 30
  // }));
  // console.log(arr.some((item, index, arr) => {
  //   return item > 30
  // }));
  arr.forEach((item) => {
    console.log(item * 2);
  })

}
// let arr = ['Lucy', 'Lily', 'Bob', 'Nacy', 'HanMeimei', 'LiLei']
let arr, reset = () => arr = [22, 3, 45, 234, 12, 31, 76, 445, 76, 887]
fn()
