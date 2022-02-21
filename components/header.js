import Component from "../component.js";
import Heading from "./heading.js";

function Header() {
  return Component({
    tagName: "header",
    children: [Heading()],
  });
}

export default Header;
