// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
  // </React.StrictMode>
);
