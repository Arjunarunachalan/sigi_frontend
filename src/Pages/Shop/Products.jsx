import React from 'react'
import Table from './Table'
import { tableData } from './Tabledata'


const Products = () => {
    const columns=[
        {field:"id", header:"Sl. No"},
        {field:"name", header:"NAME"},
        {field:"price", header:"PRICE"},
        {field:"image", header:"IMAGE"}
    ]
    return (
        <>
            <Table data={tableData} columns={columns} />
        </>
    )
}

export default Products
