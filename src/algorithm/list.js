/*
 * @Date: 2021-06-05 23:16:17
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-06 22:34:11
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
  if (array.length === 0) return null;
  const list = new ListNode(array[0], null);
  let pointer = list;
  for (let i = 1; i < array.length; i += 1) {
    pointer.next = new ListNode(array[i], null);
    pointer = pointer.next;
  }
  return list;
}

function skipNNodes(head, n) {
  let m = n;
  let pointer = head;
  while (m > 0 && pointer) {
    m -= 1;
    pointer = pointer.next;
  }

  return pointer;
}

function mergeTwoLists(l1, l2) {
  const arr1 = list2array(l1);
  const arr2 = list2array(l2);
  const res = arr1.concat(arr2).sort((a, b) => a - b);

  return array2list(res);
}

function hasCycle(list) {
  const nodeMap = new Map();
  let pointer = list;
  let pos = 0;
  if (pointer === null) return false;
  if (pointer.next === null) return false;
  while (pointer) {
    if (nodeMap.has(pointer) && nodeMap.get(pointer) < pos) return true;
    nodeMap.set(pointer, pos);
    pointer = pointer.next;
    pos += 1;
  }
  return false;
}

function reverseList(list) {
  const arr = list2array(list);
  const reverseArr = arr.reverse();
  const res = array2list(reverseArr);
  return res;
}

function getMiddle(list) {
  let pointer2 = list;
  let pointer1 = list;

  while (pointer2.next !== null && pointer2.next.next !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }

  return pointer2.next && pointer2.next.next === null ? pointer1.next : pointer1;
}

function removeNthFromEnd(head, n) {
  const arr = [];
  let pointer = head;
  while (pointer) {
    arr.push(pointer);
    pointer = pointer.next;
  }
  const index = arr.length - n;
  if (index === 0) {
    arr[0].next = null;
    return arr[1] || [];
  }
  arr[index - 1].next = arr[index].next;
  arr[index].next = null;

  return head;
}

function removeNthFromEndPreform(head, n) {
  const preHead = new ListNode(0);
  preHead.next = head;
  let pointer1 = preHead;
  let pointer2 = skipNNodes(head, n - 1);

  while (pointer2 && pointer2.next) {
    pointer2 = pointer2.next;
    pointer1 = pointer1.next;
  }
  pointer1.next = pointer1.next.next;
  return preHead.next;
}

function getIntersectionNode(headA, headB) {
  let pointerA = headA;
  let pointerB = headB;
  while (pointerA || pointerB) {
    if (pointerA === pointerB) return pointerA;
    pointerA = pointerA === null ? headB : pointerA.next;
    pointerB = pointerB === null ? headA : pointerB.next;
  }
  return null;
}

export {
  ListNode, mergeTwoLists, list2array, hasCycle, array2list, reverseList,
  getMiddle, removeNthFromEnd, removeNthFromEndPreform, getIntersectionNode,
};
