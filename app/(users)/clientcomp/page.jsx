"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
    const [bdata, setbData] = useState([])

    const URL = "https://jsonplaceholder.typicode.com/posts"

    
    useEffect(()=>{
        async function getData () {
            const res = await fetch(URL)
            const data = await res.json()
            setbData(data)
            console.log(data)
        }
        getData()
        
    },[])

  return (
    <div>
      <h1 className='font-bold text-3xl'>Client component</h1>
      <ul>
        {bdata.map((item, index)=>{
            return <li key={index}>{item.body}</li>
        })}
      </ul>
    </div>
  )
}

export default page
