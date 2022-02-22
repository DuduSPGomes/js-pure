import Component from "../component.js";
import R from "../R.js";
import { CounterContext } from "../context/index.js";
import { setCounter } from "../context/actions.js";
import { reducer } from "../context/reducer.js";
import { initialState } from "../context/initial-state.js";

function SendButton(props) {
  const context = R.useContext(CounterContext);
  const [state, dispatch] = R.useReducer(reducer, initialState);

  console.log(context);

  function listener(e) {
    dispatch(setCounter());
  }

  return Component({
    tagName: "button",
    textContent: "ENVIAR",
    eventListeners: [{ type: "click", listener: listener }],
  });
}

export default SendButton;
