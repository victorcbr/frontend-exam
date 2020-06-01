import React from "react";
import ReactDOM from "react-dom";
import "theme/css/index.css";
import { App } from "pages";
import * as serviceWorker from "serviceWorker";
import { AuthController } from "context/AuthContext";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";

const customTheme = createMuiTheme({});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={customTheme}>
      <AuthController>
        <App />
      </AuthController>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
