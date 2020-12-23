/**
 * 
 * @param arr int整型一维数组 the array
 * @return int整型
 */
// const arr = [2, 2, 3, 4, 3]
// const arr = [8, 5, 7, 2, 2, 3, 4, 3]
const arr = [8, 5, 2, 7, 2, 11, 23, 34, 12, 1, 1, 2, 3, 4, 3]

console.log(maxLength(arr));
function maxLength(arr) {
  // write code here
  let s = new Set(arr)
  let targetL = s.size
  if (targetL === arr.length) {
    return targetL
  }

  for (let j = targetL; j > 0; j--) {
    let splitArrs = splitArr(arr, targetL)
    for (let i = 0; i < splitArrs.length; i++) {
      s = new Set(splitArrs[i])
      targetL = s.size
      if (targetL === splitArrs[i].length) {
        return targetL
      }
    }
  }
}

// 根据不重复的tragetL长度分离数组
function splitArr(arr, targetL) {
  const length = arr.length
  const newL = length - targetL + 1
  const splitArrs = new Array(newL)
  for (let i = 0; i < newL; i++) {
    let item = new Array(targetL)
    for (let j = 0; j < targetL; j++) {
      item[j] = arr[j + i]
    }
    splitArrs[i] = item
  }
  return splitArrs
}




// maxLength(arr)
// module.exports = {
//   maxLength: maxLength
// };