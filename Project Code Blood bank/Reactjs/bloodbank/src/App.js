
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import About from './Component/About';
import BuyBloodbag from './Component/BuyBloodbag';



import Home from './Component/Home';
import Login from './Component/Login';
import Donate from './Component/Donate';
import Logout from './Component/Logout'
import Register from './Component/Register';
import BloodRequset from './Component/BloodRequset';
import BloodRequestF from './Component/BloodRequestF';
import Admin from './Component/Admin';
import StaffReg from './Component/StaffReg';
import Camp from './Component/Camp';
import ForgotPassword from './Component/ForgotPassword';


function App() {
  return (
 

<div>


  <BrowserRouter>


     <Routes>
     <Route exact path ='/' element={<Home></Home>}/>
     <Route exact path ='/forgotpassword' element={<ForgotPassword></ForgotPassword>}/>
      <Route exact path ='/admin' element={<Admin/>}/>
     <Route exact path ='/login' element={<Login/>}/>
       <Route exact path ='/donate' element={<Register/>}/>
           <Route exact path='/bloodbag' element={ <BloodRequestF/>}/>
           <Route excat path='/about' element={<About/>}/>
           <Route excat path='/login' element={<Logout/>}/>
           <Route excat path='/staff' element={<StaffReg/>}/>
           <Route excat path='/camp' element={<Camp/>}/>
           
         
            </Routes>
      </BrowserRouter>


   


    </div>
  );
}

export default App;
