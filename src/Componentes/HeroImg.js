import React from 'react'
import './HeroImg.css'

const HeroImg = (props) => {
  return (
    <div className="container-hero">
      <section className="container-img">
        <img src={props.imgHero} alt={props.imgAlt} className={props.className}/>
      </section>
      <section className="hero-text">
        <h1 className='elemento-texto'>{props.title}</h1>
        <p className='elemento-texto'>{props.txt}</p>
      </section>
    </div>
  )
}

export default HeroImg