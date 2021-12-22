import { act, renderHook } from '@testing-library/react-hooks';
import { useEffect } from './useEffect_simple';

describe('useEffect_simple', () => {
  it('useEffect should be defined', () => {
    expect(useEffect).toBeDefined();
  });

  it('When deps is empty, every rendering callback should be executed', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(() => useEffect(callback));

    expect(callback).toBeCalledTimes(1);

    act(() => {
      rerender();
    });

    expect(callback).toBeCalledTimes(2);
  });

  it('When deps is an empty array, render multiple times but callback should only be called once', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(() => useEffect(callback, []));

    expect(callback).toBeCalledTimes(1);

    act(() => {
      rerender();
    });

    expect(callback).toBeCalledTimes(1);
  });

  it('When deps is changed, callback should be called', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(({ name }) => useEffect(callback, [name]), {
      initialProps: {
        name: 'tom',
      },
    });

    expect(callback).toBeCalledTimes(1);

    act(() => {
      rerender({
        name: 'jerry',
      });
    });

    expect(callback).toBeCalledTimes(2);
  });
});
