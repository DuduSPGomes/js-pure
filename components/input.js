import R from "../R.js";
import { CounterContext } from "../context/index.js";
import { setInputValue } from "../context/actions.js";

function Input() {
  const context = R.useContext(CounterContext);

  function handleChange(e) {
    context.dispatch(setInputValue(e.target.value));
  }

  return R.Component({
    tagName: "input",
    attributes: { type: "number" },
    eventListeners: [{ type: "change", listener: handleChange }],
  });
}

export default Input;
