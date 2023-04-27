import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfpassword: "",
    role: "",
  });

  const[FormError,setFormError]=useState({
    nameErr: "",
    mailErr: "",
    passErr: "",
    cnfpassworderr: "",
    roleerr:""
  })
  //handle form fields changes
  const handleChange = (e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
    let errorKey = `${[e.target.name]}Err`
    setFormError({
      ...FormError,[errorKey]:""
    })
  }
 

  const validateForm = ()=>{
    let nameErr =""
    let mailErr=""
    let passErr=""
    let cnfpassworderr=""
    

    if(!formData.name && formData.name == ''){
     nameErr="enter a name "
    
    if(!formData.email){
      mailErr="enter a mail "
    }
    if(!formData.password){
      passErr="enter a valid password"
    }
    if(formData.password===formData.cnfpassword){
      cnfpassworderr="password must be same "
    }
    if (nameErr || mailErr || passErr || cnfpassworderr){
      setFormError({
        ...FormError,
         nameErr, mailErr, passErr , cnfpassworderr,
      });
      return false;
    }
    return true;
  }
  }


  const handleSubmit = (e)=>{
    e.preventDefault()
    //validation statements
   let isValid = validateForm()
if(isValid){
  alert()
}
  


}

return (
  <>
    <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
      <div className="w-[90%] max-w-[400px] bg-white p-[20px] rounded-[10px] shadow-lg ">
        <form className="" method="post" onSubmit={handleSubmit}>
          <h1 className="text-4xl text-gray-900 dark:text-white font-bold text-center mb-4">
            Sign Up
          </h1>
          <div className="mb-4">
            <label htmlFor="" className="label">
              Name  
            </label>
            <input type="text" name="name" id="name" className="input" onChange={handleChange} />
            <span className="nameerr"> {FormError.nameErr}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="label">
              Email
            </label>
            <input type="text" name="email" id="email" className="input" onChange={handleChange} />
            <span className="mailerr" id="mailerr"></span>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              onChange={handleChange}
            />
            <span className="passerr" id="passerr"></span>
          </div>
          <div className="mb-4">
            <label htmlFor="cnfpassword" className="label">
              ConfirmPassword
            </label>
            <input
              type="password"
              name="cnfpassword"
              id="cnfpassword"
              className="input"
              onChange={handleChange}
            />
            <span className="cnfpassworderr" id="cnfpassworderr"></span>
          </div>
          <div className="mb-4 flex">
            <input type="checkbox" name="role" id="role" onChange={handleChange} />
            <label htmlFor="role" className="role">
              Signup As Shope
            </label>
          </div>
          <div className="mb-4">
            <button className="submit" id="submit">
              Submit
            </button>
          </div>
          <div className="mb-4  flex justify-center items-center">
            <a href="/">Are you Registered?</a>
          </div>
        </form>
      </div>
    </div>
  </>
);
}
export default Signup;
