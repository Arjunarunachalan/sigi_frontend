import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from '../Components/Signup/Signup'
import Product from '../Pages/Shop/Product'
const IndexRouter = () => {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path='/shop/products' element={<Product />} />
    </Routes>
    </BrowserRouter>
    
    
  
  )
}

export default IndexRouter

