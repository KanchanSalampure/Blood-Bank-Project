import React from 'react'
import { useState, useEffect } from 'react'

const BloodRequestF = () => {
   
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [address, setAddress] = useState('');
    const [contact_no, setContact_No] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetch('https://localhost:8080/')
        .then(response => response.json())
        .then(json => console.log(json))
    }, [])


    return (
        <div>
             Type:"********",
            Quantity:"",
            Name:"",
            Address:"",
            Contact_No:"",
            Email:"",

          


        </div>

    )
}

export default BloodRequestF