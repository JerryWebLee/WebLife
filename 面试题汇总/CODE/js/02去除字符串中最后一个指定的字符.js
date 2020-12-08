// 去除字符串中最后一个指定的字符

// 1.String和Array原生方法
// function deleteLastWord(word, str) {
//   return str.split('').reverse().join('').replace(word, '').split('').reverse().join('')
// }

// 2.String原生方法
// function deleteLastWord(word, str) {
//   var index = str.lastIndexOf(word)
//   return str.substring(0, index) + str.substring(index + 1)
// }

// 3.正则表达式方法
function deleteLastWord(word, str) {
  return str.replace(new RegExp(`${word}(?=[^${word}]*$)`, `u`), ``);
}

var str = 'wehdssadsftrg'
console.log(deleteLastWord('s', str));