import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Products from '../Pages/Shop/Products'

const ShopRoute = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes >
            
            
            <Route path="/shop/products" element={<Products />} />

            

          

        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default ShopRoute