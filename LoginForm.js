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
            body: {
                nm:this.state.username,
                pwd:this.state.password

            }
        }

        fetch("http://localhost:8081/login",reqData)
        .then(resp => console.log(resp))
    }


  render() {
    return (
      <div>LoginForm
        <form>
        username :- <input type="text" name="username" value={this.state.username} onChange={this.handlchange} ></input><br/>
        password :- <input type="password" name="password" value={this.state.password} onChange={this.handlchange}></input><br/>
        <input type="submit" value="subData" onChange={this.sendData}></input>
        </form>
      <h>{this.state.username}</h>
      </div>
    )
  }
}
