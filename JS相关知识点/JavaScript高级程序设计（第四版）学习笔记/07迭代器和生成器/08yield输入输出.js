// function* generatorFn(initial) {
//   console.log(initial);
//   console.log(yield);
//   console.log(yield);
// }

function* generatorFn() {
  return yield 'aaa'
}

const generatorObj = generatorFn()

console.log(generatorObj.next());
console.log(generatorObj.next('ccc'));
