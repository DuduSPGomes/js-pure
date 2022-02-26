const R = (function () {
  let render;
  let stateValues = []; // useState
  let useStateIndex = -1; // useState
  let deps = []; // useEffect
  let reducerState; // useReducer
  let context; // createContext | useContext
  let childWithContext; // Provider children

  return {
    createContext(defaultValue) {
      context = context || defaultValue;

      function Provider(children, value) {
        context = context || value;

        if (children) {
          children.forEach((child) => {
            if (child) childWithContext = child();
          });
        }

        return childWithContext;
      }

      function Consumer() {
        return context;
      }

      return { Provider, Consumer };
    },
    useContext(createdContext) {
      return createdContext.Consumer();
    },
    useReducer(reducer, initialState) {
      reducerState = reducerState || initialState;

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
            const p = render.Provider({ children: [render.Component] });
            render.target.replaceChildren(p);
          });
        });
      }

      return element;
    },
    renderDOM(Component, target, Provider) {
      target.replaceChildren(Provider({ children: [Component] }));
      render = { Component: Component, target: target, Provider: Provider };
    },
  };
})();

export default R;
