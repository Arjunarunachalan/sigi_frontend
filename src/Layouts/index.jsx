import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="index overflow-hidden h-screen ">
      <Topbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="p-8">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
