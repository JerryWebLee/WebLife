function GetLeastNumbers_Solution(input, k) {
  // write code here
  var newArr = new Array(k)
  //     input = input.sort((item1,item2)=>{
  //         return item1-item2
  //     })
  let L = input.length - 1
  for (let n = L; n > 0; n--) {
    for (let j = 0; j < n; j++) {
      if (input[j] > input[j + 1]) {
        let temp = input[j]
        input[j] = input[j + 1]
        input[j + 1] = temp
      }
    }
  }

  for (let i = 0; i < k; i++) {
    newArr[i] = input[i]
  }
  return newArr
}

GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4)

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
function hasCycle(head) {
  // write code here
  let ele
  if (head.next()) {
    ele = head.next()

    while (ele.next()) {
      ele = ele.next()
      if (ele.next() === head) {
        return true
      }
    }
  }

  return false
}
module.exports = {
  hasCycle: hasCycle
};