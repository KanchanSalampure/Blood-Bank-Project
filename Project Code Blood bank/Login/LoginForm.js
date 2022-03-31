import React, { Component } from 'react'

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
        .then(resp => resp.text())
    }


  render() {
    return (

      <div className='container'>
        <h2>LoginForm</h2>
        <form>
        <div style={{}}>
        <label for="Uname" className='form-lable'>User_Name</label>
        <input type="text" name="username"className='form-control' value={this.state.username} onChange={this.handlchange} required></input><br/>
        </div>
        <div className='mt-0 mb-0'>
        <label for="pwd" className='form-lable'>Password</label>
        <input type="password" className='form-control' name="password" value={this.state.password} onChange={this.handlchange}></input><br/>
        <input type="submit"className='btn btn-primary' value="subData" onChange={this.sendData}></input>
        </div>
        </form>
      <h>{this.state.username}</h>
      </div>
    )
  } 
}
