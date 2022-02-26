import R from "../R.js";

function Heading() {
  return R.Component({
    tagName: "h1",
    textContent: "Qual é o número?",
  });
}

export default Heading;
