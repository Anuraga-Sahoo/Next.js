// for server side component

// const SingleProfilePost = async (props) => {
//     const user = await props.params
//     console.log(props.params)
//  return (
//  <>
//  <h1>Dynamic Route</h1>
//  <h1>Post id = {user.postid}</h1>
//  </>
//  )
// }

// export default SingleProfilePost



// for client component

"use client"

import { use } from "react"


const SingleProfilePost =  (props) => {
    const user = use(  props.params)
    console.log(props.params)
 return (
 <>
 <h1>Dynamic Route</h1>
 <h1>Post id = {user.postid}</h1>
 </>
 )
}

export default SingleProfilePost