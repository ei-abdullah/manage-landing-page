import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App.jsx";


import "./index.css";

// swiper-react-responsive-breakpoints

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
