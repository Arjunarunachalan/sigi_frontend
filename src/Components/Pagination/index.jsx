import React,{useState} from 'react'
import Downarrow from '../../assets/images/Downarrow.svg'
import LeftArrow from '../../assets/images/leftArrow.svg'
import RightArrow from '../../assets/images/rightArrow.svg'


const Pagination =(props) => {

    
    
    const initialvalue ={data:"5"}
    const [select,setSelect] = useState(false)
    const [valuel, setvaluel]= useState(initialvalue)
    const[page,setPage]=useState(1)
    const pages=Math.ceil(parseInt(props.Data)/parseInt(valuel.data))
    
    
    const Selected =()=>{
        setSelect(true)
     
       }
       
       
       const clicked =(e)=>{
         var data =e.target.value
         setvaluel({...valuel,"data":data})
         props.callback(data,page);
         setSelect(false)  
         setPage(1) 
       }
       const prevPage=()=>{
        if(page>1){
          setPage((prev)=>prev-1)
          props.pageVal(parseInt(page));
        }
       }
       const nxtPage=()=>{
        
        if(page<pages){
        setPage((prev)=>prev+1)
        props.pageVal(parseInt(page));
        }
       }
       
  
  return (
    <div className='w-full flex'>
      <div className="w-1/2 items-center flex justify-start relative p-4">

     {  select && <div className='w-[90px] h-[100px] bg-[#fff] absolute items-center rounded-lg shadow-2xl font-bold ' id='parent' >

        <button value="5"  onClick={clicked} className='w-full h-1/3 justify-center items-center flex  hover:bg-hover-color'>5</button>
        <button value="10"  onClick={clicked} className='w-full h-1/3 justify-center items-center flex   hover:bg-hover-color'>10</button>
        <button value="15" onClick={clicked} className='w-full h-1/3 justify-center items-center flex   hover:bg-hover-color'>15</button>
        </div>}
             <button onClick={Selected} className=' w-[100px] h-[20px] bg-gray flex justify-center items-center p-1'>
              <div className="w-2/3 h-full justify-center items-center flex">
                {valuel.data} rows
              </div>
              <div className='w-1/3 h-full justify-center items-end flex'>
                 <img src={Downarrow} alt=""/> </div>
              </button>
           
              </div>
              <div className='w-1/2 items-center flex justify-end p-4'>
                <span className='p-4'><img src={LeftArrow} alt='arrow' onClick={prevPage}/></span><span>{page}</span><span className='p-4'><img src={RightArrow} alt='arrow' onClick={nxtPage}/></span>
              </div>
               </div>
  )
}

export default Pagination
