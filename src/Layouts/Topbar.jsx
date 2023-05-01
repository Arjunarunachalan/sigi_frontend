import React from "react";
import Notification from "../Components/Icons/Notification";
import ProfileIcon from "../Components/Icons/ProfileIcon";

const Topbar = () => {
  return (
    <div>
      <div className="bg-white shadow-lg w-full h-[65px] flex">
        <img src="/sigi.png" alt="LOGO" className="w-[130px]" />
        <div className="w-full flex justify-end items-center px-10">
          <div className="mr-4">
            <button type="button">
            <Notification />
            </button>
           
          </div>
          <button
            type="button"
            className="border-2 border-[#2c8176-500] p-2 rounded-[50%]"
          >
            <ProfileIcon />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Topbar;
