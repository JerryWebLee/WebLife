function fn(arr) {
  console.log(arr.sort());
  console.log(arr.sort((item1, item2) => {
    console.log(item1, item2);
    return item1 - item2
  }))
}
// let arr = ['Lucy', 'Lily', 'Bob', 'Nacy', 'HanMeimei', 'LiLei']
let arr = [22, 3, 45, 234, 12, 31, 76, 445, 76, 887]
fn(arr)
