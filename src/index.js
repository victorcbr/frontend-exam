import React from "react";
import ReactDOM from "react-dom";
import "theme/css/index.css";
import { App } from "pages";
import * as serviceWorker from "serviceWorker";
import { AuthController } from "context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthController>
      <App />
    </AuthController>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
