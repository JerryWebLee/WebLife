function* generatorFn() {
  return 'foo'
}

const generatorObj = generatorFn()
console.log(generatorObj);
console.log(generatorObj.next());
console.log(generatorFn()[Symbol.iterator]);