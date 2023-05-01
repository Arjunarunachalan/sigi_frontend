import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Topbar />
      <div className="flex h-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
