// eslint-disable-next-line no-underscore-dangle
let _deps;

function useEffect(callback, deps) {
  const hasNoDeps = !deps;
  const hasChangeDeps = _deps
    ? !deps?.every((dep, index) => _deps[index] === dep)
    : true;

  if (hasNoDeps || hasChangeDeps) {
    callback();
    _deps = deps;
  }
}

export { useEffect };
