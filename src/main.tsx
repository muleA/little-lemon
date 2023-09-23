/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ScrollToTop from "./libs/ui/scroll-top.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
{/*     <I18nextProvider i18n={'./i18n/i18n.js' as any}>
 */}      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
{/*     </I18nextProvider>
 */}  </React.StrictMode>
);
