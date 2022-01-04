import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import { createStore } from "redux"; //redux icerisindeki indexi buraya baglamak icin// combine storedan sonra gerek kalmadi
import { Provider } from "react-redux"; //context konusundaki gibi
//import reducer from "./redux";
import { combineStore } from "./redux/";

//bu reducer redux dosyasindaki index.js ten geldi

//app i provider ile sarmalliyoruz ve bir stor olusturuyoruz
//reducer i redux tan import ediyoruz ve proje ve redux eslesmesi tamamlanlandi

//const store = createStore(reducer);
const store = combineStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
