import React from 'react';
import './PhoneSlider.css';
import Aos from 'aos';
import { useEffect } from 'react';
const PhoneSlider = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease-in-quad',
      once: true,
    });
  }, []);
  return (
    <div className="main1">
     
      <div className="box">
    
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
          className="img1"
          data-aos="im1"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
          className="img2"
          data-aos="im2"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
          className="img3"
          data-aos="im3"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
          className="img4"
          data-aos="im4"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
          className="img5"
          data-aos="im5"
        />
        </div>
      </div>
    
  );
};

export default PhoneSlider;
