import React from 'react'

const page = async (props) => {
    const {slug} = await props.params
    console.log(slug)
  return (
    <>
     <h1>Blog</h1> 
     <input type="search" name="" id="" />
    </>
  )
}

export default page
