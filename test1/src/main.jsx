import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Calendar } from "@typescript-calendar-lib/react";
import "@typescript-calendar-lib/react/calendar.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Calendar year={2026} month={9} colorScheme="ocean" theme="modern" />
  </StrictMode>,
);
