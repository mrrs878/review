/*
 * @Author: your name
 * @Date: 2021-05-21 10:25:49
 * @LastEditTime: 2021-05-21 10:54:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /review/src/js/fsm.js
 */
import { interpret, Machine } from 'xstate';

const PromiseState = {
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
};
const PromiseEvent = {
  resolve: 'resolve',
  reject: 'reject',
};

const promiseMachine = Machine({
  id: 'promise',
  initial: PromiseState.pending,
  states: {
    [PromiseState.pending]: {
      on: {
        [PromiseEvent.resolve]: PromiseState.resolved,
        [PromiseEvent.reject]: PromiseState.rejected,
      },
    },
    [PromiseState.resolved]: {
      type: 'final',
    },
    [PromiseState.rejected]: {
      type: 'final',
    },
  },
});

const promiseService = interpret(promiseMachine);
promiseService.onTransition((state) => console.log(state.value));

export { promiseService, PromiseState, PromiseEvent };
