import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from '../Components/Signup/Signup'
import ShopRoute from './ShopRoute'
const Route = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/signup" element={Signup} />
    </Routes>
    </BrowserRouter>
    <ShopRoute />
    
    
    </div>
  )
}

export default Route