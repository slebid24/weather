import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
// @ts-ignore
import { Provider } from "react-redux";
import store from "./store/store";
import "./resources/styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
