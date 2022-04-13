import React from 'react'
import "./HomeService.css"
import {FcLibrary,FcSearch } from "react-icons/fc";
import {FaCertificate,FaSearchPlus } from "react-icons/fa";
import {HiUserGroup} from "react-icons/hi";
import { GiDroplets } from "react-icons/gi";
import { GrCertificate} from "react-icons/gr";
import {GoLocation} from 'react-icons/go';

const HomeService = () => {
  return (
    <div>
        <div id="services" className="container-fluid text-center">
  <h2>SERVICES</h2>
 
  <br/>
  <div className="row">
    <div className="col-sm-4">
     <FcLibrary size='200'/>
      <h4>Blood Bank</h4>
      <p>Fast Serching of Blood in all bloodbank and easy to use </p>
    </div>
    <div className="col-sm-4">
<FaSearchPlus color='lightBlue' size='200'/>
      <h4>Serch For Blood</h4>
      <p>Serch the blood across all the blood bank  in this city</p>
    </div>
    <div className="col-sm-4">
    <GiDroplets color='red' size='200'/>
      <h4>Donate Blood </h4>
      <p>For Donot the blood you can check for camps and can Register here in advance</p>
    </div>
  </div>
  <br/>
  <div className="row ">
    <div className="col-sm-4">
<GoLocation color='Green' size='200'/>
      <h4>Search For Camps</h4>
      <p>You can Serch Ongoing Camps And Upcoming Camps near you </p>
    </div>
    <div className="col-sm-4">
    <FaCertificate color='gold' size='200'/>
      <h4>CERTIFIED</h4>
      <p>After donotion of blood your certificate is generated click here to download</p>
    </div>
    <div className="col-sm-4">
      <HiUserGroup  color='lightGreen' size='200'/>
      <h4 >About US</h4>
      <p> This Project is develop by group number 18 under Snehal  Madam<br/> Know-it
      </p>
    </div>
  </div>
</div>

    
    </div>
  )
}

export default HomeService