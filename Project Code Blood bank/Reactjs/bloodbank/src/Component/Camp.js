import React from 'react'
import { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';

const Camp = () => {

    const [address, setAddress] = useState('');


    const[udata,setUdata]=useState([]);
    
useEffect(() => {
  
        fetch("http://localhost:8080/camp?address="+address)
       .then(resp=>resp.json())
       .then((dt)=>{
           
            setUdata(dt)
           },(error)=>{
               alert(error)
           }
         )                                     
         
        },[address])
    
    return (
        <div>

            <div className=' box'>
                <select className='Searchinput'onChange={(ev) => setAddress(ev.target.value)}>
                    <option value="">select</option>
                    <option value="Aurangabad">Aurangabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Kolhapur">Kolhapur</option>
                  
                </select><button className="mybtn" >search</button>

            </div>
           <Table bordered hover >{
               udata.map((Item)=>{
                   return(<tr>
                       <td>name:-{Item.name}</td>
                       <td>organization:-{Item.organization}</td>
                       <td>description:-{Item.description}</td>
                       <td>date:-{Item.date}</td>
                       <td>time:-{Item.time}</td>
                       <td>address:-{Item.address}</td>
                   </tr>)
               })

           }
           </Table>

          
            </div>
        

    )
}

export default Camp