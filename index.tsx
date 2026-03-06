import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import "./styles/export-fix.css";
import "./index.css";
import { AuthProvider } from "./context/AuthContext"

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}



ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider> 
        <App />
      </AuthProvider> 
    </HelmetProvider>
  </React.StrictMode>
);
