import React from 'react'
import { Outer, SubmitButton } from '../Reuse'
import "./index.css"
import HigherFunction from '../Reuse/HigherFunction'


function ChangePassword(props) {
  const {initialValue,onchange,Error,handlesubmit }=props
  console.log(initialValue);  
  return (
    <Outer
    Header={"Change Password"}
    body={<>
    <Form 
       span={"CurrentPassword"}
       input={ <input className='input ' type="password" value={[initialValue]['']} name='Currentpassword' onChange={onchange}  />}
       />
    <Form
     span={"Newpassword"}
     input={ <input className='input ' type="password" value={[initialValue]['']} name='Newpasssword' onChange={onchange} />}
     />
    <Form
     span={"Re-Newpassword"}
     input={ <input className='input ' type="password" value={[initialValue][""]} name='reNewpassword' onChange={onchange}  />}
     />
  
     
    </>
   
  }
  button={<SubmitButton
    id="submit"
    classname="submit"
    text="Submit"
    onsubmit={handlesubmit}
  />  }

   Errormsg={Error}
  />
  )
}

export default HigherFunction(ChangePassword)

export const Form=(props)=>{
 return(
  <>
  <div className="main w-full">
  <label className='label pb-2'>
  <span className='span  '>{props.span}</span>
   {props.input}
  </label>
  </div>
  </>
 )
}
