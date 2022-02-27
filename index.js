import R from "./R.js";
import Counter from "./components/counter.js";
import CounterProvider from "./context/index.js";
import App from "./components/app.js";

R.renderDOM(App, document.body, CounterProvider);
