import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from '../Components/Signup/Signup'
import ShopRoute from './ShopRoute'
const IndexRouter = () => {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/signup" element={<Signup />} />
    {/* <ShopRoute /> */}
    </Routes>
    </BrowserRouter>
    
    
  
  )
}

export default Route

