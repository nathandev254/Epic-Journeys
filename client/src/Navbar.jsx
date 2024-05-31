import React from 'react'
// import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className='navigation '>
        <div className='navigation--left'>
            <p className='logo'>Epic <span>Worlds</span></p>
            <ul className='navigation--item'>
                <li className='navigation--list'>Home</li>
                <li className='navigation--list'>About us</li>
                <li className='navigation--list'>Contact us</li>
                <li className='navigation--list'>Travel deals</li>
                <li className='navigation--list'>Discover</li>
                <li className='navigation--list'>Blog</li>
            </ul>
        </div>
        <div>
            <button className='btn'>login</button>
            <button className='btn'>sign up</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
