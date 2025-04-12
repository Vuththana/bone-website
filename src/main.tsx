import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Navbar from "./components/navbar.tsx";
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from "./contexts/language-context.tsx";
import AdminNotification from "./components/admin-notification.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <head>
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
    </head>
          <LanguageProvider>
            <Navbar />
            <AdminNotification />
            <App />
          </LanguageProvider>
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);