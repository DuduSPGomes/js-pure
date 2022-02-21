import Component from "../component.js";

function Led() {
  return Component({
    tagName: "div",
    textContent: "0",
  });
}

export default Led;
