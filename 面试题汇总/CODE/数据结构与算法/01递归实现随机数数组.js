/*
  用递归算法实现，数组长度为5且元素的随机数在2 - 32间不重复的值
    描述：
        这一题是起源题，把考点拆成了4个小项；需要侯选人用递归算法实现；限制15行代码以内实现；限制时间10分钟内完成：
          1. 生成一个长度为5的空数组arr。
          2. 生成一个（2－32）之间的随机整数num。
          3. 把随机数num插入到数组arr内，如果数组arr内已存在与num相同的数字，则重新生成随机数num并插入到arr内[需要使用递归实现，不能使用for / while等循环]
          4. 最终输出一个长度为5，且内容不重复的数组arr。
*/
var arr = new Array(5)
var num = randomNumber()
var i = 0
randomArr(arr, num)
function randomArr(arr, num) {
  if (arr.indexOf(num) === -1) {
    arr[i] = num
    i++
  } else {
    num = randomNumber()
  }
  if (i >= arr.length) {
    console.log(arr);
    return;
  } else {
    randomArr(arr, num)
  }
}
function randomNumber() {
  return Math.floor(Math.random() * 31 + 2)
}
