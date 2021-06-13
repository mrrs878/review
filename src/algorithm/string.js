/*
 * @Date: 2021-06-12 18:05:01
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-13 22:49:19
 * @FilePath: \review\src\algorithm\string.js
 */
function hammingWeight(n) {
  const res = Number(n).toString(2).match(/1/g);
  return res ? res.length : 0;
}

function longestCommonPrefix(arr) {
  if (!Array.isArray(arr)) return '';
  if (arr.length === 1) return arr[0];
  const arrTmp = arr.sort((a, b) => a.length - b.length);
  const small = arrTmp[arrTmp.length - 1];
  let end = small.length;
  for (let i = arrTmp.length - 2; i >= 0; i -= 1) {
    for (let j = 0; j < end; j += 1) {
      if (arrTmp[i][j] !== small[j]) {
        end = j;
        break;
      }
    }
  }
  return small.slice(0, end);
}

function longestCommonPrefixPerform(arr) {
  if (!Array.isArray(arr)) return '';
  if (arr.length === 1) return arr[0];
  let shortest = arr[0];
  let longest = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (shortest > arr[i]) shortest = arr[i];
    if (longest < arr[i]) longest = arr[i];
  }
  let end = shortest.length;
  for (let i = 0; i < shortest.length; i += 1) {
    if (longest[i] !== shortest[i]) {
      end = i;
      break;
    }
  }
  return end === -1 ? '' : shortest.slice(0, end);
}

export { hammingWeight, longestCommonPrefix, longestCommonPrefixPerform };
