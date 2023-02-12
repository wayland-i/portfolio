import React, { useEffect } from 'react'
import Head from 'next/head';
import { snake } from '../public/file';



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
        <div className="button">
        <button className="top">top</button>
        <button className="bottom">bottom</button>
        <button className="left">left</button>
        <button className="right">right</button>
        </div>
        <div className="popup">
        <button className="playAgain">play Again</button>
        </div>

        

    </div>
  )
}

export default Snake;


