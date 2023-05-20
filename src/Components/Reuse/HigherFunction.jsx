import React, { useState } from 'react'

const HigherFunction=(OriginalComponents)=>{
    const ValidationComponent=()=>{
      const initialValue ={Currentpassword:"", Newpasssword:"",reNewpassword:""}
      const [Value ,SetValue]=useState(initialValue)
      const [err,seterr]=useState("")
      const userpassword = "123456789"


     const changeHandle=(e)=>{
        const{ name, value} =e.target
        SetValue({...Value,[name]:value})
        console.log(e.target.name);
        const errors= validate(Value)
        seterr(errors)
      }
      const validate=(value)=>{
        let Err={}
        if(value.Currentpassword != userpassword){
            Err.data="Password is Incorrect"
        }else if(value.Newpasssword != value.reNewpassword ){
            Err.data= "New passwods are not Same !"
        }
          return Err
      }
      const handlesubmit=()=>{
        if(err.data == ""){
            alert("fine")
        }


      }
      console.log(initialValue);


        return <OriginalComponents onchange={changeHandle} initialValue={Value} Error={err.data} handlesubmit={handlesubmit}/>
               

    }

  return ValidationComponent 
}

export default HigherFunction