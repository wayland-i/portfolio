import React from 'react'
import Head from 'next/head';
import {game} from '../scripts/snakeLogic';


const Snake = () => {

    // let grid = document.querySelector(".grid");
    // console.log(document.getElementsByClassName('grid')[0])
    
    
    // console.log(document.querySelector('.grid'))

    // document.addEventListener('DOMContentLoaded', () => {
    //     console.log(document.querySelector('.grid'))
    // });




  return (
    <div>

        <Head>
          <title>{`Ian Iversen's Portfolio`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          {/* <script src='/file.js' defer></script> */}
        </Head>
        <h1>Snake</h1>

        {/* {game()} */}
        {/* { document ? document.onload = function() {
            game()
        } : null} */}

        {/* blog HTML */}
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


