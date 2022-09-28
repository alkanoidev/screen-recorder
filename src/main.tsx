import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SettingsContextProvider from "./context/Settings";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </React.StrictMode>
);
