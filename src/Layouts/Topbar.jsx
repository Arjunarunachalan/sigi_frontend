import { React, useState } from "react";
import Notification from "../Components/Icons/Notification";
import ProfileIcon from "../Components/Icons/ProfileIcon";
import ProfileItems from "./ProfileItems";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [profile, setprofile] = useState(false);
  const profileHandler = () => {
    setprofile(!profile);
  };

  const removeList= ()=>{
    setprofile(false)
  }

  console.log(profile);
  return (
    <div className="topbar" style={{ backgroundColor: "white" }}>
      <div className="   w-full   h-[65px] flex">
        <img src="/sigi.png" alt="LOGO" className="w-[130px]" />
        <div className="w-full flex justify-end items-center px-10">
          <div className="mr-4">
            <button type="button">
              <Notification stroke="#66CE69" />
            </button>
          </div>
          <div className="buttonSection">
            <button
              type="button"
              className="border-2 border-[#66CE69] border-opacity-50 p-2 rounded-[50%]"
              onClick={profileHandler}
            >
              <ProfileIcon stroke="#66CE69" />
            </button>

            {profile ? (
              <>
                <div >
                <div className="absolute top-[80px] bg-white right-[15px]  rounded-[10px] p-4 shadow-lg" onClick={removeList}>
                  <ul>
                    <li className="px-5 py-4 border border-r-0 border-l-0 border-t-0 border-b-primary-green border-opacity-50" >
                      <Link>Edit Profile</Link>
                    </li>
                    <li className="px-5 py-4 border border-r-0 border-l-0 border-t-0 border-b-primary-green border-opacity-50">
                      <Link>Change Password</Link>
                    </li>
                    <li className="px-5 py-4">
                      <Link>Logout</Link>
                    </li>
                  </ul>
                </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
