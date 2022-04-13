import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate=useNavigate();
  return (
    <div>About
         <h1 style={{color:"red"}}>Kanchan</h1>
        <button onClick={()=>navigate(-1)}>goback</button>
    </div>
  )
}

export default About