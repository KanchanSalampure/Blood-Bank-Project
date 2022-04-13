import React from 'react'
import { useNavigate } from 'react-router-dom'

const Routeing = () => {
    const navigate=useNavigate();
  return (
    <div>routeing
        <h1 style={{color:"red"}}>isha</h1>
        <button onClick={()=>navigate("/about")}>About</button>
    </div>
  )
}

export default Routeing