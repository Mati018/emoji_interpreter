import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode basename={process.env.PUBLIC_URL}>
    <App />
  </StrictMode>,
  rootElement
);
