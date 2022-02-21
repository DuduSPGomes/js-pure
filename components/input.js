import Component from "../component.js";

function Input() {
  return Component({
    tagName: "input",
    attributes: { type: "number" },
  });
}

export default Input;
