let memoizedStates = [];
let cursor = 0;

function useState(initialState) {
  memoizedStates[cursor] = memoizedStates[cursor] || initialState;

  const currentCursor = cursor;
  const setState = (newState) => {
    memoizedStates[currentCursor] = typeof newState === 'function'
      ? newState(memoizedStates[currentCursor])
      : newState;
  };

  const res = [memoizedStates[cursor], setState];
  cursor += 1;

  return res;
}

function useEffect(callback, deps) {
  const hasNoDeps = deps === undefined;
  const preDeps = memoizedStates[cursor];
  const hasChangedDeps = preDeps
    ? !deps.every((dep, index) => dep === preDeps[index])
    : true;

  if (hasNoDeps || hasChangedDeps) {
    callback();
    memoizedStates[cursor] = deps;
  }

  cursor += 1;
}

function resetCursor() {
  cursor = 0;
}

function resetMemoizedStates() {
  memoizedStates = [];
}

export {
  useState, useEffect, resetCursor, resetMemoizedStates,
};
