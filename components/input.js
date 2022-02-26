import R from "../R.js";

function Input() {
  return R.Component({
    tagName: "input",
    attributes: { type: "number" },
  });
}

export default Input;
