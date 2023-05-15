import React, { useState } from "react";
import "../Signup.css";

const Addproduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    
  });

  const[FormError,setFormError]=useState({
    nameErr: "",
    priceErr: "",
    descriptionErr: "",
    imageErr:""
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
    let  priceErr=""
    let descriptionErr=""
    let imageErr=""
    
    if(!formData.name && formData.name == ''){
     nameErr="Enter a name "
    }
    
    if(!formData.price && formData.price == ''){
      priceErr="Enter a valid Price "
    }
   
    if(! formData.description|| formData.description==''){
      descriptionErr="Enter a Product Description"
    }
    if(!formData.image ||formData.image==''){
      imageErr="Upload a Product image "
    }
    if (nameErr || priceErr || descriptionErr || imageErr){
      setFormError({
        ...FormError,
         nameErr, priceErr,descriptionErr  , imageErr,
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
    <div className="bg-slate-200 w-full h-screen flex justify-center items-center mb-6">
      <div className="w-[90%] max-w-[400px] bg-white p-[20px] rounded-[10px] shadow-lg ">
        <form className="" method="post" onSubmit={handleSubmit}>
          <h1 className="text-4xl text-gray-900 dark:text-white font-bold text-center mb-4">
          Add Product
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
              Price
            </label>
            <input type="text" name="price" id="price" className="input" onChange={handleChange} />
            <span className="mailerr text-red-500" id="priceErr">{FormError.priceErr}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="label">
            description
            </label>
            <input
              type="description"
              name="description"
              id="description"
              className="input"
              onChange={handleChange}
            />
            <span className="passerr text-red-500" id="passerr">{FormError.descriptionErr}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="cnfpassword" className="label">
              Insert Product Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className="input"
              onChange={handleChange}
            />
            <span className="cnfpassworderr text-red-500" id="cnfpassworderr">{FormError.imageErr}</span>
          </div>
         
          <div className="mb-4">
            <button className="submit" id="submit">
              Add Product
            </button>
          </div>
          
        </form>
      </div>
    </div>
  </>
);
}
export default Addproduct;
