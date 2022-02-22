const R = (function () {
  let hookValues = [];
  let useStateIndex = -1;
  let deps = [];
  let state;
  let context;

  return {
    createContext(defaultValue) {
      context = defaultValue;
      function Provider(children, value) {
        context = value;
      }
      console.log("createContext");
      return { Provider };
    },
    useContext(createdContext) {
      console.log("useContext");
      return context;
    },
    useReducer(reducer, initialState) {
      state = state || initialState;

      function dispatch(action) {
        state = reducer(state, action);
      }

      console.log("useReducer");

      return [state, dispatch];
    },
    useEffect(callback, depArray) {
      if (JSON.stringify(deps) !== JSON.stringify(depArray)) {
        callback();
        deps = depArray;
      }
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
