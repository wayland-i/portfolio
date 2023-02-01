import React from 'react'
import Image from 'next/image';

const Footer = () => {

  const date = new Date();
  const time = date.toLocaleTimeString();
  console.log(time);

  return (
    <div className='footer'>
      <button className='start-button' >
        <Image src="/assets/windows-logo.png" alt="Windows Logo" width={25} height={25} />
        Start
      </button>
      <div className='footer-right'>
        <Image src="/assets/utopia_smiley.png" alt="Smiley Face" width={20} height={20}/>
        <div>{time}</div>
      </div>

    </div>
  )
}

export default Footer;