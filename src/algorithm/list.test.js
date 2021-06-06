/*
 * @Date: 2021-06-05 23:24:02
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-06 22:31:08
 * @FilePath: \review\src\algorithm\list.test.js
 */
import {
  hasCycle, list2array, ListNode, mergeTwoLists, array2list, reverseList, getMiddle,
  removeNthFromEnd,
  removeNthFromEndPreform,
  getIntersectionNode,
} from './list';

describe('list problems', () => {
  test('mergeTwoLists case1', () => {
    const list1 = new ListNode(1,
      new ListNode(2,
        new ListNode(4, null)));
    const list2 = new ListNode(1,
      new ListNode(3,
        new ListNode(4,
          new ListNode(7, null))));
    const res = new ListNode(1,
      new ListNode(1,
        new ListNode(2,
          new ListNode(3,
            new ListNode(4,
              new ListNode(4,
                new ListNode(7, null)))))));
    const tmp = mergeTwoLists(list1, list2);
    expect(list2array(tmp)).toEqual(list2array(res));
  });

  test('mergeTwoLists case2', () => {
    const list1 = null;
    const list2 = new ListNode(0, null);
    const res = new ListNode(0, null);
    const tmp = mergeTwoLists(list1, list2);
    expect(list2array(tmp)).toEqual(list2array(res));
  });
  test('mergeTwoLists case3', () => {
    const list1 = null;
    const list2 = null;
    const res = null;
    const tmp = mergeTwoLists(list1, list2);
    expect(list2array(tmp)).toEqual(list2array(res));
  });

  test('hasCycle case1', () => {
    const node1 = new ListNode(1, null);
    const node2 = new ListNode(2, null);
    const node3 = new ListNode(3, null);
    const node4 = new ListNode(4, null);

    expect(hasCycle(null)).toEqual(false);
    expect(hasCycle(node1)).toEqual(false);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    expect(hasCycle(node1)).toEqual(false);

    node4.next = node2;
    expect(hasCycle(node1)).toEqual(true);

    node3.next = node3;
    expect(hasCycle(node1)).toEqual(true);
  });

  test('hasCycle case2', () => {
    const list = array2list(
      [-21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6,
        29, -12, 5, 9, 20, 14, 14, 2, 13, -24, 21, 23, -21, 5],
    );
    expect(hasCycle(list)).toEqual(false);
  });

  test('reverseList case1', () => {
    const arr = [1, 2, 3, 4, 5];
    const list = array2list(arr);
    const res = reverseList(list);
    expect(list2array(res)).toEqual(arr.reverse());
  });

  test('getMiddle case1', () => {
    const arr = [1, 2, 3, 4, 5];
    const list = array2list(arr);
    const res = getMiddle(list);
    expect(list2array(res)).toEqual([3, 4, 5]);
  });
  test('getMiddle case2', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const list = array2list(arr);
    const res = getMiddle(list);
    expect(list2array(res)).toEqual([4, 5, 6]);
  });

  test('removeNthFromEnd case1', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const list = array2list(arr);
    const res1 = removeNthFromEnd(list, 3);
    expect(list2array(res1)).toEqual([1, 2, 3, 5, 6]);

    const res2 = removeNthFromEnd(list, 1);
    expect(list2array(res2)).toEqual([1, 2, 3, 5]);

    const res3 = removeNthFromEnd(list, 4);
    expect(list2array(res3)).toEqual([2, 3, 5]);
  });
  test('removeNthFromEnd case2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 4, 5, 1, 9, 4, 1];
    const res1 = removeNthFromEnd(array2list(arr), 3);
    arr.splice(arr.length - 3, 1);
    expect(list2array(res1)).toEqual(arr);

    const res2 = removeNthFromEnd(array2list(arr), 1);
    arr.splice(arr.length - 1, 1);
    expect(list2array(res2)).toEqual(arr);

    const res3 = removeNthFromEnd(array2list(arr), arr.length);
    arr.splice(arr.length - arr.length, 1);
    expect(list2array(res3)).toEqual(arr);
  });
  test('removeNthFromEndPerform case1', () => {
    const arr = [1, 2, 3, 4, 5, 6, 4, 5, 1, 9, 4, 1];
    const res1 = removeNthFromEndPreform(array2list(arr), 3);
    arr.splice(arr.length - 3, 1);
    expect(list2array(res1)).toEqual(arr);

    const res2 = removeNthFromEndPreform(array2list(arr), 1);
    arr.splice(arr.length - 1, 1);
    expect(list2array(res2)).toEqual(arr);

    const res3 = removeNthFromEndPreform(array2list(arr), arr.length);
    arr.splice(arr.length - arr.length, 1);
    expect(list2array(res3)).toEqual(arr);
  });

  test('getIntersectionNode case1', () => {
    const node1 = new ListNode(1, null);
    const node2 = new ListNode(2, null);
    const node3 = new ListNode(3, null);
    const node4 = new ListNode(4, null);
    const node5 = new ListNode(5, null);
    const node6 = new ListNode(6, null);
    const node7 = new ListNode(7, null);
    const node8 = new ListNode(8, null);
    const node9 = new ListNode(9, null);

    node1.next = node3;
    node3.next = node2;
    node2.next = node4;
    node4.next = node7;

    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;

    expect(getIntersectionNode(node1, node5)).toEqual(node7);
  });
});
