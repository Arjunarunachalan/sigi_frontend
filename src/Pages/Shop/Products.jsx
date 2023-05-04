import React from 'react'
import Table from './Table'
import { tableData } from './Tabledata'


const Products = () => {
    const columns=[
        {accesor:"id", header:"Sl. No"},
        {accesor:"name", header:"NAME"},
        {accesor:"price", header:"PRICE"},
        {accesor:"image", header:"IMAGE",
        render:(data)=>(<img src={data.image} alt="product" style={{height:"50px",width:"70px"  }}></img>)}
    ]
    return (
        <>
            <Table className="" data={tableData} header={columns} />
        </>
    )
}

export default Products
