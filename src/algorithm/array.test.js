/*
 * @Date: 2021-06-05 14:24:41
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-12 18:14:59
 * @FilePath: \review\src\algorithm\array.test.js
 */
import {
  combineOrderedArrays, sumOfTwoNumbers, intersection, triangleNumber, minDistance,
  longestCommonPrefix,
  longestCommonPrefixPerform,
  minArray,
  fib,
  fibPerform,
  exchange,
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

  test('minArray', () => {
    expect(minArray([1, 2, 3, 4, 5])).toEqual(1);
    expect(minArray([1, 1, 1, 1])).toEqual(1);
    expect(minArray([3, 4, 5, 1, 2])).toEqual(1);
    expect(minArray([2, 2, 2, 0, 1])).toEqual(0);
  });

  test('fib', () => {
    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(25)).toEqual(75025);
    expect(fib(30)).toEqual(832040);
  });

  test('fibPerform', () => {
    expect(fibPerform(0)).toEqual(0);
    expect(fibPerform(1)).toEqual(1);
    expect(fibPerform(2)).toEqual(1);
    expect(fibPerform(25)).toEqual(75025);
    expect(fibPerform(30)).toEqual(832040);
  });

  test('exchange', () => {
    expect(exchange([])).toEqual([]);
    expect(exchange([1])).toEqual([1]);
    expect(exchange([1, 2])).toEqual([1, 2]);
    expect(exchange([1, 2, 3, 4])).toEqual([3, 1, 2, 4]);
  });
});
