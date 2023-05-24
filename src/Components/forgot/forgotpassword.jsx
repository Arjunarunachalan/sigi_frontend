import React, { useState } from 'react'
import { Outer, SubmitButton } from '../Reuse'
import { Form } from '../ChangePassword'


function Forgotpassword() {
 const [forgetForm,setforgetForm]=useState(true)
 const [emailFrom,setemailform]=useState(false)
 const[mailerr, setmailerr]=useState("")


 const [Password,setPassword]=useState("")


 const PasswordTextChanged=(e)=>{
 const value = e.target.value
  setPassword({...Password,value}) 
  console.log(Password)
  validater(Password)


 }
 const validater=(value)=>{
  let Err ={
    InvalidEmail:""
  }
  
  if (!value) {
    Err.InvalidEmail="Enter the email"
  }
  setmailerr(Err)

  if(Err.InvalidEmail){
   return(false)
  }else{
    return(true)
  }

 }
 const isvalidate = validater

 const fileSubmited=()=>{

 
 }


 
  return (
    <>
    {
    forgetForm &&
    <Outer
    Header="forgot password"
    body={
    <Form
       span={"Enter email"}
       input={<input className='input' type='email' name='email' value={Password['']} onChange={PasswordTextChanged}  />}
      />}
    button={<SubmitButton
      id="submit"
      classname="submit"
      text="Submit"
      onsubmit={fileSubmited}
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
    
      <Outer
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