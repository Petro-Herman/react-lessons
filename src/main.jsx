import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./WorkShop/Components/App/App";
import App from "./Formik/Components/App/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
