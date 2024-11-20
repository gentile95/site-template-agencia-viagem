import React from 'react'
import Navbar from '../Componentes/Navbar'
import HeroImg from '../Componentes/HeroImg'
import assetInfo from '../assets/asset-servicos.jpg'
import Servicos from '../Componentes/Servicos'
import Footer from '../Componentes/Footer'

const Servico = () => {
  return (
    <>
      <Navbar/>
      <HeroImg
        className = 'hero-img'
        title = 'Conheça nossos planos!'
        imgHero = {assetInfo}
        imgAlt = 'Campo verde-morrom com grama alta, com um céu azul com bastante nuvens'
      />
      <Servicos/>
      <Footer/>
    </>
  )
}

export default Servico
