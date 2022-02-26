import R from "../R.js";
import Input from "./input.js";
import SendButton from "./send-button.js";

function Footer() {
  return R.Component({
    tagName: "footer",
    children: [Input(), SendButton()],
  });
}

export default Footer;
