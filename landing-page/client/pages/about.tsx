import React from 'react'
import "98.css";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const about = () => {
  return (
    <div className='about'>
        <Head>
          <title>{`Ian Iversen's Portfolio`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <div>
            <h1>Ian Iversen</h1>
            <h2>Full Stack Web Developer</h2>
            <p className='tech-list' >Ian is a full stack web developer proficient in JavaScript/Ruby languages, libraries and frameworks.</p>
        </div>
        <div className='technologies'>
            <h4>Technologies</h4>
            <p className='tech-list'>React.js, Ruby on Rails, Next.js, Typescript, PostgreSQL, Tailwind, JavaScript, Ruby, CSS</p>
        </div>
        <div className='bottom-left'>
            <Link href={'/'} >
                <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
                Return Home
            </Link>
        </div>
    </div>
  )
}

export default about;