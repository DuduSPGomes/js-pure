import Component from "../component.js";
import Input from "./input.js";
import SendButton from "./send-button.js";

function Footer() {
  return Component({
    tagName: "footer",
    children: [Input(), SendButton()],
  });
}

export default Footer;
