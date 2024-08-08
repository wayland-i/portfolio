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
            <Image>
                
            </Image>
        </div>
        <div className='technologies'>
            <h4>C Programming</h4>
            <p className='tech-list'>C, Java, React.js, Ruby on Rails, Next.js, Flask, PostgreSQL, TypeScript, Tailwind, JavaScript, Ruby, Git, Postman, HTML, CSS, JSON</p>
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

export default media;