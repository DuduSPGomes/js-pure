import R from "../R.js";
import Paragraph from "./paragraph.js";
import SendButton from "./send-button.js";
import { CounterContext } from "../context/index.js";
import CounterProvider from "../context/index.js";

function Counter() {
  const [counter, setCounter] = R.useState(0);

  R.useEffect(() => {
    console.log("rendered");
  }, [counter]);

  return R.Component({
    tagName: "div",
    attributes: { id: "counter" },
    children: [Paragraph(), SendButton()],
  });
}

export default Counter;
