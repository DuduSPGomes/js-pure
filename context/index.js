import R from "../R.js";
import { reducer } from "./reducer.js";
import { initialState } from "./initial-state.js";

export const CounterContext = R.createContext();

function CounterProvider(props) {
  const [state, dispatch] = R.useReducer(reducer, initialState);
  return CounterContext.Provider(props.children, { state, dispatch });
}

export default CounterProvider;
