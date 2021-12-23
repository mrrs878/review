import { renderHook, act } from '@testing-library/react-hooks';
import { resetCursor, useState } from './useState_useEffect';

describe('useState_simple', () => {
  it('useState should be defined', () => {
    expect(useState).toBeDefined();
  });

  it('When the update function is called, the data is updated normally', () => {
    const usePeople = () => {
      const [age, setAge] = useState(1);
      const [name, setName] = useState('tom');

      return [age, setAge, name, setName];
    };
    const { result, rerender } = renderHook(() => usePeople());

    expect(result.current[0]).toBe(1);
    expect(result.current[2]).toBe('tom');

    act(() => {
      result.current[1]((pre) => pre + 1);
      resetCursor();
      rerender();
    });

    expect(result.current[0]).toBe(2);
    expect(result.current[2]).toBe('tom');

    act(() => {
      result.current[3]('tom&jerry');
      resetCursor();
      rerender();
    });

    expect(result.current[0]).toBe(2);
    expect(result.current[2]).toBe('tom&jerry');
  });
});
