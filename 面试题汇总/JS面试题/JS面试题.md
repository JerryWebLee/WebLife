# JS面试题

------

## 目录

* [001写一个方法去掉字符串中的空格](#001写一个方法去掉字符串中的空格)

* [002去除字符串中最后一个指定的字符](#002去除字符串中最后一个指定的字符)

* [003去除字符串中最后一个指定的字符](#003去除字符串中最后一个指定的字符)

* [004写一个把字符串大小写切换的方法](#004写一个把字符串大小写切换的方法)

  

------

## 001写一个方法去掉字符串中的空格

写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格

### 代码

#### 正则表达式方法

```js
function trimStr(str) {
  str = str.trim()
  str = str.replace(/\s/g, '')
  return str
}
var str = '   asas sa   das ss sd    '
console.log(trimStr(str));
```

#### filter方法

```js
var str = '   asas sad   as ss sd    '
console.log(trimStr(str));
function trimStr(str) {
  if (!str) return ''
  return str.split('').filter(item => item !== ' ').join('')
}
```

* [返回目录](#目录)

------

## 002去除字符串中最后一个指定的字符

### 原生方法

#### 1.性能问题

```js
function deleteLastWord(word, str) {

 return str.split('').reverse().join('').replace(word, '').split('').reverse().join('')

}
var str = 'wehdssadsftrg'
console.log(deleteLastWord('s', str));
```

#### 2.String原生方法

```js
var str = 'wehdssadsftrg'
console.log(deleteLastWord('s', str));
function deleteLastWord(word, str) {
  var index = str.lastIndexOf(word)
  return str.substring(0, index) + str.substring(index + 1)
}
```

#### 3.正则表达式方法

```js
function deleteLastWord(word, str) {
 return str.replace(new RegExp(`${word}(?=[^${word}]*$)`, `u`), ``);
}
var str = 'wehdssadsftrg'
console.log(deleteLastWord('s', str));
```

* [返回目录](#目录)

------

## 003写一个方法把下划线命名转成大驼峰命名

### 原生方法1：

```js
function toCamel(name) {

 var arr = name.split('_')

 arr.forEach((item, index) => {

  if (item === '') { arr.splice(index, 1) }

 });

 return arr.map((item, index) => (index === 0 ? item : item[0].toUpperCase() + item.slice(1))).join('')

}

console.log(toCamel('_aaa_bbb__ccc_'));
```

### 原生方法2：

```js
const toCamel = str =>
  str
    .split("_")
    .filter(s => !!s)
    .map((s, index) => (index === 0 ? s : s[0].toUpperCase() + s.slice(1)))
    .join("");
```

* [返回目录](#目录)

------

## 004写一个把字符串大小写切换的方法

### 正则算法

```js
// 正则算法
function changeStrStyle(str) {
  return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2) => {
    console.log('m: ' + m, 's1: ' + s1, 's2: ' + s2);
    return `${s1.toUpperCase()}${s2.toLowerCase()}`
  })
}
console.log(changeStrStyle('abSdEmMDDkkLl'));
```

### 使用iterator

```js
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
```



* [返回目录](#目录)

------

