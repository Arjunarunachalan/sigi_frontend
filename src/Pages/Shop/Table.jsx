import React from 'react'
import './Table.css'


const Table = ({data=null,header}) => {
   const getTd=(key,row)=>{
    let tableheader=header.find(header=>header.accesor===key)
   console.log(tableheader)
    if(typeof tableheader.render=="function"){
      return(
        <td>{tableheader.render(row)}</td>
      )
    }
    return(
      <td>{row[key]}</td>
    )
   }
   
  return (
    <div className='p-4 w-4/6 m-8'>
        <div className='flex justify-end mb-8'>
        <button className="bg-primary-green font-bold py-2 px-4 border border-blue-700 rounded">
  ADD Product
</button>
        </div>
      <table className='w-full p-4'>
        <thead>
            <tr className='border-solid- border-b-4 '>
                {data &&header.map((row)=>{
                    return(
                    <th>{row.header}</th>
                    )
                })}
            </tr>
        </thead>
        <tbody>
            {data &&
            data.map((row)=>{
                return(
                <tr key={row.id} className='border-gray-50 border-solid border-b-2 border-light-gray-300'>
                    {Object.keys(row).map(key=>{
                        let value=row[key]
                        console.log(value)
                        return(
                           <td>{getTd(key,row)}</td>
                        )
                    })}
                </tr>
           ) })}
        </tbody>
        
      </table>
      <div>
      {data?null:<p>No products to display</p>}
      </div>
      
    </div>
  )
}

export default Table
