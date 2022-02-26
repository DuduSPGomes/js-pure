import R from "../R.js";

function LedMessage() {
  return R.Component({
    tagName: "p",
    textContent: "É menor",
  });
}

export default LedMessage;
