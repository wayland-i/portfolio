import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Link from 'next/link';


const Footer = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
    

  return (
    <div className='footer'>
      <Link href={'/'}>
      <button className='start-button' >
        <Image src="/assets/windows-logo.png" alt="Windows Logo" width={25} height={25} />
        Start
      </button>
      </Link>
      <div className='footer-right'>
        <Image src="/assets/utopia_smiley.png" alt="Smiley Face" width={20} height={20}/>
        <div style={{'fontSize': '.85rem'}}>{time}</div>
      </div>

    </div>
  )
}

export default Footer;