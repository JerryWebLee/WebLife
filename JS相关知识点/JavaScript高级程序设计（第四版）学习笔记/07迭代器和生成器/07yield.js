function* generatorFn(n) {
  while (n) {
    yield n--
  }
}

const generatorObj = generatorFn(5)

for (let i of generatorObj) {
  console.log(i);
}

// const result1 = generatorObj.next()
// console.log(result1);

// const result2 = generatorObj.next()
// console.log(result2);

// const result3 = generatorObj.next()
// console.log(result3);

