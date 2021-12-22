import { renderHook, act } from '@testing-library/react-hooks';
import { useState } from './useState_simple';

describe('useState_simple', () => {
  it('useState should be defined', () => {
    expect(useState).toBeDefined();
  });

  it('When the update function is called, the data is updated normally', () => {
    const { result, rerender } = renderHook(() => useState(1));

    const [, setState] = result.current;

    act(() => {
      setState(2);
      rerender();
    });

    const [state] = result.current;

    expect(state).toBe(2);
  });
});
