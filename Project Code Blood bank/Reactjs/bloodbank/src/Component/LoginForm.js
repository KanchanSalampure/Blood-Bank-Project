import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import NavBar1 from './NavBar1'

export default class LoginForm extends Component {

    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
         }
    }
      
    handlchange =(e)=>{
       
        const val=e.target.value;
        const un=e.target.name;
         this.setState({[un]:val})

    }
   
    sendData=(ev)=>{
        ev.preventDefault();
        console.log(this.state);
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name:this.state.username,
                pwd:this.state.password

            })
        }

        fetch("http://localhost:8080/login",reqData)
        .then(resp => resp.json())//.then(resp => console.log(resp.json()))
        .then(obj =>{
           
            console.log(user)

           // localStorage.setItem("loginfarmer",JSON.stringify(user));
           //ALWAYS STRINGIFY ATLEAST TO SEE IN THE ALERT BOX
           
           if(obj.type === 'patient')
           {
               localStorage.setItem("logindealer",JSON.stringify(obj));
             //  mystore.dispatch({type:'LOGGEDIN'})
               navigate('/bloodbag');
           }
           else if( obj.type === 'admin')
           {
               alert("login as Admin")
            console.log(obj.type);
               localStorage.setItem("loginadmin",JSON.stringify(obj));
             //  mystore.dispatch({type:'LOGGEDIN'})
               navigate('/adminhome');
           }
           else if(obj.type ==='donor'){
               localStorage.setItem("loginfarmer",JSON.stringify(obj));
               //mystore.dispatch({type:'LOGGEDIN'})
               navigate('/farmerhome');
           }
           else if(obj.type == null)
           {
               mystore.dispatch({type:'LOGGEDIN'})
               navigate('/login');
           }
        } )
    }
    


  render() {
    return (

        


      <div className='container'>
      
        
        <h2>LoginForm</h2>
        <form>
        <div>
        <label for="Uname" className='form-lable'>User_Name</label>
        <input type="text" name="username"className='form-control' value={this.state.username} onChange={this.handlchange} required></input><br/>
        </div>
        <div className='mt-0 mb-0'>
        <label for="pwd" className='form-lable'>Password</label>
        <input type="password" className='form-control' name="password" value={this.state.password} onChange={this.handlchange}></input><br/>
        <input type="submit"className='btn btn-primary' value="subData" onChange={this.sendData}></input>
        </div>

       </form>
       

      </div>
     
    )
}
}