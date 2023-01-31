import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='footer'>
      <button className='start-button' >
        <Image src="/assets/windows-logo.png" alt="Windows Logo" width={25} height={25} />
        Start
      </button>

    </div>
  )
}

export default Footer;