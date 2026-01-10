import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// src/index.tsx (top of file, before React rendering)
const saved = localStorage.getItem("site-theme");
if (saved === "dark") document.documentElement.classList.add("dark");
else if (saved === "light") document.documentElement.classList.add("light");
// else leave as-is (default). Optionally set default to light if you prefer:
// else document.documentElement.classList.add("light");


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
