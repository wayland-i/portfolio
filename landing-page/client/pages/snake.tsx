import React, { useEffect } from 'react'
import Head from 'next/head';
import { snake } from '../public/file';
import Link from 'next/link';
import Image from 'next/image';



const Snake = () => {

    function playSanke() {

        snake()
        const startButton = document.querySelector('.startButton')
        startButton.style.display = 'none'

    }
        
    
  return (
    <div>

        <Head>
          <title>{`Ian Iversen's Portfolio`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          {/* <script src='../public/file.js' defer></script> */}
        </Head>
        <h1>Snake</h1>
        <button onClick={playSanke} className="startButton">Play Snake</button>


        <h1>Nokia 3310 snake</h1>
        <div className="scoreDisplay"></div>
        <div className="grid"></div>
        <div className="snake-buttons">
            <div>
                <button className="top">top</button>
                <button className="bottom">bottom</button>
                <button className="left">left</button>
                <button className="right">right</button>
            </div>
        </div>
        <div className="popup">
        <button className="playAgain">play Again</button>
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

export default Snake;


