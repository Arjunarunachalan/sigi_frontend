import React from 'react'
import Table from '../../Components/Table'
import { tableData } from './Tabledata'


const Products = () => {
    const   columns = [
        {
            accesor: "image", header: "IMAGE",
            render: (data) => (<img src={data.image} alt="product" style={{ height: "50px", width: "70px" }}></img>)
        },
        { accesor: "name", header: "NAME" },
        { accesor: "id", header: "Sl. No" },
        { accesor: "price", header: "PRICE" },
    ]
    const bttn=[
        {
            type:"button",
            name:"button1",
            id:"",
            className:"bg-white w-[100px] text-green font-bold me-4 py-2 px-4  hover:bg-primary-green hover:bg-opacity-25 border rounded"
        },
        {
            type:"button",
            name:"button2",
            id:"",
            className:"bg-white w-[100px] text-green font-bold me-4 py-2 px-4  hover:bg-primary-green hover:bg-opacity-25 border  rounded"
        },
        {
            type:"button",
            name:"button3",
            id:"",
            className:"bg-white w-[100px] text-green font-bold me-4 py-2 px-4  hover:bg-primary-green hover:bg-opacity-25 border  rounded"
        },
        {
            type:"button",
            name:"button4",
            id:"",
            className:"bg-white w-[100px] text-green font-bold me-4 py-2 px-4  hover:bg-primary-green hover:bg-opacity-25 border  rounded"
        },
        {
            type:"button",
            name:"button5",
            id:"",
            className:"bg-white w-[100px] text-green font-bold me-4 py-2 px-4  hover:bg-primary-green hover:bg-opacity-25 border rounded"
        }
        
    ]
    return (
        <>
            <Table className="s-table" data={tableData} header={columns} bttn={bttn} />
        </>
    )
}

export default Products
