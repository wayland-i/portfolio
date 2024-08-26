import React from 'react'
import "98.css";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export const pictures = () => {
  return (
    <div>
        <Head>
          <title>{`Ian Iversen's Portfolio`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <div className='itcsnyPictures'>
            <h2>ITCSNY Pictures</h2>
            <Image src="/images/IMG_5674.jpeg" alt="Contact-Us" width={300} height={400} style={{padding: '2%'}}></Image>
            <Image src="/images/IMG_8340.jpeg" alt="Contact-Us" width={300} height={400}></Image>
            <Image src="/images/IMG_7402.jpeg" alt="Contact-Us" width={300} height={400} style={{padding: '2%'}}></Image>
            <Image src="/images/1705352395361.jpeg" alt="Contact-Us" width={300} height={400}></Image>
            <Image src="/images/IMG_7147.jpeg" alt="Contact-Us" width={300} height={400} style={{padding: '2%'}}></Image>
            <Image src="/images/IMG_7012.jpeg" alt="Contact-Us" width={300} height={400}></Image>
            <Image src="/images/IMG_7317.jpeg" alt="Contact-Us" width={300} height={400} style={{padding: '2%'}}></Image>
            
        </div>

    </div>
  )
}


export default pictures