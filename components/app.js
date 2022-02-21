import Component from "../component.js";
import Header from "./header.js";
import Section from "./section.js";
import Footer from "./footer.js";

function App() {
  return Component({
    tagName: "div",
    attributes: { id: "app" },
    children: [Header(), Section(), Footer()],
  });
}

export default App;
