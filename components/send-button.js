import Component from "../component.js";

function SendButton(props) {
  function listener(e) {
    return props.setCounter((old) => old + 1);
  }

  return Component({
    tagName: "button",
    textContent: "ENVIAR",
    eventListeners: [{ type: "click", listener: listener }],
  });
}

export default SendButton;
