import React,{useState} from 'react'
import "./RegsitrationForm.css"




const Register = () => {
   
 
       
 
 const [user_name,setUser_name] = useState("");
 const [password, setPassword] = useState("");
 const [ user_type, setUser_type] = useState("");
 const [first_name,setFirst_name] = useState("");
 const [last_name, setLast_name] = useState("");
 const [gender, setGender] = useState("");
 const [dob, setDob] = useState("");
 const [blood_type, setBlood_type] = useState("");
 const [email_ID, setEmail_ID] = useState("");
 const [address,setAddress] = useState("");
 const [contact_no,setContact_no] = useState("");   
 
 const SendData=(ev)=>{
   ev.preventDefault();
   const userData={
     method:'POST',
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify({
      user_name:user_name,
      password:password,
      user_type:user_type,
      first_name:first_name,
      last_name:last_name,
      gender:gender,
      dob:dob,
      blood_type:blood_type,
      email_ID:email_ID,
      address:address,
      contact_no:contact_no

     })
   }
   console.log(user_type);
   if(user_type==="donor"||user_type==="patient"){
     fetch("http://localhost:8080/save",userData)
     .then(resp=> {
       if(resp.status===200){
         alert("user registration successful");
       
       }
       else{
         alert("user registration  Failed");
         
       }
     });

   }
 }
 
 
   
        

  return (
    <div id="body" className='container -md'>
   <h3>Registration</h3>
        <form >
          <div className='mb-2 mt-2'>
            <label for="Uname" className='form-lable'>User_Name</label>
            <input type="text" className='form-control' style={{width:"300px", height:"25px"}} id="Uname"placeholder='Enter User_Name here' name="user_name" value={user_name} onChange={(ev)=>setUser_name(ev.target.value)} required></input>
          </div>
          <div className='mb-2 mt-2'>
            <label for="pwd" className='form-lable'>Password</label>
            <input type="password" className='form-control'pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" style={{width:"300px", height:"25px"}} id="pwd" placeholder='Enter your password here' name="password" value={password}  onChange={(ev)=>setPassword(ev.target.value)} required></input>
          </div>
          <div className='mb-2 mt-2 '>
            <label for="utype" className='form-lable'>UserType</label>
            <select className='form-control' id="utype" name="user_type" style={{width:"100px", height:"35px"}} placeholder="Enter type of user" vlaue={user_type} onChange={(ev)=>setUser_type(ev.target.value)}  required>
              <option value="patient">Patient</option>
              <option value="donor">Donor</option>
            </select>
          </div>
          <div className='mb-2 mt-2'>
            <label for="fname" className='form-lable'>First Name</label>
            <input type="text" className='form-control' style={{width:"300px", height:"25px"}} id="fname" placeholder='Enter your First Name here' name="first_name" vlaue={first_name}  onChange={(ev)=>setFirst_name(ev.target.value)}  required></input>
          </div>
          <div className='mb-2 mt-2'>
            <label for="lname" className='form-lable'>Last Name</label>
            <input type="text" className='form-control myinput' id="lname" style={{width:"300px", height:"25px"}} placeholder='Enter your Last Name here' name="last_name" value={last_name}  onChange={(ev)=>setLast_name(ev.target.value)} required></input>
          </div>
          Gender<br />
          <div class="form-check">
            <input className="form-check-input" type="radio"  name="gender" id="flexRadioDefault1"  value="Male" onChange={(ev)=>setGender(ev.target.value)} />
            <label className="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" onChange={(ev)=>setGender(ev.target.value)} value="Female"/>
            <label class="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
          
          <div className='mb-2 mt-2'>
            <label for="bdate" className='form-lable'>BirthDate</label>
            <input type="date" className='form-control myinput'style={{width:"300px", height:"25px"}} id="bdate" placeholder='Enter your BirthDate here'  name="dob" value={dob} onChange={(ev)=>setDob(ev.target.value)}></input>
          </div>
          <div className='mb-2 mt-2'>
            <label for="bloodtype" className='form-lable'>Blood Type</label>
            <input list="btype" className='form-control' id="bloodtype" placeholder='Enter your Blood type here' name="blood_type"style={{width:"300px", height:"25px"}} value={blood_type} onChange={(ev)=>setBlood_type(ev.target.value)}/>
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
            <input type="email" className='form-control' id="Uname" style={{width:"300px", height:"25px"}}placeholder='Enter Email here' name="email_ID" value={email_ID} onChange={(ev)=>setEmail_ID(ev.target.value)}></input>
          </div>
          <div className='mb-2 mt-2'>
            <label for="no" className='form-lable'>Number</label>
            <input type="text" pattern='\d*' className='form-control myinput' style={{width:"300px", height:"25px"}} id="no" placeholder='Enter Contact Number Here' name="contact_no" maxLength="10" value={contact_no} onChange={(ev)=>setContact_no(ev.target.value)}></input>
          </div>
          <div className='row'>
              <div className='col-sm-7'>
            <label for="address" className='form-lable'>Address</label>
            <textarea id="address" className='form-control'  placeholder='Type your Address here' value={address} name="address" onChange={(ev)=>setAddress(ev.target.value)}  required></textarea>
          </div>
          </div>
          <label>
      <input type="checkbox"  name="terms" required/><p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    </label>
          <div className='mb-3 mt-3'>
           <button type='button' className="btn-lg btn-success" onClick={SendData} >Register</button>
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