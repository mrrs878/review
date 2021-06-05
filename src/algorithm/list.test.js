/*
 * @Date: 2021-06-05 23:24:02
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-06 00:03:18
 * @FilePath: \review\src\algorithm\list.test.js
 */
import { list2array, ListNode, mergeTwoLists } from './list';

describe('list problems', () => {
  test('mergeTwoLists', () => {
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
});
