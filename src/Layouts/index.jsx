import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="index overflow-hidden h-screen ">
      <Topbar />
      <div className="flex h-full overflow-hidden">
        <Sidebar />
        <div className="p-8 w-full h-[91%] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
