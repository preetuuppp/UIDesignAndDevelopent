import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.scss";
import Auth0WithHistory from "./auth0Component/Auth0WithHistory.jsx";

createRoot(document.getElementById("root")).render(
  <Auth0WithHistory>
    <App />
  </Auth0WithHistory>
);
