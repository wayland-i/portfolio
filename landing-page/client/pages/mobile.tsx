import Link from 'next/link';
import Image from 'next/image';
import "98.css";
import React, { useEffect, useState } from 'react'

const Mobile = () => {

    // 

    useEffect(()=>{
        fetch('https://calm-springs-82363.herokuapp.com/leaderboards')
        .then((response) => response.json())
        .then((data) => setLeaderBoard(data))
    }, [])


    const [leaderboard, setLeaderBoard] = useState([])

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
    <div style={{ textAlign: 'center'}} className='mobile'>

        <h2>You need a wider screen to view this app</h2>

        <h2>Mobile updates on the way!</h2>
        {/* <div style={{marginTop: '40px'}} className='bottom-left'>
            <Link href={'/'}>
                <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
                Return Home
            </Link>
            
        </div> */}
        <div className='leader-board' style={{margin: '40px', position: 'static'}}>
            <div className='window-leaderboard' style={{height: '500px', width: '300px'}}>
                    <div className="title-bar" >
                        <div className="title-bar-text">Rankings</div>
                    </div>
                {/* <div className='window-leaderboard'> */}
                    <ol className='list'>{entries(leaderboard)}</ol>
                {/* </div> */}
            </div>
        </div>
        
    </div>
  )
}

export default Mobile;