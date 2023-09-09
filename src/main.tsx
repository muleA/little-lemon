import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ScrollToTop from './libs/ui/scroll-top.tsx'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next';
import SetLanguage from '@libs/utils/i18n.tsx'; // Import the I18n interface
import './styles/global.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <I18nextProvider i18n={SetLanguage.i18n}>

    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
)


