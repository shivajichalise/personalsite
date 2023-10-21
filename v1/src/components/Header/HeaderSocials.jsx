import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank" rel='noreferrer'>  <AiFillLinkedin /> </a>
      <a href="https://github.com/shivajichalise" target="_blank" rel='noreferrer'> <AiFillGithub /> </a>
      <a href="https://twitter.com" target="_blank" rel='noreferrer'> <AiFillTwitterCircle /></a>
    </div>
  )
}

export default HeaderSocials
