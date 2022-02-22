import App from "./components/app.js";
// import Counter from "./components/counter.js";
import { Props } from "./types.js";

/**
 * @param {Props} props
 * @returns {HTMLElement} HTMLElement
 */

function Component(props) {
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
        document.body.replaceChildren(App());
      });
    });
  }

  return element;
}

export default Component;
