import React, { Component } from 'react';

import './SearchBar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';









export default class BloodRequset extends Component {
    constructor(props){
        super(props);
        this.state={
       
            Type:"********",
            Quantity:"",
            Name:"",
            Address:"",
            Contact_No:"",
            Email:"",
                     
           
        }
    }
    
    handleInput=(ev)=>{
        const nm = ev.target.name;
        const val = ev.target.value;
        this.setState({[nm]: val});
    }
    sendData=(ev)=>{
        ev.preventDefault();
        console.log(this.state);
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                Type: this.state.Type
            })     
          };

        fetch("http://localhost:8081/",reqData)
        .then(resp => resp.json())
        .then(data => this.setState({ Type:data[0].Type, Quantity:data[0].Quantity, Name:data[0].Name, Address:data[0].Address, Contact_No:data[0].Contact_No,Email:data[0].Email,Location:data[0].Location} ))
    }
 componentDidMount=()=>{
    $(".mytable").fadeOut()
     $(".mybtn").on("click",function(){
       $(".mytable").fadeToggle()
     })

 }



  render() {
    return (
      <div>
        <div className=' box'>
          <select className='Searchinput'>
            <option value="">select</option>
            <option value="A+">A+</option>
            <option value="O+">O+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="O-">O-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
     </select><button className="mybtn" onChange={this.sendData}>search</button>
       
        </div>
        <br/>
        <br/>
        
        <div className='table table-bordered mytable'>
          <table >
            <tr><th>Type of Blood</th><td>{this.state.Type}</td></tr>
            <tr><th>Quantity of Blood</th><td>{this.state.Quantity}</td></tr>
            <tr><th>Name of Blood Bank</th><td>{this.state.Name}</td></tr>
            <tr><th>Email of Blood Bank</th><td>{this.state.Email}</td></tr>
            <tr><th>Address of Blood Bank</th><td>{this.state.Address}</td></tr>
         
            <tr><th>Contact_No of Blood Bank</th><td>{this.state.Contact_No}</td></tr>
          
          </table>


        </div>
    <Link to='/blood'></Link>


      </div>
      )
    }
}