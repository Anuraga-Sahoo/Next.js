"use server"
import React from 'react'

const page = async () => {
    const URL = "https://jsonplaceholder.typicode.com/posts"

    const res = await fetch(URL)
    const data = await res.json()
    console.log(data)
  return (
    <div>
    <h1>Server Comp</h1>

    <ul className='grid grid-cols-3 gap-5'>
        {
            data.map((item, index) => {
                return <li key={index}>{item.body}</li>
            })
        }
    </ul>
    </div>
  )
}

export default page
