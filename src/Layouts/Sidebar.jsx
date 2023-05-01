import React from "react";
import Dashborad from "../Components/Icons/Dashborad";
import ProductIcon from "../Components/Icons/ProductIcon";
import {  useNavigate } from "react-router-dom";
import Styles from './layouts.module.css'
const Sidebar = () => {
  const navigate = useNavigate()
  const items = [
    {
      icon: <Dashborad />,
      title: "Dashboard",
      link: "/",
    },
    {
      icon: <ProductIcon />,
      title: "Products",
      link: "/products",
    },
  ];

  const navigateToHref = (link)=>{
    navigate(link)
  }
  return (
    <div className="w-[300px] bg-white-500 shadow-2xl  h-full flex ">
      <ul className="w-full px-5 py-9">
        {items.map((data,index) => (
          <li className="mb-5 flex justify-center" key={index}>
              <div
                role="button"
                onClick={()=>navigateToHref(data.link)}
                className={`w-full flex justify-start items-center px-6 py-3 bg-primary-green rounded-[10px] ${
                  window.location.pathname == data.link && "bg-hover-color-400"
                } ${Styles["nav-link"]}`}
              >
                {data.icon}
                <span className="ml-4 font-semibold tracking-wider"> {data.title} </span> 
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
