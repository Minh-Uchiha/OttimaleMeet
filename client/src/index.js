import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChannelProvider } from "./context/ChannelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChannelProvider>
      <App />
    </ChannelProvider>
  </React.StrictMode>
);
