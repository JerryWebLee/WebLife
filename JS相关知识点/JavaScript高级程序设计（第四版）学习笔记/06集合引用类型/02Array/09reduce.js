function fn() {
  reset()
  let count = 0
  const result = arr.reduce((pre, curr, index) => {

    count = curr > 30 ? 1 : 0
    return pre + count
  }, 0)
  console.log(result);
}
// let arr = ['Lucy', 'Lily', 'Bob', 'Nacy', 'HanMeimei', 'LiLei']
let arr, reset = () => arr = [22, 3, 45, 234, 12, 31, 76, 445, 76, 887]
fn()
