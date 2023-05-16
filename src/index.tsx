import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./Context";
import App from "./components/App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
