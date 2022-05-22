import React from 'react'
import {images} from '../../constants'
import './Works.css'

const Works = () => {
  return (
    <section id='works'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={images.raysmotors} alt="Rays Motors" />
          </div>
          <h3> Rays Motors </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com//shivajichalise" className="btn btn-primary" target="_blank" rel="noreferrer"> Github </a>
            <a href="https://github.com//shivajichalise" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={images.mirajfurniture} alt="Miraj Furniture" />
          </div>
          <h3>Miraj Furniture</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com//shivajichalise" className="btn btn-primary" target="_blank" rel="noreferrer"> Github </a>
            <a href="https://github.com//shivajichalise" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Works

