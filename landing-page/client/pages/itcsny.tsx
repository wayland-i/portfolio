import React from 'react'
import "98.css";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export const itcsny = () => {
  return (
    <div >
    <Head>
      <title>{`Ian Iversen's Portfolio`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
    <div className='itcsny'>
        <h2>IT Computer Support of New York</h2>
        <h2>System Engineer | June 2023 - Current </h2>
        <p className='job-description' style={{paddingTop: '2rem'}}>Integrated data networks and digital video surveillance systems in NYC public schools following the DOE’s engineering specifications.</p>
        <p className='job-description'>Configured switch port VLANs, fiber/ethernet connections, and servers using TCP/IP, DNS, and Subnetting.</p>
        <p className='job-description'>Communicated with construction project officers, general contractors, electricians and related vendors to ensure scope of installations were completed.</p>
        <p className='job-description'>Regularly worked with As-Builts and AutoCAD floor plans to ensure integrations followed approved design. </p>
    </div>
    <div className='technologies'>
        <h3>Technologies</h3>
        <p className='job-description'>TCP/IP, DNS, Subnetting, VLANs, Cisco CLI, Windows OS, Fiber, Ethernet, Network Diagrams, As-Builts, AutoCAD</p>
        <h3>Equipment</h3>
        <p className='job-description'>Cisco Meraki MS390/9300/2960 switches, Lenovo SR650 servers, Cisco 9500 Fiber Switches, and Cisco 8300 Routers, APC SMT3000 uninterruptible power supplies.</p>
    </div>
    {/* <div className='bottom-left'>
        <Link href={'/'} >
            <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
            Return Home
        </Link>
    </div> */}
</div>

  )
}


export default itcsny