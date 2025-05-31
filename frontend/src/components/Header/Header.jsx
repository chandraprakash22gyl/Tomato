import React from 'react'
import './Header.css'
import headerImage from '../../assets/header_img.png

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents" style={{ backgroundImage: `url(${headerImage})` }}>
            <h2>Order your favorite food here</h2>
            <p>Choose from a diverse menu featuring a delactable array of dishes crafted with the finest ingredients and satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <a href="#explore-menu"><button className='buttonwl'>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header
