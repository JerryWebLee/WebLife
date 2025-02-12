class Counter {
  constructor(limit) {
    this.count = 1
    this.limit = limit
  }
  next() {
    if (this.count <= this.limit) {
      return {
        done: false, value: this.count++
      }
    } else {
      return {
        done: true, value: undefined
      }
    }
  }
  [Symbol.iterator]() {
    return this
  }
}

let counter = new Counter(3)
for (let i of counter) {
  console.log(i);
}
// 这样创建的迭代器只能迭代一次
console.log('--------------');
for (let i of counter) {
  console.log(i);
}