import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavContextProvider } from "./store/Nav-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavContextProvider>
      <App />
    </NavContextProvider>
  </React.StrictMode>
);
