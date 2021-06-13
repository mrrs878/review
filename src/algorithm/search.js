/*
 * @Date: 2021-06-13 17:01:16
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-13 17:39:05
 * @FilePath: \review\src\algorithm\search.js
 */
export function binarySearch(array, item) {
  const tmp = array.sort();
  let start = 0;
  let end = tmp.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (item === tmp[mid]) return mid;
    if (item < tmp[mid]) {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    } else {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    }
  }

  return -1;
}

export function kthSmallest(root, k) {
  let res = null;
  let n = k;

  function inOrderTraverseNode(node) {
    while (node !== null && n > 0) {
      inOrderTraverseNode(node.left);
      n -= 1;
      if (n === 0) {
        res = node.val;
        return;
      }
      inOrderTraverseNode(node.right);
    }
  }

  inOrderTraverseNode(root);

  return res;
}
