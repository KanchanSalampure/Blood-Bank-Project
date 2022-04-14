import React from 'react'
import "./HomePage.css"


export const SerchBar = () => {
  return (
    <div className='mainh'>
        <div>
     

     <div className="jumbotron text-center">
  <h1>Blood Bank Search</h1> 
  <p>Search by city</p> 
  <form>
    <div className="input-group">
      <input type="email" className="form-control" placeholder="Find by City" required/>
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
