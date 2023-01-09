import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./components/App/App";
import store from "./store/store.js";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
