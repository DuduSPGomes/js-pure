const R = (function () {
  let hookValues = [];
  let useStateIndex = -1;
  let deps = [];

  return {
    useEffect(callback, depArray) {
      if (JSON.stringify(deps) !== JSON.stringify(depArray)) {
        callback();
        deps = depArray;
      }

      // const hasNoDeps = !depArray;
      // const deps = hookValues[useStateIndex]; // type: array | undefined
      // const hasChangedDeps = deps
      //   ? !depArray.every((el, i) => el === deps[i])
      //   : true;
      // if (hasNoDeps || hasChangedDeps) {
      //   callback();
      //   useStateIndex = -1;
      //   hookValues[useStateIndex] = depArray[useStateIndex];
      // }
      // useStateIndex++; // done with this hook
    },
    useState(initialValue) {
      useStateIndex++;

      hookValues[useStateIndex] = hookValues[useStateIndex] || initialValue;

      const setStateIndex = useStateIndex; // setState closure

      function setState(newState) {
        if (typeof newState === "function") {
          hookValues[setStateIndex] = newState(hookValues[setStateIndex]);
          useStateIndex = -1;
        } else {
          hookValues[setStateIndex] = newState;
          useStateIndex = -1;
        }
      }

      return [hookValues[useStateIndex], setState];
    },
  };
})();

export default R;
