import { Context, Props } from "./types.js";

const R = (function () {
  let stateValues = []; // useState
  let useStateIndex = -1; // useState
  let deps; // useEffect
  let reducerState; // useReducer
  let context; // createContext | useContext
  let childWithContext; // Provider children
  let render;
  function reRender(Component) {
    return function (target) {
      return function (Provider) {
        if (Provider) {
          target.replaceChildren(Provider({ children: [Component] }));
        } else {
          target.replaceChilren(Component());
        }
      };
    };
  }

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

    /** @returns {Context} */
    useContext(createdContext) {
      return createdContext.Consumer();
    },

    useReducer(reducer, initialState) {
      reducerState = reducerState || initialState;

      function dispatch(action) {
        reducerState = reducer(reducerState, action);
        const newContext = { ...context, state: reducerState };
        context = newContext;

        // RE-RENDER EXAMPLE
        // if (!Object.is(context, newContext)) {
        //   context = newContext;
        //   reRender(render.Component)(render.target)(render.Provider);
        // }
      }

      return [reducerState, dispatch];
    },

    /**
     * @param {Function} callback
     * @param {Array} depArray
     */
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

    /**
     * @param {Props} props
     * @returns {HTMLElement} HTMLElement
     */
    Component(props) {
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
            reRender(render.Component)(render.target)(render.Provider);
          });
        });
      }

      return element;
    },

    /**
     * @param {Function} Component
     * @param {HTMLElement} target
     * @param {Function} Provider
     */
    renderDOM(Component, target, Provider) {
      target.replaceChildren(Provider({ children: [Component] }));
      render = { Component: Component, target: target, Provider: Provider };
    },
  };
})();

export default R;
