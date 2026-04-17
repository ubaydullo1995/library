import React, { useState } from 'react'
import './home.css'

// Import images
import Rukzak from '../../asssets/rukzak.png' 
import DressMen from '../../asssets/dresMenns.png' 
// import Boots from '../../asssets/boots.png' 

const Home = () => {

  const [events] = useState([
    {
      id: 1,
      // icen1: ,
      image: Rukzak,
      name: 'Stylish Beckpok',
      // icenStar: ,
      price: '$20. 00'
    },
    {
      id: 2,
      // icen1: ,
      image: DressMen,
      name: 'T-short',
      // icenStar: ,
      price: '$20. 00',
      subPrice: '540. 00'
    }
  ])

  return (
    <div>
      <h1>Home</h1>
      <div className="cartContainer">
        <div className="cart">
          {events.map((event) => {
            return (
              <div className="cartInner" key={event.id}>
                <img src={event.image} alt={event.name}/>
                <div className='subCart'>
                  <div className='subCartName display'>
                    <h2>{event.name}</h2>
                  </div>
                  <div className="preces">
                    <p>{event.price}</p>
                    <p>{event.subPrice}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
