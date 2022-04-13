import React from 'react'
import{GrLocation} from 'react-icons/gr'
import{FaMobileAlt} from 'react-icons/fa'
import{AiOutlineMail} from 'react-icons/ai'


const ContactUs = () => {
  return (

<div id="contact" className="container-fluid bg-grey">
<h2 className="text-center">CONTACT</h2>
<div className="row">
<div className="col-sm-8" style={{textAlign:"justify",textIndent:'100px',fontSize:'25px'}}>
<p>Contact us and we'll get back to you within 24 hours</p>
<p><GrLocation />Location: - new Pahadsingpura begumpura </p>
<p ><FaMobileAlt/>Mobile: -87969465096<br/></p>
<p><AiOutlineMail/>Email : -BloodBank@gmail.com</p>
</div>
</div>
<div className="container">
      <div className="row">
        <div className="col-sm-6 form-group">
          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div className="col-sm-6 form-group">
          <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div>
      <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
      
        <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-info" type="button">Button</button>
 
</div>
      </div>
      <img src="/img/address.png"></img>
    </div>
  )
}

export default ContactUs