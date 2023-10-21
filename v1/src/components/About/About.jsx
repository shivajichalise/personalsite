import React from 'react'
import './About.css'
import {images} from '../../constants'
import {HiCheckCircle} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={images.portrait} alt="Shivaji Chalise" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Hi! I'm Shivaji Chalise.
            I'm a Software Engineering student
            from Nepal on a mission to be a
            strong problem solver. I'm motivated
            to learn and expand my skill set
            through challenging projects.
            I love watching movies / TV shows,
            play a little bit of guitar and.....
            that's about it.
          </p>
        </div>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiCheckCircle className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckCircle className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckCircle className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiCheckCircle className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckCircle className='experience__details-icon' />
              <div>
                <h4>MySQLi</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckCircle className='experience__details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckCircle className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiCheckCircle className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
