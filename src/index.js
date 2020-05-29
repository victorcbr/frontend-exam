import React from "react";
import ReactDOM from "react-dom";
import "theme/css/index.css";
import LoginPage from "pages/Login";
import * as serviceWorker from "serviceWorker";
import { AuthController } from "context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthController>
      <LoginPage />
    </AuthController>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
