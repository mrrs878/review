/*
 * @Date: 2021-05-27 13:57:43
 * @Author: mrrs878@foxmail.com
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-05-27 14:46:24
 * @FilePath: /review/src/js/reduce.test.js
 */
import { myMap, myReduce } from './reduce';

describe('myReduce & myMap', () => {
  test('myMap', () => {
    const array = [{ name: 'tom', score: 67 }, { name: 'jerry', score: 78 }, { name: 'green', score: 86 }];
    const res1 = myMap(array, (item) => ({ ...item, level: item.score > 80 ? 'A' : 'B' }));
    const res2 = array.map((item) => ({ ...item, level: item.score > 80 ? 'A' : 'B' }));
    expect(res1).toEqual(res2);
  });

  test('myReduce', () => {
    const score = [1, 2, 3, 4];
    const students = {
      tom: {
        name: 'tom',
        address: {
          city: 'US',
        },
        friends: ['jerry'],
      },
    };
    const sum = (pre, cur) => pre + cur;
    const sumRes1 = score.reduce(sum);
    const sumRes2 = myReduce(score, sum);
    expect(sumRes1).toEqual(sumRes2);

    const parseObj = (obj, propertyPath) => {
      const properties = propertyPath.split('.');
      return properties.reduce((pre, cur) => pre[cur], obj);
    };
    const parseObj2 = (obj, propertyPath) => {
      const properties = propertyPath.split('.');
      return myReduce(properties, (pre, cur) => pre[cur], obj);
    };
    expect(parseObj2(students, 'tom.name')).toEqual(parseObj(students, 'tom.name'));
  });
});
