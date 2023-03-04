import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@esri/calcite-components/dist/calcite/calcite.css";

// Start up react and render our app to the screen
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
