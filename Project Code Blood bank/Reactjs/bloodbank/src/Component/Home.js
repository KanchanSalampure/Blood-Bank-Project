import React from 'react'
import AboutBloodDonation from './AboutBloodDonation'
import { BloodBanK } from './BloodBanK'
import ContactUs from './ContactUs'
import HomeService from './HomeService'

import NavBar1 from './NavBar1'
import { SerchBar } from './SerchBar'
import SlidingImg from './SlidingImg'



const Home = () => {


  return (
    <div>
      <NavBar1></NavBar1>
    <div style={{ textAlign: 'center'}}>

<BloodBanK></BloodBanK>
<SerchBar></SerchBar>
<AboutBloodDonation/>
<SlidingImg/>
<HomeService/>
<ContactUs/>

</div>

    </div>
  )
}

export default Home