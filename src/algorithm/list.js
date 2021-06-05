/*
 * @Date: 2021-06-05 23:16:17
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-06 00:04:24
 * @FilePath: \review\src\algorithm\list.js
 */
class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
function list2array(list) {
  const array = [];
  let pointer = list;
  while (pointer !== null) {
    array.push(pointer.value);
    pointer = pointer.next;
  }
  return array;
}
function array2list(array) {
  const list = new ListNode(array[0], null);
  let pointer = list;
  for (let i = 1; i < array.length; i += 1) {
    pointer.next = new ListNode(array[i], null);
    pointer = pointer.next;
  }
  return list;
}
function mergeTwoLists(l1, l2) {
  const arr1 = list2array(l1);
  const arr2 = list2array(l2);
  const res = arr1.concat(arr2).sort((a, b) => a - b);

  return array2list(res);
}

export { ListNode, mergeTwoLists, list2array };
