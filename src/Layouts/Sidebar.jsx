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
      icon: <ProductIcon fill="#66CE69" />,
      title: "Products",
      link: "/products",
    },
  ];

  const navigateToHref = (link)=>{
    navigate(link)
  }
  return (
    <div className="w-[300px] bg-white-500  h-full flex " style={{backgroundColor:'white'}}>
      <ul className="w-full px-5 py-9">
        {items.map((data,index) => (
          <li className="mb-5 flex justify-center" key={index}>
              <div
                role="button"
                onClick={()=>navigateToHref(data.link)}
                className={`w-full flex justify-start items-center px-6 py-3 rounded text-primary-green ${
                  window.location.pathname == data.link &&  "bg-primary-green bg-opacity-20 "
                } hover:bg-primary-green hover:bg-opacity-25`}
              >
                {data.icon}
                <span className="ml-4 font-semibold tracking-wider "> {data.title} </span> 
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
