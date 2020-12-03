function fn() {
  reset()
  console.log(arr.find((item) => { return item > 30 }));
  console.log(arr.findIndex((item) => { return item > 30 }));
}
// let arr = ['Lucy', 'Lily', 'Bob', 'Nacy', 'HanMeimei', 'LiLei']
let arr, reset = () => arr = [22, 3, 45, 234, 12, 31, 76, 445, 76, 887]
fn()
