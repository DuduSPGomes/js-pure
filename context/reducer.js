import * as type from "./types.js";

export function reducer(state, action) {
  switch (action.type) {
    case type.SET_COUNTER:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}
