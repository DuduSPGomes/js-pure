import Component from "../component.js";
import R from "../R.js";
import Paragraph from "./paragraph.js";
import SendButton from "./send-button.js";
import { reducer } from "../context/reducer.js";
import { initialState } from "../context/initial-state.js";
import { setCounter } from "../context/actions.js";

function Counter() {
  const [counter, setCounter] = R.useState(0);
  const [counter3, setCounter3] = R.useState(1);
  const [counter2, setCounter2] = R.useState(0);

  R.useEffect(() => {
    console.log("rendered");
  }, [counter2, counter3]);

  return Component({
    tagName: "div",
    children: [
      Paragraph({ textContent: counter }),
      SendButton({ setCounter: setCounter }),
      Paragraph({ textContent: counter2 }),
      SendButton({ setCounter: setCounter2 }),
      Paragraph({ textContent: counter3 }),
      SendButton({ setCounter: setCounter3 }),
    ],
  });
}

export default Counter;
