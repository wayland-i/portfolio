import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const mobile = () => {
  return (
    <div style={{ textAlign: 'center'}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>You need a wider screen to view this app</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Mobile updates on the way!</h1>
        <div>
            <Link href={'/'}>
                <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
                Return Home
            </Link>
        </div>
    </div>
  )
}

export default mobile;