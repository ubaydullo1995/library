import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div >
      <h1><Link to="/home">Home</Link></h1>  
      {/* <h1><Link to="/section">Section</Link></h1> */}
    </div>
  )
}

export default Home
