import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
