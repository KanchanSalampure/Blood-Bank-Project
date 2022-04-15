import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initials} from '../features/counter/counterSlice'

const Placeorder = () => {
    const count = useSelector((state) => state.counter.count)
    const  dispatch=useDispatch();
  const update  =() => {

        
        fetch("http://localhost:8080/order?quantity="+count+"&type"+type)
       .then(resp=>resp.json())
       .then((dt)=>{
           console.log(dt)
           dispatch(initials())
           localStorage.removeItem("type")
           alert("SuccessFully Place Your Order ")

           },(error)=>{
               alert("something Wrong plz try again")
           }
         )  
        
       

  }





    
  return (
    <div className='container'><h3>Order Details</h3>
    <h4>Blood Type: {localStorage.getItem("type")}</h4><br/>
    <h4>Blood Bag Quantity:{count}</h4><br>
    </br><h5>Your order is deliver with in next 24 hours</h5>


    <textarea  placeholder='plz provide address details' rows='10' cols='200'></textarea>
    <button className='btn btn-success'onClick={update}>Placeorder</button>
    </div>

  )
}

export default Placeorder