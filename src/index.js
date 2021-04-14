import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CheckBook from "./CheckBook";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CheckBook />
  </StrictMode>,
  rootElement
);
