import React from 'react'
import Table from '../../Components/Table'
import { tableData } from './Tabledata'


const Products = () => {
    const columns = [
        {
            accesor: "image", header: "IMAGE",
            render: (data) => (<img src={data.image} alt="product" style={{ height: "50px", width: "70px" }}></img>)
        },
        { accesor: "name", header: "NAME" },
        { accesor: "id", header: "Sl. No" },
        { accesor: "price", header: "PRICE" },
    ]
    return (
        <>
            <Table className="s-table" data={tableData} header={columns} />
        </>
    )
}

export default Products
