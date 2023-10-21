import React from 'react'
import {works} from '../../constants'
import './Works.css'

const Works = () => {
  return (
    <section id='works'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          works.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3> {title} </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer"> Github </a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Works

