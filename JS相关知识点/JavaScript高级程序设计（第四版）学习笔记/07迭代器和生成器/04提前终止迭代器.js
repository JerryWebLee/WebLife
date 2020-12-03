class Counter {
  constructor(limit) {
    this.limit = limit
  }

  [Symbol.iterator]() {
    let count = 1, limit = this.limit
    return {
      next() {
        if (count <= limit) {
          return {
            done: false, value: count++
          }
        } else {
          return {
            done: true, value: undefined
          }
        }
      },
      // 当迭代器未遍历完全就提前终止的时候，会自动触发return()方法
      return() {
        console.log('提前终止iterator');
        return { done: true }
      }
    }
  }
}

let counter = new Counter(6)
for (let i of counter) {
  if (i > 3)
    // break
    // throw 'err'
    // return false
    continue
  console.log(i);
}

for (let i of counter) {
  console.log(i);
}
