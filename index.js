import R from "./R.js";
import Counter from "./components/counter.js";
import CounterProvider from "./context/index.js";
import App from "./components/app.js";

R.renderDOM(CounterProvider({ children: [Counter] }), document.body);

// // transformar as funções que retornam o R.Component em um compoenent para re-renderizar seu escopo
// // para os hooks dentro das funções funcionarem as funções precisam ser executadas novamente
// // não é só renderizar os valores modificados no html, é precisa re-renderizar as funções que retornam os componentes

// criar render parecido com useEffect, porém comparando o dom atual com o dom que será salvo ao chamar o renderDOM
