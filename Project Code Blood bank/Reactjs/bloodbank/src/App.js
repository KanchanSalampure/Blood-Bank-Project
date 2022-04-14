
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


function App() {
  return (
    <div>
      <BloodRequestF/>


{/*

  <BrowserRouter>


     <Routes>
      <Route exact path ='/bloodRequest' element={<BloodRequestF/>}/>
     <Route exact path ='/' element={<Home></Home>}/>
     <Route exact path ='/login' element={<Login/>}/>
       <Route exact path ='/donate' element={<Register/>}/>
           <Route exact path='/bloodbag' element={<BuyBloodbag/>}/>
           <Route excat path='/about' element={<About/>}/>
           <Route excat path='/login' element={<Logout/>}/>\
         
            </Routes>
      </BrowserRouter>
      
*/}
     


    </div>
  );
}

export default App;
