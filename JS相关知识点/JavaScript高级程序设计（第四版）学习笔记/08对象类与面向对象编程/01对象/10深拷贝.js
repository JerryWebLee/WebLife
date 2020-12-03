const obj = {
  a: 'aaa',
  b: {
    bb1: 'BBBB1',
    bb2: 'BBBB2',
    bbb: {
      a: 'AAAA',
      fn() {
        let i = 10
      }
    }
  },
  c: [1, 2, 3, 4]
}

function deepCopy(initial) {

  if (!isObj(initial)) {
    return initial
  }
  const copyObj = Array.isArray(initial) ? [] : {}
  for (let item in initial) {
    copyObj[item] = isObj(initial[item]) ? deepCopy(initial[item]) : initial[item]
  }
  return copyObj
}

function isObj(initial) {
  return initial instanceof Object
}

const copyObj = deepCopy(obj)
console.log(copyObj);
console.log(copyObj === obj);