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

    // useEffect(()=>{

    //     let grid = document.querySelector(".grid");

    //         for (let i = 0; i < 400; i++) {
    //             let div = document.createElement("div");
    //             grid.appendChild(div);
    //         }

        
    // }, [])
    

    // useEffect(()=>{

    //     let grid = document.querySelector(".grid");
        

    //     if (!playing){
    //         for (let i = 0; i < 200; i++) {
    //             let div = document.createElement("div");
    //             div.classList.add('temp-div');
    //             grid.appendChild(div);   
    //         }
    //     } else if (playing) {
    //         // let divs = grid.getElementsByClassName('temp-dev');
    //         const divs = Array.from(document.getElementsByClassName('temp-div'));
    //         for (const div of divs) {
    //           div.remove();
    //         }
    //     }

        
    // }, [playing])



    //retrieving score from html every .15 seconds
    // if (playing) {
    //     setInterval(() => {
    //         let num = document.querySelector(".scoreDisplay");
    //         setScore(num.textContent)
    //     }, 150)

    // }
    
  return (
    <>
        <div className='snake-div'>

        
            <Head>
            <title>{`Ian Iversen's Portfolio`}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            {/* <script src='../public/file.js' defer></script> */}
            </Head>
            
                    { player === "???" || editing ? <h3>Enter Name</h3> :
                    <button onClick={playSanke} className="startButton">Play Snake</button>
                    }
                
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
                    
 

        </div>
    </>
  )
}

export default Snake;


