import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from '../Components/Signup/Signup'
import ShopRoute from './ShopRoute'
const Rote = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Rote path="/sugnup" element={Signup} />
    </Routes>
    </BrowserRouter>
    <ShopRoute />
    
    
    </div>
  )
}

export default Rote