import React,{useEffect, useState} from 'react'

// import Downarrow from '../../assets/images/Downarrow.svg'
// import Modal from '../modal'
import Pagination from '../Pagination/index'




const Table = ({ data, header, className,bttn}) => {
   const initialvalue = {data:"5"}
  const [valuel, setvaluel]= useState(initialvalue)
  const [startValue,setStartValue]=useState(0)
  const [endValue,setEndValue]=useState(5)
  const [tableRow,setTableRow]=useState(data)
  console.log(tableRow,data,"latest");

  // useEffect(()=>{
  //   setEndValue(parseInt(startValue)+parseInt(valuel.data))
  //   console.log(parseInt(startValue)+parseInt(valuel.data))
  // },[startValue,valuel])
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
  
  function onRowsPerTableChange(limit){
   let changedRows= data.splice(0,limit)
   console.log(tableRow,"data");
    setTableRow(changedRows)
    console.log(changedRows,limit,"hello");
  }


  function tableVal(val){
   
    setStartValue(val*valuel.data)
    // setEndValue(parseInt(startValue)+parseInt(valuel.data))
    // console.log(parseInt(startValue)+parseInt(valuel.data))
    
    
  }
  console.log(tableRow,"cj=");

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
          {tableRow &&
            tableRow.map((rowData) => {
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
      <Pagination onRowsPerTableChange={onRowsPerTableChange} Data={TotalDataLength} pageVal={tableVal} data={tableRow} />
      <div>
        {data ? null : <p>No products to display</p>}
      </div>
    </>
  )
}


export default Table
