import R from "../R.js";
import { CounterContext } from "../context/index.js";
import { setCounter } from "../context/actions.js";
import { reducer } from "../context/reducer.js";
import { initialState } from "../context/initial-state.js";
import Counter from "./counter.js";

function SendButton(props) {
  const context = R.useContext(CounterContext);

  function listener(e) {
    context.dispatch(setCounter());
    // props.setCounter((old) => old + 1);
  }

  return R.Component({
    tagName: "button",
    textContent: "ENVIAR",
    eventListeners: [{ type: "click", listener: listener }],
  });
}

export default SendButton;
