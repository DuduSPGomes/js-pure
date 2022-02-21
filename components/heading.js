import Component from "../component.js";

function Heading() {
  return Component({
    tagName: "h1",
    textContent: "Qual é o número?",
  });
}

export default Heading;
