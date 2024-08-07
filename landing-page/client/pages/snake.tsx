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
    const [doneEditing, setDoneEditing] = useState(false);
    const [player, setPlayer] = useState('???');

    const [leaderboard, setLeaderBoard] = useState([])

    const handleClick = () => {
        if (doneEditing === false) {
            setEditing(true);
        } else {
            null
        }
    };

    const handleChange = (event) => {
        setPlayer(event.target.value);
    };


    const handleKeyPress = (e) => {
        if (
            player.length === 3 
            && player != '???' 
            && player != ''
            && player != ' '
            && player != '  '
            && player != '   ') {
            if (e.key === 'Enter') {
                setEditing(false)
                setDoneEditing(true)
            }
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


    const fetchLeaderboardData = () => {
        fetch('https://calm-springs-82363.herokuapp.com/leaderboards')
          .then(response => response.json())
          .then(data => {
            // Update your state with the fetched data
            // console.log(data)
            // console.log('hello')
            // const cleanedData = data.filter((entry) => entry.score < 200);
            setLeaderBoard(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      };



    useEffect(()=>{
            // if score > 0
            //then name and score get POSTED

        if (score > 0) {
            // console.log(formData);
            // console.log(JSON.stringify(formData))

        fetch('https://calm-springs-82363.herokuapp.com/leaderboards', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))


        fetchLeaderboardData();

        // Sort the concatenated array based on the "score" property in descending order
        // newLeaderboard.sort((a, b) => b.score - a.score);

        // Update the state with the sorted array
        // setLeaderBoard(newLeaderboard);


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

      // script for footer and return home

    
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
                        <h4>1. Replace ??? with 3 characters, press enter when done.</h4> 
                        <h4>2. Press -play snake- and use arrow keys to move.</h4>
                        <h4>3. Beat your previous highscore!</h4>
                        </div>: 
                        <div className='instruction'>
                        <h3>Instructions</h3>
                        <h4>1. Replace ??? with 3 characters, press enter when done.</h4> 
                        <h4>2. Press -play snake- and use arrow keys to move.</h4>
                        <h4>3. Beat your previous highscore!</h4>
                        <button onClick={playSanke} className="startButton">Play Snake</button>
                        <div className="popup">
                        <button className="playAgain">Play Again?</button>
                        </div>
                        </div>
                        
                    }
                    
            </div>
                
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
                        <h1 className='scoreDisplay'>{score}</h1>

                        {editing ? (
                            <input
                            id='player-name'
                            type="text"
                            value={player}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            maxLength={3}
                            minLength={3}
                            />
                        ) : (
                            <h1 onClick={handleClick}>{player}</h1>
                        )}
                    </div>
                    <div className="grid"></div>
                    </div>
                    <div className='leader-board'>
                        <h3>Leaderboard</h3>
                        
                        <div className='window-leaderboard'>
                        <div className="title-bar">
                            <div className="title-bar-text">Rankings</div>
                        </div>
                                <ol className='list'>{entries(leaderboard)}</ol>
                        </div>

                    </div>

                    {/* <div className='bottom-left'>
                        <Link href={'/'}>
                            <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
                            Return Home
                        </Link>
                    </div> */}
                    
 

        </div>
    </>
  )
}

export default Snake;


