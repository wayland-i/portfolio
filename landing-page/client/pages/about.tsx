import React from 'react'
import "98.css";
import Image from 'next/image';
import Link from 'next/link';

const about = () => {
  return (
    <div className='about'>
        <div>
            <h1>Ian Iversen</h1>
            <h2>Full Stack Web Developer</h2>
            <p>Ian is a full stack web developer proficient in JavaScript/Ruby languages, libraries and frameworks.</p>
        </div>
        <div className='technologies'>
            <h4>Technologies</h4>
            <p>React.js, Ruby on Rails, Next.js, Typescript, PostgreSQL, Tailwind, JavaScript, Ruby, CSS</p>
        </div>
        <div>
            <Link href={'/'}>
                <Image src="/assets/address_book_home.png" alt="Pricing" width={35} height={35} />
                Return Home
            </Link>
        </div>
    </div>
  )
}

export default about;