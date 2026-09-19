import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Calendar year={2026} month={9} colorScheme="ocean" theme="modern" />
  </StrictMode>,
);
