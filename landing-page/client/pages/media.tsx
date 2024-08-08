import React from 'react'
import "98.css";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const media = () => {
  return (
    <div className='about'>
        <Head>
          <title>{`Ian Iversen's Portfolio`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <div>
            <h2>ITCSNY</h2>
            <Image src="/images/IMG_5676.jpeg" alt="Contact-Us" width={300} height={400} style={{padding: '2%'}}></Image>
            <Image src="/images/IMG_8340.jpeg" alt="Contact-Us" width={300} height={400}></Image>
            <Image src="/images/IMG_8360.jpeg" alt="Contact-Us" width={300} height={400} style={{padding: '2%'}}></Image>
            <Image src="/images/1705352395361.jpeg" alt="Contact-Us" width={300} height={400}></Image>
        </div>
        {/* <div className='technologies'>
            <h4>C Programming</h4>
            <Image src="/images/bulbs.gif" alt="Contact-Us" width={300} height={400} style={{padding: '2%'}}></Image>
            <Image src="/images/" alt="Contact-Us" width={300} height={400} style={{padding: '2%'}}></Image>
            <Image src="/images/" alt="Contact-Us" width={300} height={400} style={{padding: '2%'}}></Image>
        </div> */}
        {/* <div className='bottom-left'>
            <Link href={'/'} >
                <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
                Return Home
            </Link>
        </div> */}
    </div>
  )
}

export default media;