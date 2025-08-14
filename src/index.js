import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import feather from "feather-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

feather.replace();
