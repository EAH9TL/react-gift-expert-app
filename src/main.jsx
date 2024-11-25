import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import './styles.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/* Titulo */}
      <GifExpertApp />

      {/* Input */}

      {/* Listado de gif */}
      {/* Gif item */}
    </>
  </StrictMode>
);
