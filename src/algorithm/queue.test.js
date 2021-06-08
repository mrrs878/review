/*
 * @Date: 2021-06-08 17:47:54
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-08 17:56:37
 * @FilePath: /review/src/algorithm/queue.test.js
 */
import lengthOfLongestSubstring from './queue';

describe('queue', () => {
  test('lengthOfLongestSubstring case1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    expect(lengthOfLongestSubstring('wepwks')).toEqual(5);
  });
});
