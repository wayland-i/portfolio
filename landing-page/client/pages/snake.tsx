import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import { snake } from '../scripts/snakeLogic';
import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import "98.css";



const Snake = () => {

    useEffect(()=>{
        if (window.innerWidth < 800) {
          Router.push('/mobile');
        }
      }, [])

    const [playing, setPlaying] = useState(false)
    const [score, setScore] = useState(0);

    const [editing, setEditing] = useState(false);
    const [player, setPlayer] = useState('???');

    const [leaderboard, setLeaderBoard] = useState([])

    const handleClick = () => {
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
        snake(setScore)
        const startButton = document.querySelector('.startButton') as HTMLButtonElement;
        startButton.style.display = 'none'

    }

    const formData = {
        player,
        score
    }



    useEffect(()=>{
        // if score > 0
            //then name and score get POSTED

        if (score > 0) {
            // console.log(formData);
            // console.log(JSON.stringify(formData))

            //https://vast-inlet-63510.herokuapp.com
            //http://127.0.0.1:3000/leaderboards

        fetch('https://calm-springs-82363.herokuapp.com/leaderboards', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))


        // fetch('/leaderboards')
        // .then((response) => response.json())
        // .then((data) => setLeaderBoard(data))

        

        // setLeaderBoard([...leaderboard, formData])

        leaderboard.push(formData)

        const newLeaderboard = leaderboard.concat(leaderboard);



        // // Sort the concatenated array based on the "score" property in descending order
        newLeaderboard.sort((a, b) => b.score - a.score);

        // // Update the state with the sorted array
        setLeaderBoard(newLeaderboard);


        }


        //when score changes to anything greater than 0 we want make a post request
        //in the POST we want to sned the score and the player states to the backend
        //then we want to qulaify the users name is appropriate maybe
        //finally we want to re-render the leaderboard
    }, [score])

    


    useEffect(()=>{
        fetch('https://calm-springs-82363.herokuapp.com/leaderboards')
        .then((response) => response.json())
        .then((data) => setLeaderBoard(data))
    }, [score])

    
    const entries = (leaderboard) => {
        const usedIds = []; // to keep track of used ids
        return leaderboard?.map(entry => {
          if (usedIds.some(id => id === entry.id)) {
            return null; // skip this entry if its id is already used
          }
          usedIds.push(entry.id); // add this id to the usedIds array
          return (
            <li key={entry.id} className='list'>
              <div className='records'>
                <h3>{entry.player}</h3>
                <h3>{entry.score}</h3>
              </div>
              <hr className='line'></hr>
            </li>
          )
        })
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
                        <h4>2. press -play snake- and use arrow keys to move</h4>
                        <h4>3. Beat the highscore!</h4>
                        </div>: 
                        <div className='instruction'>
                        <h3>Instructions</h3>
                        <h4>1. replace ??? with 3 characters, press enter when done</h4> 
                        <h4>2. press -play snake- and use arrow keys to move</h4>
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
                            maxLength={3}
                            />
                        ) : (
                            <h1 onClick={handleClick}>{player}</h1>
                        )}
                    </div>
                    <div className="grid"></div>
                    </div>
                    <div className='leader-board'>
                        <h1>LeaderBoard</h1>
                        
                        <div className='window-leaderboard'>
                        <div className="title-bar">
                            <div className="title-bar-text">Rankings</div>
                        </div>
                            {/* <div className='window-leaderboard'> */}
                                <ol className='list'>{entries(leaderboard)}</ol>
                            {/* </div> */}
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


