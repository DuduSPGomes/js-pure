/**
 * @typedef {{
 *    attribute: string
 * }}
 */
const Attributes;

/** 
 * @typedef {{
 *    type: string,
 *    listener: function(Event)
 * }}
 */
const EventListeners;

/** 
 * @typedef {{
 *    tagName: !string,
 *    attributes: Array<Attributes>,
 *    textContent: string,
 *    children: Array<HTMLElement>,
 *    eventListeners: Array<EventListeners>
 * }} 
 */
export const Props;

/**
 * @typedef {{
 *    type: string,
 *    payload: any
 * }}
 */
export const Action;

/**
 * @typedef {{
 *    state: InitialState,
 *    dispatch: function(Action)
 * }}
 */
export const Context;

/**
 * @typedef {{
 *    counter: number,
 *    inputValue: number
 * }}
 */
export const InitialState;
