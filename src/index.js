import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRoute basename={process.env.PUBLIC_URL}r>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
