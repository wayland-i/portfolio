import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import { snake } from '../scripts/snakeLogic';
import Link from 'next/link';
import Image from 'next/image';
import "98.css";



const Snake = () => {

    const [playing, setPlaying] = useState(false)
    const [score, setScore] = useState('0');

    const [editing, setEditing] = useState(false);
    const [player, setPlayer] = useState('???');

    const handleDoubleClick = () => {
        setEditing(true);
    };

    const handleChange = (event) => {
        setPlayer(event.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          setEditing(false)
        }
      };
    

    const handleBlur = () => {
        setEditing(false);
    };



    function playSanke() {

        setPlaying(true)
        snake()
        const startButton = document.querySelector('.startButton')
        startButton.style.display = 'none'

    }

    // if (document.querySelector('.popup').display('none'))

    // if (document.querySelector('.popup')) {
    //     console.log('game over')
    // }


    function setScoreToState() {
        let jsScore = document.querySelector(".scoreDisplay")
        let numScore = jsScore.textContent
        setScore(numScore)
    }

    if (typeof window !== 'undefined') {
        // window is defined, can use it here
        // window.alert('Hello, world!');
        if (window) {
            // console.log(window)
            // console.log(window.alert.length)
        }
        // console.log('you are cool')
        // let jsScore = document.querySelector(".scoreDisplay")
        // let numScore = jsScore.textContent
        // setScore(numScore)
      } else {
        // window is not defined, do something else
        null
        // console.log('Hello, world!');
      }
      
      



    
  return (
    <>
        <div className='snake-div'>

        
            <Head>
            <title>{`Ian Iversen's Portfolio`}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            {/* <script src='../public/file.js' defer></script> */}
            </Head>
            <div className='snake-header'>
                    { player === "???" || editing ? <div className='instruction'>
                        <h3>Instructions</h3>
                        <h4>1. replace ??? with 3 characters, press enter when done</h4> 
                        <h4>2. press "play snake" and use arrow keys to move</h4>
                        <h4>3. Beat the highscore!</h4>
                        </div>: 
                        <div className='instruction'>
                        <h3>Instructions</h3>
                        <h4>1. replace ??? with 3 characters, press enter when done</h4> 
                        <h4>2. press "play snake" and use arrow keys to move</h4>
                        <h4>3. Beat the highscore!</h4>
                        <button onClick={playSanke} className="startButton">Play Snake</button>
                        <div className="popup">
                        <button className="playAgain">Play Again?</button>
                        </div>
                        </div>
                        
                    }
                    


            </div>
                
                    {/* <div className="scoreDisplay"></div> */}
                    <div className='window-snake'>
                            <div className="title-bar" id='snake-title-bar'>
                            <div className="title-bar-text">Snake</div>
                            <div className="title-bar-controls">
                            <button aria-label="Minimize" />
                            <button aria-label="Maximize" />
                            <button aria-label="Close" />
                            </div>
                            </div>
                    <div className='score-board'>
                    {/* <div className="scoreDisplay">{score}</div> */}
                        <h1 className='scoreDisplay'>{score}</h1>
                        
                        {/* <div className="popup">
                            <button className="playAgain">
                                <Image src="/assets/recycle_bin_empty_cool-5.png" alt="Smiley Face" width={40} height={40}/>
                            </button>
                        </div> */}

                        {editing ? (
                            <input
                            id='player-name'
                            type="text"
                            value={player}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            onBlur={handleBlur}
                            />
                        ) : (
                            <h1 onDoubleClick={handleDoubleClick}>{player}</h1>
                        )}
                    </div>
                    <div className="grid"></div>
                    </div>
                    <div className='leader-board'>
                        <h1>LeaderBoard</h1>
                        <h2>Coming soon...</h2>
                        {/* <hr className='line'></hr>
                        <div className='records'>
                            <h3>name</h3>
                            
                            <h3>score</h3>
                        </div>
                        <hr className='line'></hr>
                        <div className='records'>
                            <h3>name</h3>
                            
                            <h3>score</h3>
                        </div> */}
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

                    {/* OG POP UP */}
                    {/* <div className="popup">
                        <button className="playAgain">?</button>
                    </div> */}

                    <div>
                        <Link href={'/'}>
                            <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
                            Return Home
                        </Link>
                    </div>
                    
 

        </div>
    </>
  )
}

export default Snake;


