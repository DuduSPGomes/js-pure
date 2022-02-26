import R from "../R.js";
import { CounterContext } from "../context/index.js";

function Paragraph(props) {
  const context = R.useContext(CounterContext);

  return R.Component({ tagName: "p", textContent: context?.state?.counter });
}

export default Paragraph;
