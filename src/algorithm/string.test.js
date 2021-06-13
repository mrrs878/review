/*
 * @Date: 2021-06-12 18:05:49
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-13 22:50:10
 * @FilePath: \review\src\algorithm\string.test.js
 */
import { hammingWeight, longestCommonPrefix, longestCommonPrefixPerform } from './string';

describe('string problems', () => {
  test('hammingWeight', () => {
    expect(hammingWeight(0)).toEqual(0);
  });

  test('longestCommonPrefix', () => {
    expect(longestCommonPrefix(['f', 'f331', 'f44'])).toEqual('f');
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
    expect(longestCommonPrefix(['d', 'd', 'dd'])).toEqual('d');
  });
  test('longestCommonPrefixPerform', () => {
    expect(longestCommonPrefixPerform(['ab', 'ac', 'abc'])).toEqual('a');
    // expect(longestCommonPrefixPerform(['f', 'f331', 'f44'])).toEqual('f');
    // expect(longestCommonPrefixPerform(['flower', 'flow', 'flight'])).toEqual('fl');
    // expect(longestCommonPrefixPerform(['dog', 'racecar', 'car'])).toEqual('');
    // expect(longestCommonPrefixPerform(['d', 'd', 'dd'])).toEqual('d');
    // expect(longestCommonPrefixPerform(['dddd', 'dd', 'ddd'])).toEqual('dd');
    // expect(longestCommonPrefixPerform(['abab', 'aba', 'abc'])).toEqual('ab');
  });
});
