import React from "react";
import ReactDOM from "react-dom/client";
import { LenisProvider } from "./context/LenisContext";
import { PorfolioJICM } from "./PorfolioJICM";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LenisProvider>
      <PorfolioJICM />
    </LenisProvider>
  </React.StrictMode>
);
