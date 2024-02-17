import React from 'react'
import './Hero.css'
import videoHero from '../assets/videoHero.mp4'

const Hero = () => {
  return (
    <div className="container-hero">
      <section className="container-video">
        <video src={videoHero} autoPlay loop muted className='hero-video'/>
      </section>
      <section className="hero-text">
        <h1 className='elemento-texto'>Sua Jornada, sua história</h1>
        <p className='elemento-texto'>Escolha sua próxima viagem</p>
      </section>
    </div>
  )
}

export default Hero
