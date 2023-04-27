import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <>
     <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
          <div className="w-[400px] bg-white p-[20px] rounded-[10px] shadow-lg ">
            <form className="" >
              <h1 className="text-4xl text-gray-900 dark:text-white font-bold text-center">Sign Up</h1>
              <div className="mb-4">
                <label htmlFor="" className="label">Name</label>
                <input type="text" name="name" id="name" className="input" />
                <span className="nameerr"></span>
              </div>
              <div className="mb-4">
                <label htmlFor="" className="label">Email</label>
                <input type="text" name="email" id="email" className="input" />
                <span className="mailerr" id="mailerr"></span>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" name="password" id="password" className="input" />
                <span className="passerr" id="passerr"></span>
              </div>
              <div className="mb-4">
                <label htmlFor="cnfpassword" className="label">ConfirmPassword</label>
                <input type="password" name="cnfpassword" id="cnfpassword" className="input" />
                <span className="cnfpassworderr" id="cnfpassworderr"></span>
              </div>
              <div className="mb-4 flex">
                <input type="checkbox" name="role" id="role"  />
                <label htmlFor="role" className="role">Signup As Shope</label>
              </div>
              <div className="mb-4">
                <button className="submit" id="submit">Submit</button>
              </div>
             <div className="mb-4  flex justify-center items-center">
              <a href="/" >Are you Registered?</a>
             </div>
            </form>
    
          </div>

     </div>
    </>
  );
};

export default Signup;
