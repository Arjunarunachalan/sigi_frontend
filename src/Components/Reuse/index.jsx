import React from "react";
import "./index.css"

export const  Outer=(props)=>{

    return(
        <>
    <div className=" main bg-slate-200 w-full h-full p-5 flex justify-center items-center">
        
    <form className="" method="post"  >
      <div className=" w-full md:w-[400px] max-w-[400px] bg-white p-[20px] rounded-[10px] shadow-lg h-4/5  justify-center flex">
      <div className="p-[20px]">
        <span className="header w-full text-[30px] justify-center items-center flex h-1/5">{props.Header}</span>
        <span>{props.body} </span>  
        <span>
       { props.button}
        </span>
        <div className="Error justify-center items-center flex p-4 w-full h-[40px]">
            {props.Errormsg}
        </div>
        </div>
      </div>
      </form>
      </div>
        </>
    )
}

export const SubmitButton = (props) => {
  return (
    <button className={props.classname} id={props.id} onSubmit={props.handlesubmit}>
  { props.text}
  </button>
  )
}
