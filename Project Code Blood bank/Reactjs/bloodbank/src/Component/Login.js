import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar1 from './NavBar1'
import './Login.css'


const Login = () => {
    let nav=useNavigate();
    const [user_name,setUser_name] = useState("");
    const [password, setPassword] = useState("");

    const submitForm=(ev)=>{
        ev.preventDefault();
        const uData={
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
           user_name:user_name,
           password:password,


          })
        }
        fetch("http://localhost:8080/login",uData)
        .then(resp=>{
            if(resp.status===200)
            {
                alert("user successfully Login");
                nav("/reset");
            }
            else{
                alert("user faild to login");
                nav("/login");
                
            }
        }
        );

    }
    const myStyle={
      backgroundColor:'lightRed',
      backgroundImage: 
"url('/img/Login.jpg')",
      height:'700px',
      width:'100%',
      margin:"0 0 0 0",
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position:'relative',
      top:'-25px',
    }
  return ( <div>
 <NavBar1></NavBar1>
       <div className='container-flud'style={myStyle}>

        <div className='girdc' >
        <h2>LoginForm</h2>
        <form>
        <div className='in1'>
        <label for="Uname" className='form-lable in '>User_Name</label>
        <input type="text" name="user_name"className='form-control' value={user_name} onChange={(e)=>setUser_name(e.target.value)} required></input><br/>
        </div>
        <div className='in2'>
        <label for="pwd" className='form-lable'>Password</label>
        <input type="password" className='form-control' name="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
        <input type="button"className='btn btn-danger' value="Login" onChange={submitForm}></input>
        </div>

       </form>
       


</div>
</div>
    </div>
  )
}

export default Login