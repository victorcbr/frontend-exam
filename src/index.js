import React from "react";
import ReactDOM from "react-dom";
import "./theme/css/index.css";
import LoginPage from "./pages/Login";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
