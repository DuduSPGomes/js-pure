import * as type from "./types.js";
import { InitialState, Action } from "../types.js";

/**
 * @param {InitialState} state
 * @param {Action} action
 * @returns {Object} new state
 */
export function reducer(state, action) {
  switch (action.type) {
    case type.SET_COUNTER:
      return { ...state, counter: state.counter + 1 };

    case type.SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    case type.SET_LED_VALUE:
      return { ...state, counter: state.inputValue };

    default:
      return state;
  }
}
