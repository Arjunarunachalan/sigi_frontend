import React,{useState,useEffect} from 'react'
import Table from '../../Components/Table'
import apiClient from '../../config/axios'


const Products = () => {
    const[productList,setProductList]=useState([])
    const headers=[
        {accesor:"name", header: "NAME" },
        {accesor:"price", header: "Price" },
        {accesor:"description", header: "Description" },

    ]
    useEffect(()=>{
     fetchData() 
    },[])
    const fetchData=async()=> {
      try {
        const response = await apiClient.get('/products/list')
        setProductList(response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    }
    return (
        <>
          
            <Table className="s-table" data={productList} header={headers} />
            
        </>
    )
}

export default Products
