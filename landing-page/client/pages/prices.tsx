import React, { use, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Prices = () => {

  const [ApiData, setApiData] = useState({})
  const [products, setProducts] = useState([])


  // useEffect(()=>{
  //   fetch('https://desolate-refuge-59045.herokuapp.com/products')
  //   .then(res => res.json())
  //   .then(data => setProducts(data))
  //   // .then(data => setProducts(data))
  // },[])

  // console.log(products.products)



  useEffect(() => {

    fetch('https://desolate-refuge-59045.herokuapp.com/crypto',
    {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(data => {
      //how to access everything from slug=name api
      console.log(data)
      console.log(data.data)
      console.log(data.data[1].name)
      console.log(data.data[1].symbol)
      console.log(data.data[1].quote.USD.price)
      console.log(data.data[1].quote.USD.percent_change_1h)
      setApiData(data)
    })

  }, [])


  // ApiData ? console.log(ApiData.data.name) : null







  return (
    <div>
        <h1>Prices</h1>
        <div>
            <Link href={'/'}>
                <Image src="/assets/address_book_home.png" alt="home" width={35} height={35} />
                Return Home
            </Link>
        </div>
    </div>
  )
}

export default Prices;