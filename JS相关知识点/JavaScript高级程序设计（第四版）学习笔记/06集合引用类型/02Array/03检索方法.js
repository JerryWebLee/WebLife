function fn(arr, num) {
  console.log(arr.keys());
  console.log(Array.from(arr.keys()));

  console.log(Array.from(arr.values()));
  console.log(Array.from(arr.entries()));

  Array.of(...arr.entries()).forEach(item => {
    console.log(item);
  });
  let count = 0
  Array.of(...arguments).forEach(item => {
    console.log(item);
    count++
  })
  console.log(count);
}
fn([0, 1, 2, 3, 4, 5, 6, 7], 11)