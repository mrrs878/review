/*
 * @Author: your name
 * @Date: 2021-05-21 10:50:38
 * @LastEditTime: 2021-05-21 10:55:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/fsm.test.js
 */
import { promiseService, PromiseState, PromiseEvent } from './fsm';

describe('finite state machine', () => {
  test('promise machine', () => {
    console.log = jest.fn();

    promiseService.start();
    expect(console.log).toBeCalledWith(PromiseState.pending);
    promiseService.send(PromiseEvent.reject);
    expect(console.log).toBeCalledWith(PromiseState.rejected);
    expect(promiseService.state.value).toEqual(PromiseState.rejected);
  });
});
