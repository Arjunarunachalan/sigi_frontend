import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../Components/Signup/Signup";
import ShopRoute from "./ShopRoute";
import Layout from "../Layouts";
import Products from "../Pages/Shop/Products";
import ProfileItems from "../Layouts/ProfileItems";
import Addproduct from "../Components/Signup/Addproduct.jsx/Addproduct";
const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<Signup />} />
       
        

        <Route path="/" element={<Layout />}>
            <Route path="products" element={<Products />} />
            <Route path="addproduct" element={<Addproduct />} />
           
        </Route>
        {/* <ShopRoute /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRouter;
