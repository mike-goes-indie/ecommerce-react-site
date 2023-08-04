import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LightBoxProvider from './components/Providers/LightBoxProvider.tsx'
import CartProvider from './components/Providers/CartProvider.tsx'
import ImageProvider from './components/Providers/ImageProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LightBoxProvider>
      <CartProvider>
        <ImageProvider>
          <App />
        </ImageProvider>
      </CartProvider>
    </LightBoxProvider>
  </React.StrictMode>,
)
