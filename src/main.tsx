import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ScrollToTop from "./libs/ui/scroll-top.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import i18n from "@libs/translation/i18n.ts";
import { I18nextProvider } from "react-i18next";
import { TranslationProvider } from "@libs/translation/Translate-context.tsx";
import theme from "@libs/ui/theme.tsx";
import { ThemeProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <TranslationProvider>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </I18nextProvider>
      </TranslationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
