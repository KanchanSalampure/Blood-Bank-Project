import React from 'react'
import { useState, useEffect } from 'react'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { useNavigate } from 'react-router-dom';
import BuyBloodbag from './BuyBloodbag';

const BloodRequestF = () => {
    let nav=useNavigate();
const[error,setError]=useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [address, setAddress] = useState('');
    const [contact_no, setContact_No] = useState('');
    const [email, setEmail] = useState('');
    const[name,setName]=useState('');
    
useEffect(() => {
  
        fetch("http://localhost:8080/blood?type="+type)
       .then(resp=>resp.json())
       .then((dt)=>{
            
             
               setQuantity(dt.quantity_bag);
               setAddress(dt.bank.address);
               setContact_No(dt.bank.contact_no);
               setEmail(dt.bank.email);
               setName(dt.bank.name);
              },
              (error)=>{
                alert("sorry data not Found")  
                setError(error)
                setAddress('');
                setContact_No('')
                setEmail('')
                setName('')
                setQuantity('')
                nav("/bloodbag")


              })
        },[type])
    

const bloodbag=()=>{
    localStorage.setItem("type",type)
    nav("/buyblood")
}




    return (
        <div>

            <div className=' box'>
                <select className='Searchinput'onChange={(ev) => setType(ev.target.value)}>
                    <option value="">select</option>
                    <option value="A_pos">A+</option>
                    <option value="O+">O+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="A_nav">A-</option>
                    <option value="O-">O-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                </select><button className="mybtn" >search</button>

            </div>
            <br />
            <br />

            <div className='table table-bordered mytable'>
                <table >
                    <tr><th>Type of Blood</th><td>{type}</td></tr>
                    <tr><th>Quantity of Blood</th><td>{quantity}</td></tr>
                    <tr><th> Constact number of BloodBank</th><td>{contact_no}</td></tr>
                    <tr><th>Email of Blood Bank</th><td>{email}</td></tr>
                    <tr><th>Address of Blood Bank</th><td>{address}</td></tr>
                    <tr><th>Name of Blood Bank</th><td>{name}</td></tr>


                </table>

<button onClick={bloodbag}>buy</button>



                <div />
            </div>
          ,
        </div>

    )
}

export default BloodRequestF