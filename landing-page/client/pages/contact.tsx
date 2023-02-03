import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
  return (
    <div>
        <h1>Contact Me</h1>
        <div className='email'>
          <h2>email: ianiversen1@gmail.com</h2>
        </div>
        <div>
            <Link href={'/'}>
                <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
                Return Home
            </Link>
        </div>
    </div>
  )
}

export default Contact;