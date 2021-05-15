/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-05-12 22:32:30
 * @LastEditTime: 2021-05-12 22:44:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \review\src\js\iterator.js
 */
const iterable = {
  [Symbol.iterator]: () => {
    let count = 0;
    return {
      next() {
        count += 1;
        if (count <= 2) return { done: false, value: count };
        return { done: true, value: undefined };
      },
      return() {
        console.log('exiting early');
        return { done: true, value: undefined };
      },
    };
  },
};

export default iterable;
