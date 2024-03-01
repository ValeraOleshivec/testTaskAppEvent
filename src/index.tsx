import App from "app/App";

import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "app/Providers/store/ui/StoreProvider";
import { createRoot } from "react-dom/client";
// Использую либу react-icons исключительно для экономии времени

const domNode = document.getElementById("root");

const root = createRoot(domNode);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
);
