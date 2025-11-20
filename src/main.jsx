// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./store/index.js";
import { Provider as ReduxProvider } from "./libs/react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>

  // {/* </StrictMode>, */}
);
