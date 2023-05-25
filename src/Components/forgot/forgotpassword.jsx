import React, { useState } from 'react'
import { Box, SubmitButton } from '../Reuse'
import { Form } from '../ChangePassword'
import apiClient from '../../Config/Axios'


function Forgotpassword() {
 const [forgetForm,setforgetForm]=useState(true)
 const [emailFrom,setemailform]=useState(false)
 const[mailerr, setmailerr]=useState("")


 const [Email,setEmail]=useState("")


 const PasswordTextChanged=(e)=>{
 const value = e.target.value
  setEmail({...Email,value}) 
  console.log(Email)
  validater(Email)


 }
 const validater=(value)=>{
  let Err ={
    InvalidEmail:""
  }
  
  if (!value) {
    Err.InvalidEmail="Enter the email"
  }

  if(Err.InvalidEmail){
   setmailerr(Err)
   return(false)
  }else{
    setmailerr(Err)
    return(true)
  }

 }
 

 const fileSubmited = (e)=>{
  e.preventDefault()
 
   apiClient.post('/forgot-password', Email).then((responce)=>{
  
     try {
      alert("sucessfully")
      setemailform(false)
      setforgetForm(true)
     } catch (error) {
      alert("somethig error")
      
     }

    })
  

  

 }


 
  return (
    <>
    {
    forgetForm &&
    <Box
    Header="forgot password"
    body={
    <Form
       span={"Enter email"}
       input={<input className='input' type='email' name='email' value={Email['']} onChange={PasswordTextChanged}  />}
      />}
    button={<SubmitButton
      classname="submit"
      text="Submit"
      onSubmit={fileSubmited}
      />}
    />
    }{
      emailFrom &&
    <EmailForm/>
    }
    </>
  )
}
export const EmailForm=()=>{
  return(
  <>
    
      <Box
    Header="Enter OTP"
    body={
    <Form
       input={
       <>
       <div className="w-full flex gap-4 ">
       <div className="w-1/4">
       <input className='input' type='email' name='email' value={""} />
       </div>
       <div className="w-1/4">
       <input className='input' type='email' name='email' value={""} />
       </div>
       <div className="w-1/4">
       <input className='input' type='email' name='email' value={""} />
       </div>
       <div className="w-1/4">
       <input className='input' type='email' name='email' value={""} />
       </div>
       </div>
       
       </>}
      />}
    button={<SubmitButton
      id="submit"
      classname="submit"
      text="Submit"
      />}
    />
    </>
  )
}

export default Forgotpassword