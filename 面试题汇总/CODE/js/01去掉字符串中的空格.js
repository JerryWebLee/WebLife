// 正则表达式方法
// function trimStr(str) {
//   str = str.trim()
//   str = str.replace(/\s/g, '')
//   return str
// }

var str = '   asas sad   as ss sd    '
console.log(trimStr(str));
function trimStr(str) {
  if (!str) return ''
  return str.split('').filter(item => item !== ' ').join('')
}
