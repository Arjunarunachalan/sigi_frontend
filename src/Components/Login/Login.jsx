import React from "react";
import './Login.css'
function Loginform() {
    return (
        <div className="wrapper d-flex align-items-center justift-content-center w-100">
        <div className="login">
            <h2 className="mb-3">Login Form</h2>
            <div className="form_group mb-2">
                <label htmlFor="email">Email Address</label>
                <input type="email"/>
            </div>
            <div className="form_group mb-2">
                <label htmlFor="password">Password</label>
                <input type="password"/>
            </div>
            <div className="form_group mb-2">
                <label htmlFor="checkbox"></label>
                <input type="check"/>Remember m/e
            </div>
            <button type="submit" className="btn btn-blue mt-2">SIGN IN</button>
        </div>
        </div>
    )
}
export default Loginform