import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// const WebSocket = require('ws');


const Prices = () => {

  const [ApiData, setApiData] = useState({})
  const [products, setProducts] = useState([])



  // useEffect(() => {

  //   fetch('https://calm-springs-82363.herokuapp.com/crypto',
  //   {
  //     headers: new Headers({
  //       'Content-Type': 'application/json'
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     //how to access everything from slug=name api
  //     console.log(data)
  //     console.log(data.data)
  //     console.log(data.data[1].name)
  //     console.log(data.data[1].symbol)
  //     console.log(data.data[1].quote.USD.price)
  //     console.log(data.data[1].quote.USD.percent_change_1h)
  //     setApiData(data)
  //   })

  // }, [])


  // useEffect(() => {

  //   fetch('https://calm-springs-82363.herokuapp.com/crypto')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data.data[1].name)
  //     console.log(data.data[1].quote.USD.price)
  //     console.log(data.data[1].quote.USD.percent_change_1h)
  //     setApiData(data)
  //   })

  // }, [])

  // console.log(ApiData.data[1].name)


  //   useEffect(() => {

  //   fetch('https://calm-springs-82363.herokuapp.com/historical')
  //   .then(res => res.json())
  //   .then(data => {
  //         console.log(data)
  //   })

  // }, [])


  // let ws = new WebSocket('wss://stream.binance.us:9443/ws');

  // ws.onmessage = (e) => {
  //   console.log(e)
  // }


  // let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

  // useEffect(() => {
  //   const ws = new WebSocket('wss://stream.binance.us:9443/ws');

  //   // ws.onopen = () => {
  //   //   console.log('WebSocket connection opened');
  //   // };

  //   ws.onmessage = (event) => {
  //     // console.log('Received message:', event.data);
  //     console.log(event)
  //   };

  //   // ws.onclose = () => {
  //   //   console.log('WebSocket connection closed');
  //   // };

  //   return () => {
  //     ws.close();
  //   };
  // }, []);

  // 'wss://stream.binance.us:9443/ws/etheur@trade'

  const wsRef = useRef(null);

  useEffect(() => {
    wsRef.current = new WebSocket('wss://stream.data.alpaca.markets/v1beta1/crypto');

    wsRef.current.onopen = () => {
      console.log('WebSocket connection opened');
    };

    wsRef.current.onmessage = (event) => {
      if (event.data) {
        console.log('Received message:', event.data);
      }
      // console.log(event.data)
    };

    wsRef.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      wsRef.current.close();
    };
  }, [wsRef]);



  useEffect(()=>{

    let graph = document.querySelector(".graph");

    for (let i = 0; i < 1690; i++) {
        let div = document.createElement("div");
        graph.appendChild(div);
    }


  }, [])


  return (
    <div>
        <h1 className='prices-header'>Prices</h1>
        <div className='prices-container'>

          <div className='graph-container'>
            <div className='graph'>

            </div>
          </div>

          <div className='key'>
            {/* <h1>hey</h1> */}
            {/* <h1>{ApiData.data[1].name}</h1> */}


          </div>

        </div>

        {/* <div>
            <Link href={'/'}>
                <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
                Return Home
            </Link>
        </div> */}
    </div>
  )
}

export default Prices;