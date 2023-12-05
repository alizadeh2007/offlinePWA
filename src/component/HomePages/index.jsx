import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePages() {
    const navigate=useNavigate()
  return (
    <div style={{backgroundColor:"green", width:"100%" ,height:"100%"}}>
    some icons at the next page. i want to cache in this page befove navigate to next(with go button)
<button style={{width:"80px", height:"40px" , backgroundColor:"red"}} onClick={()=>navigate("/home")}>go</button>
    </div>
  )
}

export default HomePages