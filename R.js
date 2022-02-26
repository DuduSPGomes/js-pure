const R = (function () {
  let stateValues = []; // useState
  let useStateIndex = -1; // useState
  let deps = []; // useEffect
  let reducerState; // useReducer
  let context; // createContext | useContext
  let childWithContext;

  return {
    createContext(defaultValue) {
      context = context || defaultValue;

      console.log("createContext");

      function Provider(children, value) {
        context = context || value;

        console.log("Provider");

        if (children) {
          children.forEach((child) => {
            if (child) childWithContext = child();
          });
        }

        return childWithContext;
      }

      function Consumer() {
        console.log("Consumer");
        return context;
      }

      return { Provider, Consumer };
    },
    useContext(createdContext) {
      console.log("useContext");
      return createdContext.Consumer();
    },
    useReducer(reducer, initialState) {
      reducerState = reducerState || initialState;

      console.log("useReducer");

      function dispatch(action) {
        reducerState = reducer(reducerState, action);
        context = { ...context, state: reducerState };
      }

      return [reducerState, dispatch];
    },
    useEffect(callback, depArray) {
      if (JSON.stringify(deps) !== JSON.stringify(depArray)) {
        callback();
        deps = depArray;
      }
    },
    useState(initialValue) {
      useStateIndex++;

      stateValues[useStateIndex] = stateValues[useStateIndex] || initialValue;

      const setStateIndex = useStateIndex; // setState closure

      function setState(newState) {
        if (typeof newState === "function") {
          stateValues[setStateIndex] = newState(stateValues[setStateIndex]);
          useStateIndex = -1;
        } else {
          stateValues[setStateIndex] = newState;
          useStateIndex = -1;
        }
      }

      return [stateValues[useStateIndex], setState];
    },
    Component(props) {
      /** @type {HTMLElement} */
      const element = document.createElement(props.tagName);

      if (props.attributes) {
        const attrKeys = Object.keys(props.attributes);
        attrKeys.forEach((key) => {
          element.setAttribute(key, props.attributes[key]);
        });
      }

      element.textContent = props.textContent;

      if (props.children) {
        props.children.forEach((child) => {
          if (child) element.appendChild(child);
        });
      }

      if (props.eventListeners) {
        props.eventListeners.forEach((eventListener) => {
          element.addEventListener(eventListener.type, function (e) {
            eventListener.listener(e);
          });
        });
      }

      return element;
    },
    renderDOM(elem, target) {
      target.replaceChildren(elem);
    },
  };
})();

export default R;
