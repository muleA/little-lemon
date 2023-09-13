import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ScrollToTop from "./libs/ui/scroll-top.tsx";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "./styles/global.css";
import i18n from "./locals/i18n.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
