import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../Components/Signup/Signup";
import Layout from "../Layouts";
import Products from "../Pages/Shop/Products";
import Login from "../Components/Login/Login";
import ChangePassword from "../Components/ChangePassword";
import Forgotpassword from "../Components/forgot/forgotpassword";
const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
         <Route path="/" element={<Layout />}>
          <Route path="products" element={<Products />} />
          <Route path="changepassword" element={<ChangePassword/>} />
          <Route path="forgotpassword" element={<Forgotpassword/>}/>
        </Route>
        {/* <ShopRoute /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRouter;
