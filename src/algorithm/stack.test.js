/*
 * @Date: 2021-06-07 14:34:58
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-07 17:58:01
 * @FilePath: /review/src/algorithm/stack.test.js
 */
import { isValid, MinStack } from './stack';

describe('stack problems', () => {
  test('MinStack case1', () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);

    expect(stack.getMin()).toEqual(-3);
    stack.pop();
    expect(stack.top()).toEqual(0);
    expect(stack.getMin()).toEqual(-2);
  });

  test('MinStack case2', () => {
    const stack = new MinStack();
    stack.push(2);
    stack.push(0);
    stack.push(3);
    stack.push(0);

    expect(stack.getMin()).toEqual(0);
    stack.pop();
    expect(stack.getMin()).toEqual(0);
    stack.pop();
    expect(stack.getMin()).toEqual(0);
    stack.pop();
    expect(stack.getMin()).toEqual(2);
  });

  test('isValidBrackets', () => {
    expect(isValid(']')).toEqual(false);
    expect(isValid(')(){}')).toEqual(false);
    expect(isValid('()')).toEqual(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('(]')).toEqual(false);
    expect(isValid('([)]')).toEqual(false);
  });
});
