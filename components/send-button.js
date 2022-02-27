import R from "../R.js";
import { CounterContext } from "../context/index.js";
import { setLedValue } from "../context/actions.js";

function SendButton(props) {
  const context = R.useContext(CounterContext);

  function listener(e) {
    context.dispatch(setLedValue());
    // props.setCounter((old) => old + 1);
  }

  return R.Component({
    tagName: "button",
    textContent: "ENVIAR",
    eventListeners: [{ type: "click", listener: listener }],
  });
}

export default SendButton;
