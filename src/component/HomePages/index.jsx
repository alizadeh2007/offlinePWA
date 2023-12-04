import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePages() {
    const navigate=useNavigate()
  return (
    <div style={{backgroundColor:"blue", width:"100%" ,height:"100%"}}>
    HomePage55sssssssssss
<button style={{width:"80px", height:"40px" , backgroundColor:"red"}} onClick={()=>navigate("/home")}>go</button>
    </div>
  )
}

export default HomePages