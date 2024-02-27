import App from "app/App";

import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// Использую либу react-icons исключительно для экономии времени

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"),
);
