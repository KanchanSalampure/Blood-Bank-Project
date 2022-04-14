import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar1 from './NavBar1';

const About = () => {
    const navigate=useNavigate();
     const myStyle={
    backgroundColor:'lightRed',
    backgroundImage: "url('/img/backg1.jpg')",     
    height:'800px',
    width:'100%',
    margin:"0 0 0 0",
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position:'relative',
    top:'-25px',
    
  
    
}
  return (
  <>
  <NavBar1/>
    <div className='container-flud'style={myStyle}>

      <h1 style={{ textAlign:"center"}}>About us</h1>
         <h3 style={{color:"red"}}>Kanchan Salampure PRN:_210943020033</h3>
         <h3 style={{color:"red"}}>Rohit Bachche PRN: 210943020074</h3>
         <h3 style={{color:"red"}}>Sakshi Gandalwar PRN: 210943020079</h3>
         <h3 style={{color:"red"}}>Rohit Jadhav PRN: 210943020073</h3>
         <h3 style={{}}> We help people who are in need of
            transfusion or willing to donate their blood.This 
            online blood donation management system maintains 
            the list of blood donors and also helps the recipients 
            to track the right donor easily.  </h3>
        <button className='btn btn-danger' onClick={()=>navigate(-1)} style={{ position:'relative',
  left:"800px"}}>goback</button>
    </div>
    </>
  )
 
}

export default About