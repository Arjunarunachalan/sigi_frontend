import React, {useState} from 'react'
import { Box, SubmitButton } from '../Reuse'
import "./index.css"
import apiClient from '../../config/axiosConfig'



function ChangePassword(props) {

    const initialValue ={oldPassword:"", newPassword:"",confirmPassword:""}
    const [Value ,SetValue]=useState(initialValue)
    const [err,seterr]=useState("")
    


   const inputChange=(e)=>{
      const{ name, value} =e.target
      SetValue({...Value,[name]:value})
     
    }

    const validate=(value)=>{
      let Err={
        Currentpassword:"",
        Newpassword:"",
        ReEnterpassword:""

      }
      console.log(value.oldPassword.length);
      if(value.oldPassword.length <=1 ){
        Err.Currentpassword="Enter the password"
      }
      if(value.newPassword.length <= 4){
          Err.Newpassword="Too small password"
      }
      if(value.confirmPassword != value.newPassword){
          Err.ReEnterpassword= "Both are diffrent password"
      }
    
      seterr(Err)
        if(Err.Newpassword || Err.ReEnterpassword || Err.Currentpassword){
          return(false)
        }else{
          return(true)
        }
        
    }
  const FormSubmited=(e)=>{
    e.preventDefault()
    validate(Value)
    if(validate){
    apiClient.post('/change-password',Value ).then((response)=>{
      try {
        alert("succesfully updated")
        console.log(response.status);
      } catch (error) {
        alert("Somthing wrong")
        console.log(response.status);
      }
    })
  }

  }
  return (
    <Box
    Header={"Change Password"}
    body={<>
    <Form 
       span={"CurrentPassword"}
       input={ <input className='input ' type="password" value={[Value][""]} name='oldPassword' onChange={inputChange}  />}
       error={<span className='forgotpassword'>{err.Currentpassword}</span>}
        />
        
      
    <Form
     span={"Newpassword"}
     input={ <input className='input ' type="password" value={[Value][""]} name='newPassword' onChange={inputChange} />}
     error={<span className='forgotpassword'>{err.Newpassword}</span>}
     />
    <Form
     span={"Re-Newpassword"}
     input={ <input className='input ' type="password" value={[Value][""]} name='confirmPassword' onChange={inputChange}  />}
     error={<span className='forgotpassword'>{err.ReEnterpassword}</span>}
     />
  
     
    </>
   
  }
  button={
  <SubmitButton
    id="submit"
    classname="submit"
    text="Submit"
    handlesubmit={FormSubmited}
  />  }
  />
  )

}

export default ChangePassword

export const Form=(props)=>{
 return(
  <>
  <div className="main w-full">
  <label className='label pb-2'>
  <span className='span'>{props.span}</span>
   {props.input}
   {props.error}
  </label>
  </div>
  </>
 )
}
