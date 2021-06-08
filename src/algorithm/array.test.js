/*
 * @Date: 2021-06-05 14:24:41
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-08 15:43:35
 * @FilePath: /review/src/algorithm/array.test.js
 */
import {
  combineOrderedArrays, sumOfTwoNumbers, intersection, triangleNumber, minDistance,
  longestCommonPrefix,
  longestCommonPrefixPerform,
} from './array';

describe('array problems', () => {
  test('combineOrderedArrays', () => {
    const arr1 = [1, 3, 4];
    const arr2 = [2, 2, 5, 6];
    const res = combineOrderedArrays(arr1, arr2);
    expect(res).toEqual(arr1.concat(arr2).sort((a, b) => a - b));
  });

  test('sumOfTwoNumbers', () => {
    const arr = [1, 2, 6, 9, 5];
    const res = sumOfTwoNumbers(arr, 10);
    expect(res).toEqual([0, 3]);
  });

  test('intersection', () => {
    const arr1 = [1, 2, 2, 1];
    const arr2 = [2, 2];
    expect(intersection(arr1, arr2)).toEqual([2]);

    const arr3 = [4, 9, 5];
    const arr4 = [9, 4, 9, 8, 4];
    expect(intersection(arr3, arr4)).toEqual([9, 4]);
  });

  test('triangleNumber', () => {
    const arr = [24, 3, 82, 22, 35, 84, 19];
    expect(triangleNumber(arr)).toEqual(10);
  });

  test('minDistance', () => {
    expect(minDistance('a', 'b')).toEqual(2);
    expect(minDistance('park', 'spake')).toEqual(5);
    expect(minDistance('bsea', 'eat')).toEqual(3);
    expect(minDistance('sea', 'eat')).toEqual(2);
    expect(minDistance('leetcode', 'etco')).toEqual(4);
    expect(minDistance('leet', 'etcoeeftgh')).toEqual(10);
  });

  test('longestCommonPrefix', () => {
    expect(longestCommonPrefix(['f', 'f331', 'f44'])).toEqual('f');
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
    expect(longestCommonPrefix(['d', 'd', 'dd'])).toEqual('d');
  });
  test('longestCommonPrefixPerform', () => {
    expect(longestCommonPrefixPerform(['f', 'f331', 'f44'])).toEqual('f');
    expect(longestCommonPrefixPerform(['flower', 'flow', 'flight'])).toEqual('fl');
    expect(longestCommonPrefixPerform(['dog', 'racecar', 'car'])).toEqual('');
    expect(longestCommonPrefixPerform(['d', 'd', 'dd'])).toEqual('d');
    expect(longestCommonPrefixPerform(['dddd', 'dd', 'ddd'])).toEqual('dd');
    expect(longestCommonPrefixPerform(['abab', 'aba', 'abc'])).toEqual('ab');
  });
});
