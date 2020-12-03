let arr = [1, 2, 3, 4]

let iter1 = arr[Symbol.iterator]()
console.log(iter1);
let iter2 = iter1[Symbol.iterator]()
console.log(iter1 === iter2);