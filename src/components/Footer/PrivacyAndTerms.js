import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer'

const PrivacyAndTerms = () => {
    return (
   <>
   <Navbar/>
    <div className='terms-privacy'>
      <h2>Terms and Privacy!!!</h2>
       <h4>
       Movie Sansar system with Design Recommendation will suggest the appropriate suit to the user based on the content-based recommendation system. It will overcome the problems seen in the movie business. The daily tasks of the movie business are automated by this system.In overall, Tailor management system with Design Recommendation is the project title. This system will solve the movie business problems and help to grow the business.
       </h4>
       <li>1.Do not share your credentials with others.You will be responsible for policy violation.</li>
      
       <li> 2.Be careful while accepting payment.You will be responsible for mistakes.</li>
 
       <li>3.Confirm the measurement details twice before clicking add order otherwise this shop will not be responsible.</li>
    
       <li>4.Ask customer twice before clicking add order.</li>
       <li> 5.Bill should be generate as soon as possible after order added successfully.</li>
       
       <li> 6.Be careful while doing financial transactions. This shop will not be responsible for any mistakes.</li>
      
       <li>7.Admin will track all the activities of user and staff.</li> 
       
    </div>

    <Footer/>
    </>
    )
}

export default PrivacyAndTerms
