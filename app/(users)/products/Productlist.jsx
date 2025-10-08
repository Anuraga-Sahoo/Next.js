"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Productlist = () => {
    const searchParams = useSearchParams()

    console.log("inside", searchParams)
    const price = searchParams.getAll("price")
    const category = searchParams.get("category")
    console.log("price", price)
    console.log("category", category)
  return (
    <>
      Product List
      <h1>Price : {price}</h1>
      <h1>Category: {category}</h1>
    </>
  )
}

export default Productlist
