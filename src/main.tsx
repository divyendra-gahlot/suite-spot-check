// src/main.tsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const basename = import.meta.env.BASE_URL; 
// ↑ At runtime (in production) this is "/suite-spot-check/"
//  In dev mode it will be "/"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
