import React from 'react'


const Table = (props) => {
    const item=props.tbody
  return (
    <div>
      <div className='w-full h-screen p-4'>
                <div className='w-full h-[100px] flex justify-end items-center p-2'>
                    <button className="bg-[#2c8176] hover:bg-[#5e9a91] text-white font-bold py-2 px-4 h-[35px] rounded">Add Product</button>
                </div>
                <div>
                    <table className='w-[90%]'>
                        <thead >
                            <tr className='bg-[#2c817667]'>
                                <th className='head'>Sl.no</th>
                                <th className='head'>Name</th>
                                <th className='head'>Price</th>
                                <th className='head'>Category</th>
                                <th className='head'>Image</th>
                                <th className='head'> </th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr>
                                {item.map(prod=>{
                                    return(
                                        
                                    <td className='text-center'>{prod}</td>
                                    
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
    </div>
  )
}

export default Table
