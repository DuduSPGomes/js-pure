import R from "../R.js";

function NewMatchButton() {
  return R.Component({
    tagName: "button",
    textContent: "NOVA PARTIDA",
  });
}

export default NewMatchButton;
