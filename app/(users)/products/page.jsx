import React from 'react'
import Productlist from './Productlist'

const Products = async (props) => {
    const searchParam = await props.searchParams
    console.log(searchParam)
  return (
    <div>
      <h1>Search Params</h1>
      <p>Price: {searchParam?.price}</p>
      <p>Product: {searchParam?.category}</p>
      <Productlist/>
    </div>
  )
}

export default Products
