import React from 'react'
import { Link } from 'react-router-dom'
import './FrontPage.css' 



const NavBar1 = () => {
  return (
      <div>

     
<ul class="topnav">
  <li> <li><Link to='/' className='link active'>Home</Link></li></li>
  <li><Link to='/login' className='link'>Login</Link></li>
  <li><Link to='/donate' className='link'>Donate</Link></li>
  <li><Link to='/bloodbag' className='link'>Buy BloodBag</Link></li>
  <li><Link to='/about' className='link'>Adout us</Link></li>
  <li class="right"><Link to='/Logout' className='link'>Logout</Link></li>
</ul>



       
      </div>
    
  )
}

export default NavBar1