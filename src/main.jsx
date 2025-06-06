import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { AiContextProvider } from './context/AiContext'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <AiContextProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </AiContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
