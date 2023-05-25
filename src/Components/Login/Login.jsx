import React, { useState } from "react";
import "../Signup/Signup.css";
import apiClient from "../../Config/Axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
   
  });

  const[FormError,setFormError]=useState({
   
    emailErr: "",
    passwordErr: "",
    
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
  
    let emailErr=""
    let passwordErr=""
    
    
    
    
    if(!formData.email && formData.email == ''){
      emailErr="Enter a mail "
    }
    console.log(formData.password);
    if( formData.password == "" || formData.password.length<6){
      passwordErr="Enter a valid password"
    }
    
    if ( emailErr || passwordErr ){
      setFormError({
        ...FormError,
         emailErr, passwordErr , 
      });
      return false;
    }
    return true;
  
  }


  const handleSubmit = async(e)=>{
    e.preventDefault()
    //validation statements
   let isValid = validateForm()
if(isValid){
//integrating axios
try {
  const response = await apiClient.post('/login', formData);
  console.log('login successful:', response.data);
  alert("connectionb suuccesfull",)
  // Handle success, e.g., show a success message or redirect the user
} catch (error) {
  console.error('login failed:', error);
  // Handle error, e.g., display an error message to the user

  alert("connection failed1",error)
}
}
  


}

return (
  <>
    <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
      <div className="w-[90%] max-w-[400px] bg-white p-[20px] rounded-[10px] shadow-lg ">
        <form className=""  onSubmit={handleSubmit} >
          <h1 className="text-4xl   font-bold text-center mb-4">
            LogIn
          </h1>
         
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
            <button className="submit" id="submit">
              Submit
            </button>
          </div>
          <div className="mb-4 p-2">
            <div className="flex justify-center items-center">
            <a href="/signup">Create an  Account?</a>
            </div>
            <div className="forgotpassword flex justify-center items-center ">
            <a href="/forgotpassword"> forgetpassword</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
);
}
export default Signup;
