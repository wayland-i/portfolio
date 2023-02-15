import React, { useEffect } from 'react'
import Head from 'next/head';
import { snake } from '../scripts/snakeLogic';
import Link from 'next/link';
import Image from 'next/image';
import "98.css";



const Snake = () => {

    function playSanke() {

        snake()
        const startButton = document.querySelector('.startButton')
        startButton.style.display = 'none'

    }

    // const handleKeyPress = e => {
    //     //it triggers by pressing the enter key
    //   if (e.keyCode === 13) {
    //     playSanke();
    //   }
    // };
    
    // useEffect(()=>{
    //     window.addEventListener('keydown', handleKeyPress);
    // },[])
        
    
  return (
    <>
        <div>

        
            <Head>
            <title>{`Ian Iversen's Portfolio`}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            {/* <script src='../public/file.js' defer></script> */}
            </Head>

            {/* <div className='window'>
                <div className="title-bar">
                <div className="title-bar-text">Important Links</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" />
                </div>
                </div> */}


            
                    {/* <h1>Snake</h1> */}
                    <button onClick={playSanke} className="startButton">Play Snake</button>
                {/* <div className='window-body'> */}

                    {/* <h1>Nokia 3310 snake</h1> */}
                    <div className="scoreDisplay"></div>
                    <div className="grid"></div>
                    <div className='leader-board'>
                        <h1>LeaderBoard</h1>
                        <hr></hr>
                        <div className='records'>
                            <h3>name</h3>
                            {/* <hr className='vertical-line'></hr> */}
                            <h3>score</h3>
                        </div>
                        <hr></hr>
                        <div className='records'>
                            <h3>name</h3>
                            {/* <hr className='vertical-line'></hr> */}
                            <h3>score</h3>
                        </div>
                    </div>
                    {/* <div className="snake-buttons">
                        <div className='snake-buttons-container'>
                            <div className='buttons-left'>
                                <button className="left">left</button>
                            </div>
                            <div className='buttons-center'>
                                <button className="top">top</button>
                                <button className="bottom">bottom</button>
                            </div>
                            <div className='buttons-right'>
                                <button className="right">right</button>
                            </div>
                        </div>
                    </div> */}
                    <div className="popup">
                        <button className="playAgain">play Again?</button>
                    </div>

                    <div>
                        <Link href={'/'}>
                            <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
                            Return Home
                        </Link>
                    </div>
                 {/* </div>
            </div> */}

        </div>
    </>
  )
}

export default Snake;


