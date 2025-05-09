import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { FavoriteProvider } from './utils/context/FavouriteContext'
import { CartProvider } from './utils/context/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <FavoriteProvider>
        <RouterProvider router={router} />
      </FavoriteProvider>
    </CartProvider>
  </StrictMode>,
)
