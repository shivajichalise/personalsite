import React from 'react'
import HeaderSocial from './HeaderSocials.jsx'
import './Header.css'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>[alphajr@gideon bin]$ ./introduce</h5>
        <h2>Hello there! I'm Shivaji Chalise</h2>

        <HeaderSocial />
        <a href="#contacts" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
