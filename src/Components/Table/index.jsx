import React,{useEffect, useState} from 'react'

// import Downarrow from '../../assets/images/Downarrow.svg'
// import Modal from '../modal'
import Pagination from '../Pagination/index'




const Table = ({ data = null, header, className,bttn}) => {
   const initialvalue = {data:"5"}
  const [valuel, setvaluel]= useState(initialvalue)
  const [startValue,setStartValue]=useState(0)
  const [endValue,setEndValue]=useState(5)

  useEffect(()=>{
    setEndValue(parseInt(startValue)+parseInt(valuel.data))
    console.log(parseInt(startValue)+parseInt(valuel.data))
  },[startValue])
  const TotalDataLength = data.length


  const getTd = (key, row) => {
    let tableheader = header.find(header => header.accesor === key)
    
    if (typeof tableheader.render == "function") {
      return tableheader.render(row)
    }
   return row[key]
    
  }

  const prepareRow =( row )=>{
    let newRow ={};
    header.forEach((head)=>{
      const {accesor} = head;
      let rowKeys = Object.keys(row);
      if(rowKeys.includes(accesor)){
        newRow[accesor] = row[accesor];
      }
    })
    return newRow;
  }
  
  function handleCallback(Data){
    console.log(Data);
    setvaluel({...valuel,"data":Data})
  }
  function tableVal(val){
   
    setStartValue(val*valuel.data)
    // setEndValue(parseInt(startValue)+parseInt(valuel.data))
    // console.log(parseInt(startValue)+parseInt(valuel.data))
    
    
  }
  return (
    <>  
    <div className='pb-4'>
      {bttn.map((item)=>{
        return( 
          <button type={item.type} name={item.name} id={item.id} onClick={item.onClick} className={item.className}>{item.name}</button>
        )
      })}
    </div>
    
      <table className={className}>
        <thead>
          <tr>
            {data && header.map((row) => {
              return (
                <th>{row.header}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.slice(startValue,endValue).map((rowData) => {
              console.log(startValue)
              console.log(endValue)
              let row = prepareRow(rowData)
              return (
                <tr key={row.id}>
                 { Object.keys(row).map(key => {
                    return (
                      <td>{getTd(key, row)}</td>
                    )
                    
                  })}
                </tr>
              )
            })}
        </tbody>
            
      </table>
      <Pagination callback={handleCallback} Data={TotalDataLength} pageVal={tableVal} />
      <div>
        {data ? null : <p>No products to display</p>}
      </div>
    </>
  )
}

export default Table
