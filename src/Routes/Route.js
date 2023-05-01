import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../Components/Signup/Signup";
import ShopRoute from "./ShopRoute";
import Layout from "../Layouts";
import Products from "../Pages/Shop/Products";
const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
            <Route path="products" element={<Products />} />
        </Route>
        {/* <ShopRoute /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRouter;
