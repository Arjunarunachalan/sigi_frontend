import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <>
     <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
          <div className="form-container bg-white p-8 rounded-[10px] shadow-lg ">
            <form className="w-" >
              <h1 className="text-4xl text-gray-900 dark:text-white font-bold text-center">Sighn Up</h1>
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
                <input type="text" name="cnfpassword" id="cnfpassword" className="input" />
                <span className="cnfpassworderr" id="cnfpassworderr"></span>
              </div>
              <div className="mb-4">
                <input type="checkbox" name="role" id="role" className="input" />
                <label htmlFor="role" className="role ml-3">Sighnup As  Shope</label>
              </div>
              <div className="mb-4">
                <button className="submit" id="submit">Submit</button>
              </div>
             <div className="mb-4">
              <a href="/">Are you Registered?</a>
             </div>
            </form>
    
          </div>

     </div>
    </>
  );
};

export default Signup;
