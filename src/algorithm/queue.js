/*
 * @Date: 2021-06-08 17:32:40
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-08 18:13:26
 * @FilePath: /review/src/algorithm/queue.js
 */
function lengthOfLongestSubstring(s) {
  if (s === '') return 0;
  if (s.length === 1) return 1;
  let longestStr = '';
  const queue = new Map();
  for (let i = 0; i < s.length; i += 1) {
    if (queue.has(s[i])) {
      const newStr = Array.from(queue.keys()).join('');
      longestStr = newStr.length > longestStr.length ? newStr : longestStr;
      i = queue.get(s[i]) + 1;
      queue.clear();
    }
    queue.set(s[i], i);
  }

  const newStr = Array.from(queue.keys()).join('');
  return Math.max(newStr.length, longestStr.length);
}

export default lengthOfLongestSubstring;
