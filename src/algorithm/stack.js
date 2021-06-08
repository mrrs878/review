/*
 * @Date: 2021-06-07 14:34:22
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-08 14:18:31
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

function removeDuplicates(str) {
  if (str === '') return '';
  if (str.length === 1) return str;
  const stack = [str[0]];
  for (let i = 1; i < str.length; i += 1) {
    const prev = stack.pop();
    if (prev !== str[i]) {
      stack.push(prev);
      stack.push(str[i]);
    }
  }

  return stack.join('');
}

function removeNDuplicates(s, k) {
  function popN(stack, n) {
    let i = n;
    while (i > 0) {
      stack.pop();
      i -= 1;
    }
  }
  const stack = [];
  let n = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (stack[stack.length - 1] === s[i]) {
      n += 1;
    } else {
      n = 0;
    }
    stack.push(s[i]);
    if (n === k - 1) {
      popN(stack, k);
      return removeNDuplicates(stack.join('') + s.slice(i + 1), k);
    }
  }

  return stack.join('');
}

function remove2Duplicates(s) {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    const pre = stack.pop();
    if (!pre || pre[0] !== s[i]) {
      stack.push(pre);
      stack.push(s[i]);
    } else if (pre.length < 1) {
      stack.push(pre + s[i]);
    }
  }

  return stack.join('');
}

function removeNDuplicatesPerform(s, k) {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    const pre = stack.pop();
    if (!pre || pre[0] !== s[i]) {
      stack.push(pre);
      stack.push(s[i]);
    } else if (pre.length < k - 1) {
      stack.push(pre + s[i]);
    }
  }

  return stack.join('');
}

function reverseWords(s) {
  if (s === '') return '';
  const str = s.trim();
  if (!/ /.test(str)) return str;
  const tmp = str.split(' ').filter((item) => item !== '').reverse();
  return tmp.join(' ');
}

export {
  MinStack, isValid, removeDuplicates, removeNDuplicates, remove2Duplicates,
  removeNDuplicatesPerform, reverseWords,
};
