import React from 'react'
import './Table.css'


const Table = ({data=null,columns}) => {
   
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
                {data &&columns.map((row)=>{
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
                    {columns.map(col=>{
                        console.log(col.field)
                        if(col.field=='image'){
                            return(
                                <div className=' flex justify-center' >
                            <td><img src={row[col.field]} style={{width:"80px", height:"50px"}}></img></td>
                            </div>)
                        }else{
                            return(<td className='text-center'>{row[col.field]}</td>)}
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
