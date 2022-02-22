import Component from "../component.js";
import R from "../R.js";
import { CounterContext } from "../context/index.js";
import { reducer } from "../context/reducer.js";
import { initialState } from "../context/initial-state.js";

function Led() {
  const context = R.useContext(CounterContext);
  const [state, dispatch] = R.useReducer(reducer, initialState);

  return Component({
    tagName: "div",
    textContent: state.counter,
  });
}

export default Led;
