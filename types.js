const Attributes = {
  /** @type {string} */
  attribute: null,
};

/** @param {Event} e */
const Listener = function (e) {};

const EventListeners = {
  /** @type {string} */
  type: null,
  /** @type {Listener} */
  listener: null,
};

export const Props = {
  /** @type {!string} */
  tagName: null,
  /** @type {Array<typeof Attributes>} */
  attributes: null,
  /** @type {string} */
  textContent: null,
  /** @type {Array<HTMLElement>} */
  children: null,
  /** @type {Array<typeof EventListeners>} */
  eventListeners: null,
};
