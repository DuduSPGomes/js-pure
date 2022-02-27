import R from "../R.js";
import { CounterContext } from "../context/index.js";
import { reducer } from "../context/reducer.js";
import { initialState } from "../context/initial-state.js";

function Led() {
  const context = R.useContext(CounterContext);

  return R.Component({
    tagName: "div",
    textContent: context.state.inputValue,
  });
}

export default Led;
