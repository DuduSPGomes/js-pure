/**
 * @typedef {{
 *    attribute: string
 * }}
 */
let Attributes;

/**
 * @typedef {{
 *    type: string,
 *    listener: function(Event)
 * }}
 */
let EventListeners;

/**
 * @typedef {{
 *    tagName: !string,
 *    attributes: Array<Attributes>,
 *    textContent: string,
 *    children: Array<HTMLElement>,
 *    eventListeners: Array<EventListeners>
 * }}
 */
export let Props;

/**
 * @typedef {{
 *    type: string,
 *    payload: any
 * }}
 */
export let Action;

/**
 * @typedef {{
 *    state: InitialState,
 *    dispatch: function(Action)
 * }}
 */
export let Context;

/**
 * @typedef {{
 *    counter: number,
 *    inputValue: number
 * }}
 */
export let InitialState;
