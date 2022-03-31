import React,{useState} from 'react'
import "./RegsitrationForm.css"

const Register = () => {
    const[userRegistration,setuserRegistration]=useState({
       
        user_name:"",
        password:"",
        user_type:"",
        first_name:"",
        last_name:"",
        Gender:"",
        DOB:"",
        blood_type:"",
        email_ID:"",
        address:"",
        contact_no:"",
        mesg:""
     })
    const handleinput=(e)=>{
        const type=e.target.type;
        const nm= e.target.name;
        let val;
        if(type==="checkbox")
        val=e.target.checked;
        else
        val=e.target.value;
       setuserRegistration({...userRegistration,[nm]:val})
         }
         const sendData=(e)=>{
             e.preventDefault();
             console.log(userRegistration);
             const userData={
                 method:'POST',
                 headers:{'content-Type':'application/json'},
                 body:JSON.stringify({
                    user_name:userRegistration.user_name,
                    password:userRegistration.password,
                    user_type:userRegistration.user_type,
                    first_name:userRegistration.first_name,
                    last_name:userRegistration.last_name,
                    Gender:userRegistration.Gender,
                    DOB:userRegistration.DOB,
                    blood_type:userRegistration.blood_type,
                    email_ID:userRegistration.email_ID,
                    address:userRegistration.address,
                    contact_no:userRegistration.contact_no
                   })
             }
             fetch("http://localhost:8080/save",userData)
             .then(resp=>resp.json())
              .then(data=>setuserRegistration({mesg:data}))


         }
  return (
    <div id="body" className='container -md'>
   <h3>Registration</h3>
        <form action=''>
          <div className='mb-2 mt-2'>
            <label for="Uname" className='form-lable'>User_Name</label>
            <input type="text" className='form-control' style={{width:"300px", height:"25px"}} id="Uname"placeholder='Enter User_Name here' name="user_name" value={userRegistration.user_name} onChange={handleinput} required></input>
          </div>
          <div className='mb-2 mt-2'>
            <label for="pwd" className='form-lable'>Password</label>
            <input type="password" className='form-control'pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" style={{width:"300px", height:"25px"}} id="pwd" placeholder='Enter your password here' name="password" value={userRegistration.password}  onChange={handleinput}required></input>
          </div>
          <div className='mb-2 mt-2 '>
            <label for="utype" className='form-lable'>UserType</label>
            <select className='form-control' id="utype" name="user_type" style={{width:"100px", height:"35px"}} placeholder="Enter type of user" vlaue={userRegistration.user_type}  onChange={handleinput} required>
              <option value="patient">Patient</option>
              <option value="donor">Donor</option>
            </select>
          </div>
          <div className='mb-2 mt-2'>
            <label for="fname" className='form-lable'>First Name</label>
            <input type="text" className='form-control' style={{width:"300px", height:"25px"}} id="fname" placeholder='Enter your First Name here' name="first_name" vlaue={userRegistration.first_name}  onChange={handleinput} required></input>
          </div>
          <div className='mb-2 mt-2'>
            <label for="lname" className='form-lable'>Last Name</label>
            <input type="text" className='form-control myinput' id="lname" style={{width:"300px", height:"25px"}} placeholder='Enter your Last Name here' name="last_name" value={userRegistration.last_name}  onChange={handleinput}required></input>
          </div>
          Gender<br />
          <div class="form-check">
            <input className="form-check-input" type="radio"  name="Gender" id="flexRadioDefault1"  value="Male" onChange={handleinput}/>
            <label className="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input className="form-check-input" type="radio" name="Gender" id="flexRadioDefault2"  onChange={handleinput} value="Female"/>
            <label class="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
          
          <div className='mb-2 mt-2'>
            <label for="bdate" className='form-lable'>BirthDate</label>
            <input type="date" className='form-control myinput'style={{width:"300px", height:"25px"}} id="bdate" placeholder='Enter your BirthDate here'  name="DOB" value={setuserRegistration.DOB} onChange={handleinput}></input>
          </div>
          <div className='mb-2 mt-2'>
            <label for="bloodtype" className='form-lable'>Blood Type</label>
            <input list="btype" className='form-control' id="bloodtype" placeholder='Enter your Blood type here' name="blood_type"style={{width:"300px", height:"25px"}} value={setuserRegistration.blood_type} onChange={handleinput}/>
            <datalist id="btype">
              <option value="A+"></option>
              <option value="B+"></option>
              <option value="O+"></option>
              <option value="AB+"></option>
              <option value="AB-"></option>
              <option value="A-"></option>
              <option value="B-"></option>
              <option value="O-"></option>
            </datalist>
          </div>
          <div className='mb-2 mt-2'>
            <label for="email" className='form-lable'>Email</label>
            <input type="email" className='form-control' id="Uname" style={{width:"300px", height:"25px"}}placeholder='Enter Email here' name="email_ID" value={setuserRegistration.email_ID} onChange={handleinput}></input>
          </div>
          <div className='mb-2 mt-2'>
            <label for="no" className='form-lable'>Number</label>
            <input type="text" pattern='\d*' className='form-control myinput' style={{width:"300px", height:"25px"}} id="no" placeholder='Enter Contact Number Here' name="contact_no" maxLength="10" value={setuserRegistration.contact_no} onChange={handleinput}></input>
          </div>
          <div className='row'>
              <div className='col-sm-7'>
            <label for="address" className='form-lable'>Address</label>
            <textarea id="address" className='form-control'  placeholder='Type your Address here' value={userRegistration.address} name="address"  onChange={handleinput} required></textarea>
          </div>
          </div>
          <label>
      <input type="checkbox"  name="terms" required/><p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    </label>
          <div className='mb-3 mt-3'>
           <button type='submit' className="btn-lg btn-success" onChange={sendData}>Register</button>
           </div>
           <div className=" container signin ">
         <p>Already have an account? <a href="#">Sign in</a>.</p>
         </div>
         </form>
         {/*<h1>{userRegistration.user_type}</h1>
         <h1>{userRegistration.Gender}</h1>
         <h1>{userRegistration.DOB}</h1>*/}
      </div>
  )
}

export default Register