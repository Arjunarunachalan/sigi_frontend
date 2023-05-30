import React, { useState } from 'react'
import { Box, SubmitButton } from '../Reuse'
import { Form } from '../ChangePassword'
import apiClient from '../../config/axiosConfig'


function Forgotpassword() {
 const [forgetForm,setforgetForm]=useState(false)
 const [emailFrom,setemailform]=useState(true)
 const[mailerr, setmailerr]=useState("")
 const [Email,setEmail]=useState("")


 const PasswordTextChanged=(e)=>{
 const value = e.target.value
  setEmail({...Email,value}) 
  console.log(Email)
  validater(Email)


 }
 const validater=(value)=>{

  
  if (value.length <= 2) {
    setmailerr("Enter the valid email")
  }else{
    setmailerr("")
  }

  if(mailerr){
   return(false)
  }else{
    return(true)
  }

 }


 const fileSubmited = (e)=>{
  console.log(mailerr)
  e.preventDefault()
 
 apiClient.post('/forgot-password', Email)
 .then(function(result) {
  // Handle the resolved value
  alert('Promise resolved with result');
  setforgetForm(false)
  setemailform(true)
})
.catch((error)=>{
  if (error.response.status === 401) {
    setmailerr("User can't find")
  }
  console.log(mailerr)
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
       input={<input className='input w-full' type='email' name='email' value={Email['']} onChange={PasswordTextChanged}  />}
       error={<div className='w-full forgotpassword'>{mailerr}</div>}
      />}
      button={<SubmitButton
      classname="submit"
      text="Submit"
      handlesubmit={fileSubmited}
    
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
  const initialValue = {firstnumber:"",secondnumber:"",thirdnumber:"", fourthnumber:""}
  const [otpinput,setOtpinput]= useState(initialValue)
  const [error,seterror]=useState()
  

 const otpNumberChanged=(e)=>{
  const{ value , name }= e.target
  setOtpinput({...otpinput,[name]:value})
  
  }
  

const otpValidate=(otpinput)=>{
 const warning={
  message:""
 }

    if (!otpinput.firstnumber) {
    warning.message = "Enter complete OTP"
   }
   if (!otpinput.secondnumber) {
    warning.message = "Enter complete OTP"
   }
   if (!otpinput.thirdnumber) {
    warning.message = "Enter complete OTP"
   }
   if (!otpinput.fourthnumber) {
    warning.message = "Enter complete OTP"
   }
  if(warning.message){
    seterror(warning.message)
    alert("hello")
    return false
  
  }else{
    seterror(warning.message)
    return true
    
  }
}


  const OTPsubmit=()=>{
    otpValidate(otpinput)
    const isValidate = otpValidate
    const Otp = {OTP:otpinput.firstnumber + otpinput.secondnumber + otpinput.thirdnumber + otpinput.fourthnumber}

    if(isValidate){
      apiClient.post("/forgot-password/authentication",Otp)

    }
    

  }
  
  return(
  <>
    
      <Box
    Header="Enter OTP"
    body={
    <Form
       input={
       <>

       <div className="w-full flex gap-4 text-xl">
       <div className="w-1/4 ">
       <input className='input Otpcolomun justify-center text-center flex' type="text" maxLength={1}  name='firstnumber'   value={[otpinput][""]} onChange={otpNumberChanged} />
       </div>
       <div className="w-1/4">
       <input className='input Otpcolomun' type="text" maxLength={1}  name='secondnumber' value={[otpinput][""]} onChange={otpNumberChanged} />
       </div>
       <div className="w-1/4">
       <input className='input Otpcolomun'  type="text" maxLength={1}  name='thirdnumber'value={[otpinput][""]} onChange={otpNumberChanged}  />
       </div>
       <div className="w-1/4">
       <input className='input Otpcolomun' type="text" maxLength={1}  name='fourthnumber' value={[otpinput][""]}  onChange={otpNumberChanged} />
       </div>
       </div>
       
       </>}
       error={error}
      />}
    button={<SubmitButton
      id="submit"
      classname="submit"
      text="Submit"
      handlesubmit={OTPsubmit}
      />}
    />
    </>
  )
}

export default Forgotpassword