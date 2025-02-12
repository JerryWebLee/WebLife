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
      }
    }
  }
}

let counter = new Counter(3)
for (let i of counter) {
  console.log(i);
}

console.log('--------------');
for (let i of counter) {
  console.log(i);
}