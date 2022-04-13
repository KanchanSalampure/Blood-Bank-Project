import React from 'react'
import "./HomePage.css"


export const SerchBar = () => {
  return (
    <div className='mainh'>
        <div>
     

     <div className="jumbotron text-center">
  <h1>Company</h1> 
  <p>We specialize in blablabla</p> 
  <form>
    <div className="input-group">
      <input type="email" className="form-control" placeholder="Email Address" required/>
      <div className="input-group-btn">
        <button type="button" className="btn btn-danger">Search</button>
      </div>
    </div>
  </form>
</div>
   </div>
    </div>
  )
}
