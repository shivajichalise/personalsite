import React, {useState} from 'react'
import './Navbar.css'

import {HiMenuAlt3} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">shivajichalise.</a>
      </div>

      <ul className="app__navbar-links">
        <li><a href="#about">about</a></li>
        <li><a href="#works">works</a></li>
        <li><a href="#contacts">contacts</a></li>
      </ul>

      <div className="app__navbar-sm">
        <HiMenuAlt3 color="#5D9D0B" fontSize={27} onClick={() => {setToggleMenu(true)}} />

        {toggleMenu && (
          <div className="app__navbar-sm_overlay flex__center slide-bottom">
            <MdClose fontSize={27} className="overlay__close" onClick={() => {setToggleMenu(false)}} />
            <ul className="app__navbar-sm_links">
              <li><a href="#about">about</a></li>
              <li><a href="#works">works</a></li>
              <li><a href="#contacts">contacts</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
