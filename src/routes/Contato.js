import React from 'react'
import Navbar from '../Componentes/Navbar'
import HeroImg from '../Componentes/HeroImg'
import assetContato from '../assets/asset-contato.jpg'
import Contact from '../Componentes/Contact'
import Footer from '../Componentes/Footer'

const Contato = () => {
  return (
    <>
      <Navbar/>
      <HeroImg
        className = 'hero-img'
        title = 'Fale conosco'
        imgHero = {assetContato}
        imgAlt = 'Vista aérea da cidade de Nova York com o Central Park no meio'
      />
      <Contact/>
      <Footer/>
    </>
  )
}

export default Contato
