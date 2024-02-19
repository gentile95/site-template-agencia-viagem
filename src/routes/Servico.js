import React from 'react'
import Navbar from '../Componentes/Navbar'
import HeroImg from '../Componentes/HeroImg'
import assetInfo from '../assets/asset-servicos.jpg'

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
    </>
  )
}

export default Servico
