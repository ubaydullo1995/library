import React from 'react'
import Pitsa from '../../assets/pitsa.png'
import Riba from '../../assets/riba.png'
import Salat1 from '../../assets/salat1.png'
import Salat2 from '../../assets/salat2.png'
import './cart.css'
import '../../App.css'
import { TiStarFullOutline } from "react-icons/ti";

const Cart = ({openModal}) => {

    const carts = [
        {
            id: 1,
            image: Pitsa,
            title: "Onion Pizza",
            price: "$60.00",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vel.",
            star: "5.0"
        },
        {
            id: 2,
            image: Riba,
            title: "Mix Veg",
            price: "$85.00",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vel.",
            star: "5.0"
        },
        {
            id: 3,
            image: Salat1,
            title: "noodle soup",
            price: "$50.00",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vel.",
            star: "5.0"
        },
        {
            id: 4,
            image: Salat2,
            title: "Salad",
            price: "$15.00",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vel.",
            star: "5.0"
        }
    ]

    return (
        <div className='carts'> 
            {carts.map((cart) => (
                <div className='cart' key={cart.id}>
                    <img src={cart.image} alt='boots'onClick={ () => openModal(cart)}/>
                    <div className='display'>
                        <h1>{cart.title}</h1>
                        <p className='price'>{cart.price}</p>
                    </div>
                    <p className='text'>{cart.text}</p>
                    <div className='display'>
                        <div className="display">
                            <p className='starNum'>
                                <TiStarFullOutline className='start'/> {cart.star}
                            </p>
                        </div>
                        <button className='btn'>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
} 

export default Cart