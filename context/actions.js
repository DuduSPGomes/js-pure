import * as type from "./types.js";

export function setInputValue(value) {
  return { type: type.SET_INPUT_VALUE, payload: value };
}

export function setLedValue() {
  return { type: type.SET_LED_VALUE };
}

export function setCounter() {
  return { type: type.SET_COUNTER };
}
