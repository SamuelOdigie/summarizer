import React from "react";
import ReactDOM from "react-dom";
import Demo from "./components/Demo";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Demo from "./components/Demo";

ReactDOM.render(
  <Provider store={store}>
    <Demo />
  </Provider>,
  document.getElementById("root")
);
