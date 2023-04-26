import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <>
     <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
          <div className="form-container bg-white p-8 rounded-[10px] shadow-sm ">
            <form >
              <div className="mb-4">
                <label htmlFor="" className="label">Name</label>
                <input type="text" name="name" id="name" className="input" />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="label">Email</label>
                <input type="text" name="email" id="email" className="input" />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="label">Email</label>
                <input type="text" name="email" id="email" className="input" />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="label">Email</label>
                <input type="text" name="email" id="email" className="input" />
              </div>
            </form>
          </div>

     </div>
    </>
  );
};

export default Signup;
