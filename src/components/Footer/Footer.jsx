import React from 'react'
import './Footer.css'
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
import {MdFacebook} from 'react-icons/md'
import {BsSnapchat, BsGithub} from 'react-icons/bs'
import {SiLetterboxd} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>shivajichalise.</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#works">Portfolio</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/shivajichalise" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
        <a href="https://www.snapchat.com/add/literallyshiv" target="_blank" rel="noreferrer"><BsSnapchat /></a>
        <a href="https://www.letterboxd.com/shivajichalise" target="_blank" rel="noreferrer"><SiLetterboxd /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} shivajichalise. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
