import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
        <Head>
          <title>{`Ian Iversen's Portfolio`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <h1>Contact Me</h1>
        <div className='email'>
          <h2>email: ianiversen1@gmail.com</h2>
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

export default Contact;