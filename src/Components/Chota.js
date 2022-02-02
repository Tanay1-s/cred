import React,{useEffect} from 'react';
import { AOS } from 'aos';
import 'aos/dist/aos.css';
import './Chota.css';
const Chota = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
  return (
  <div className='main'>
      <div className='box' data-aos ="box-trans"></div>
  </div>
  );
};

export default Chota;