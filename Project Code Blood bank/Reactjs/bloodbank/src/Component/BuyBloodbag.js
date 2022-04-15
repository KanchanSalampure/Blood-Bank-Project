

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { increment, decrement } from '../features/counter/counterSlice'
import "./BuyBloodBag.css"




const BuyBloodbag = () => {
    let navigate=useNavigate();
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const[type,setType]=useState('');
    

   useEffect(()=>{

    setType(localStorage.getItem("type"));
   },[]
   )

    return (
        <div>

            <div className='buymain' >

                <div className='add-to-cart' >
                    <span className='count'>{count}</span>
                    <img src='https://image.shutterstock.com/z/stock-vector-shopping-cart-icon-vector-red-icon-with-reddish-shadow-on-dark-gray-circle-at-white-background-635650223.jpg' width="50px" height='50px' />
                </div>
                <div className='main' >

                    <div className='cart-wrapper' >
                        <div className='img-wrapper item'>
                            <img src="https://media.istockphoto.com/vectors/blood-bag-isolated-on-white-blood-donor-day-vector-id1138873220?k=20&m=1138873220&s=612x612&w=0&h=Er5Pzpek8mqROmmwjQi_IF1L6yd8zZiNxDLoX5-Oqx8=" width="300px" height="300px" />
                        </div>

                        <div >
                            <button className='btn btn-info' aria-setsize="20px" onClick={() => { dispatch(increment()) }}>Incrment</button>

                            <button className='btn btn-info' onClick={() => { dispatch(decrement()) }}>decrement</button>
                            <br></br> <span  style={{position:'relative' ,left:'100px'}}>Type:{type}</span><br/>
                            <button  style={{position:'relative' ,left:'60px'}}  onClick={()=>navigate("/placeorder")}>Confirm order</button>
                        </div>
                    </div>
                    <div>
                        

                    </div>
                </div>

            </div>
        </div>


    )
}

export default BuyBloodbag