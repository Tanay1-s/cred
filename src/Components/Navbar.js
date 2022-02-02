import React from 'react';
import classes from './Navbar.css';
const Navbar = () => {
  return (
<div className='main'>
    <div className='logo'>
        <img src='https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png' height='66px' width='44px'/>
        </div>
        <div className='ulist'>
            <ul>
                <li className='cur'><a href='https://cred.club/check-your-credit-score'>credit score check</a></li>
                <li className='cur'><a href="https://cred.club/credit-card-bill-payment-online?source=homepage_header">credit card bill payment</a></li>
                </ul>
            </div>
    
    </div>
  );
};

export default Navbar;
