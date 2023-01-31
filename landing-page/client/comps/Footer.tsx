import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div style={{'backgroundColor': '#c3c3c3'}}>
      <button style={{'backgroundColor': '#c3c3c3'}}>
        <Image src="/assets/windows-logo.png" alt="Windows Logo" width={25} height={25} />
        Start
      </button>

    </div>
  )
}

export default Footer;