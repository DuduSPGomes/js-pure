import R from "../R.js";
import { reducer } from "./reducer.js";
import { initialState } from "./initial-state.js";

const [state, dispatch] = R.useReducer(reducer, initialState);

export const CounterContext = R.createContext(null);

CounterContext.Provider([], { state, dispatch });
