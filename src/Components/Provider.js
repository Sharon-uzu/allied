import React from 'react'
import map from '../Assets/Colorful-GPS-Markers-On-Navigation-Map.H03-1.png'
import { Link } from 'react-router-dom'

const Provider = () => {
  return (
    <div className='provider'>

        <h2>Find a provider near you</h2>
        <img src={map} alt="" />
        <p>Discovering the ideal healthcare provider for yourself, your loved ones, and your team shouldn't be daunting. With AlliedHealth, navigating through a diverse network of providers has never been easier. Offering extensive coverage across various regions, AlliedHealth ensures you connect with the perfect healthcare professional tailored to your needs.</p>
        <button><Link to='/provider'>Find Provider</Link></button>
        
    </div>
  )
}

export default Provider