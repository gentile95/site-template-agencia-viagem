import React from 'react'
import Navbar from '../Componentes/Navbar'
import HeroImg from '../Componentes/HeroImg'
import assetInfo from '../assets/asset-sobre.jpg'
import InfoDescricao from '../Componentes/InfoDescricao'
import Footer from '../Componentes/Footer'
import Swipper from '../Componentes/Swipper'

const Info = () => {
  return (
    <>
      <Navbar />
      <HeroImg
        className = 'hero-img'
        title = 'Quem somos'
        imgHero = {assetInfo}
        imgAlt = 'Duas pessoas no gelo, em um ambiente congelado, olhando para uma aurora, com montanhas congeladas ao fundo'
      />    
      <InfoDescricao />  
      <Swipper />
      <Footer />
    </>
  )
}

export default Info
