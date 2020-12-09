// 正则算法
function changeStrStyle(str) {
  return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2) => {
    console.log('m: ' + m, 's1: ' + s1, 's2: ' + s2);
    return `${s1.toUpperCase()}${s2.toLowerCase()}`
  })
}

// 使用iterator
function changeStrStyle(str) {
  let arr = []
  for (word of str) {
    if (word === word.toUpperCase()) {
      word = word.toLowerCase()
    } else {
      word = word.toUpperCase()
    }
    arr.push(word)
  }
  let newStr = arr.join('')
  return newStr
}
console.log(changeStrStyle('abSdEmMDDkkLl'));