function* generatorFn() {
  yield 'aaa'
  yield* [1, 2, 3, 4]
  yield 'bbb'
}

const generatorObj = generatorFn()
for (let item of generatorObj) {
  console.log(item);
}

