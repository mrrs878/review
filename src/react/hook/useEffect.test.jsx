import { act, renderHook } from '@testing-library/react-hooks';
import {
  resetCursor, useEffect, resetMemoizedStates,
} from './useState_useEffect';

describe('useEffect_simple', () => {
  beforeEach(() => {
    resetCursor();
    resetMemoizedStates();
  });

  it('useEffect should be defined', () => {
    expect(useEffect).toBeDefined();
  });

  it('Different DEPs, Callback calls should also be differentcalls should also be different', () => {
    const callbackWithNoDeps = jest.fn();
    const callbackWithEmptyDeps = jest.fn();
    const callbackWithChangingDeps = jest.fn();

    let name = 'tom';

    const useProple = () => {
      useEffect(callbackWithNoDeps);
      useEffect(callbackWithEmptyDeps, []);
      useEffect(callbackWithChangingDeps, [name]);
    };

    const { rerender } = renderHook(() => useProple());

    expect(callbackWithNoDeps).toBeCalledTimes(1);
    expect(callbackWithEmptyDeps).toBeCalledTimes(1);
    expect(callbackWithChangingDeps).toBeCalledTimes(1);

    act(() => {
      name = 'tom&jerry';
      resetCursor();
      rerender();
    });

    expect(callbackWithNoDeps).toBeCalledTimes(2);
    expect(callbackWithEmptyDeps).toBeCalledTimes(1);
    expect(callbackWithChangingDeps).toBeCalledTimes(2);

    act(() => {
      resetCursor();
      rerender();
    });

    expect(callbackWithNoDeps).toBeCalledTimes(3);
    expect(callbackWithEmptyDeps).toBeCalledTimes(1);
    expect(callbackWithChangingDeps).toBeCalledTimes(2);
  });
});
