import Component from "../component.js";

function Paragraph(props) {
  return Component({ tagName: "p", textContent: props.textContent });
}

export default Paragraph;
