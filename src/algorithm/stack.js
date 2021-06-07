/*
 * @Date: 2021-06-07 14:34:22
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-07 17:58:40
 * @FilePath: /review/src/algorithm/stack.js
 */
function MinStack() {
  this.storage = [];
  this.min = null;
}
MinStack.prototype.push = function (val) {
  let preMin = null;
  if (val <= this.min || this.min === null) {
    preMin = this.min;
    this.min = val;
  }
  this.storage.push({ val, preMin });
};
MinStack.prototype.pop = function () {
  const { val, preMin } = this.storage.pop();
  if (val <= this.min) this.min = preMin;
};
MinStack.prototype.getMin = function () {
  return this.min;
};
MinStack.prototype.top = function () {
  const topNode = this.storage[this.storage.length - 1];
  return topNode ? topNode.val : undefined;
};

function isValid(str) {
  if (typeof str !== 'string') return false;
  if (str === '') return true;
  if (str.length === 1) return false;
  const stack = [];
  const left = /\(|\[|\{/;
  const right = /\)|\]|\}/;
  for (let i = 0; i < str.length; i += 1) {
    if (left.test(str[i])) stack.push(str[i]);
    else if (right.test(str[i])) {
      const top = stack[stack.length - 1];
      if (str[i] === ')' && top === '(') stack.pop();
      else if (str[i] === ']' && top === '[') stack.pop();
      else if (str[i] === '}' && top === '{') stack.pop();
      else stack.push(stack[i]);
    }
  }
  return stack.length === 0;
}

export { MinStack, isValid };
