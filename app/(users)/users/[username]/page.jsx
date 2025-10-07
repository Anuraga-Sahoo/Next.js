const SingleProfile = async (props) => {
    const user = await props.params
    console.log(props.params)
 return (
 <>
 <h1>Dynamic Route</h1>
 <h1>{user.username}</h1>
 </>
 )
}

export default SingleProfile