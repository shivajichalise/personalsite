import React from 'react'
import HeaderSocial from './HeaderSocials.jsx'
import './Header.css'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__container-content">
          <div className="commandPrompt">
            <div> <h4>[<span className='username'>alphajr</span>@<span className='hostname'>gideon</span> bin]$ ‏‏ </h4></div>
            <div><h4 className='command'>./introduce</h4></div>
          </div>
          <h2 className='introduction'>Hello there! I'm Shivaji Chalise</h2>
        </div>
        <HeaderSocial />
        <a href="#contacts" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
