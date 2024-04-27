import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import "./assets/css/fonts.css"; // Corregido el camino de importación
import "./assets/css/animationAlert.css"; // Corregido el camino de importación

ReactDOM.render(<App />, document.getElementById("root")); // La forma correcta de renderizar en versiones anteriores de React

