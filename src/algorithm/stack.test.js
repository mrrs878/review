/*
 * @Date: 2021-06-07 14:34:58
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-06-07 23:02:55
 * @FilePath: \review\src\algorithm\stack.test.js
 */
import {
  isValid, MinStack, removeDuplicates, removeNDuplicates,
} from './stack';

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

  test('removeDuplicates', () => {
    expect(removeDuplicates('')).toEqual('');
    expect(removeDuplicates('aa')).toEqual('');
    expect(removeDuplicates('ab')).toEqual('ab');
    expect(removeDuplicates('abbca')).toEqual('aca');
    expect(removeDuplicates('abbbca')).toEqual('abca');
    expect(removeDuplicates('abbcca')).toEqual('');
    expect(removeDuplicates('abbcbca')).toEqual('acbca');
  });
  test('removeNDuplicates', () => {
    expect(removeNDuplicates('abbbca', 3)).toEqual('aca');
    expect(removeNDuplicates('deeedbbcccbdaa', 3)).toEqual('aa');
    expect(removeNDuplicates('pbbcggttciiippooaais', 2)).toEqual('ps');
    expect(removeNDuplicates('dtpdtaaaaaaaaappppppppppppppppppppaaaaaaaaaaxxxxxxxxxxxxxxsssssssssjjjjjjjjjjjjjjjjjjjjxxxxxxxxxxxxxxxxxxxxsssssssjjjjjjjjjjjjjjjjjjjjssssxxxxxxatdwvvpctpggggggggggggggggggggajagglaaaaaaaaaaaaaaaaaaaa', 20)).toEqual('dtpdttdwvvpctpajaggl');
  });
});
