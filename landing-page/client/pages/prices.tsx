import React, { use, useEffect, useState } from 'react'

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
      console.log(data)
      console.log(data.data)
      console.log(data.data[1].name)
      console.log(data.data[1].symbol)
      console.log(data.data[1].quote.USD.price)
      console.log(data.data[1].quote.USD.percent_change_1h)
      setApiData(data)
      // console.log(data.data["1"].name)
      // console.log(data.data.status)
    })
    // .then(res => res.json())
    // .then(data => console.log('working'))

  }, [])


  // ApiData ? console.log(ApiData.data.name) : null







  return (
    <div>
        <h1>Prices</h1>
        
    </div>
  )
}

export default Prices;