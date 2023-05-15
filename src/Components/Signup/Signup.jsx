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
    emailErr: "",
    passwordErr: "",
    cnfpasswordErr: "",
    roleErr:""
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
    let emailErr=""
    let passwordErr=""
    let cnfpasswordErr=""
    
    if(!formData.name && formData.name == ''){
     nameErr="Enter a name "
    }
    
    if(!formData.email && formData.email == ''){
      emailErr="Enter a mail "
    }
    console.log(formData.password);
    if( formData.password == "" || formData.password.length<6){
      passwordErr="Enter a valid password"
    }
    if(formData.password != formData.cnfpassword){
      cnfpasswordErr="Password must be same "
    }
    if (nameErr || emailErr || passwordErr || cnfpasswordErr){
      setFormError({
        ...FormError,
         nameErr, emailErr, passwordErr , cnfpasswordErr,
      });
      return false;
    }
    return true;
  
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
            <span className="nameerr text-red-500"> {FormError.nameErr}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="label">
              Email
            </label>
            <input type="text" name="email" id="email" className="input" onChange={handleChange} />
            <span className="mailerr text-red-500" id="mailerr">{FormError.emailErr}</span>
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
            <span className="passerr text-red-500" id="passerr">{FormError.passwordErr}</span>
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
            <span className="cnfpassworderr text-red-500" id="cnfpassworderr">{FormError.cnfpasswordErr}</span>
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
