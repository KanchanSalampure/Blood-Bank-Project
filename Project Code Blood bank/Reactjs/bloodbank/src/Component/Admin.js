import React, { useState, useEffect, StrictMode } from 'react'
import { Table } from 'react-bootstrap';
import StaffReg from './StaffReg';
import { useNavigate } from 'react-router-dom';
import NavBar1 from './NavBar1';

const Admin = () => {


    const navigate = useNavigate();
    const [user_type, setUser_type] = useState("");

    const [st, setSt] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/findrole?type=" + user_type)
            .then(resp => resp.json())
            .then((data) => {
                setSt(data);
                alert(data);
            })
    }, [user_type])


    return (
        <div >
            <NavBar1/>
            <div className='container'>
                <div className='mb-2 mt-2 '>
                    <label for="utype" className='form-lable'>Find User List here</label>
                    <select className='form-control' id="utype" name="user_type" placeholder="Enter type of user" vlaue={user_type} onChange={(ev) => setUser_type(ev.target.value)} required>
                        <option value="patient">Patient</option>
                        <option value="donor">Donor</option>
                        <option value="admin">admin</option>
                        <option value="staff">staff</option>
                        </select>
                        
                </div>


                <Table bordered>
                    {
                        st.map((item) => {
                            return (

                                <tr>
                                    <td>name :-{item.user_name}</td>
                                    <td>First_Name{item.first_name}</td>
                                    <td>Contact_no:-{item.contact_no}</td>
                                    <td>Address :-{item.address}</td>
                                    <td>Email :-{item.email_ID}</td>


                                </tr>)
                        })
                    }



                </Table>

            </div>
            <div>
           
            </div>
            <button onClick={()=>navigate('/staff')} className='btn btn-info'>ADD STAFF</button>
            
        </div>
    )
}

export default Admin