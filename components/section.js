import R from "../R.js";
import LedMessage from "./led-message.js";
import Led from "./led.js";
import NewMatchButton from "./new-match-button.js";

function Section() {
  return R.Component({
    tagName: "section",
    children: [LedMessage(), Led(), NewMatchButton()],
  });
}

export default Section;
