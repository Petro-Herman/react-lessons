import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'

import "./index.css";
import GitHubApp from "./lection/components/GitHubApp/GitHubApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <GitHubApp />
  </StrictMode>
);
