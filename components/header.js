import R from "../R.js";
import Heading from "./heading.js";

function Header() {
  return R.Component({
    tagName: "header",
    children: [Heading()],
  });
}

export default Header;
