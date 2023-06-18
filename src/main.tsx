import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LightBoxProvider from './components/Providers/LightBoxProvider.tsx'
import CartProvider from './components/Providers/CartProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LightBoxProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </LightBoxProvider>
  </React.StrictMode>,
)
