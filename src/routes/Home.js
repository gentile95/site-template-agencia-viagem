import React from 'react'
import Navbar from '../Componentes/Navbar';
import Hero from '../Componentes/Hero.js';
import assetHome from '../assets/videoHero.mp4'
import Destinos from '../Componentes/Destinos';
import assetDestination1 from '../assets/asset-home-destination.jpg'
import assetDestination2 from '../assets/asset-home-destination1-2.jpg'
import assetDestination2_1 from '../assets/asset-home-destination2-1.jpg'
import assetDestination2_2 from '../assets/asset-home-destination2-2.jpg'
import assetDestination3_1 from '../assets/asset-home-destination3-1.jpg'
import assetDestination3_2 from '../assets/asset-home-destination3-2.jpg'
import assetDestination4_1 from '../assets/asset-home-destination4-1.jpg'
import assetDestination4_2 from '../assets/asset-home-destination4-2.jpg'
import Footer from '../Componentes/Footer';

const Home = () => {

  const styleBlue = {
    backgroundColor: 'rgb(212, 231, 248)',
    boxShadow: '0 2rem 2rem 1rem rgb(212, 231, 248), 0 -2rem 2rem 1rem rgb(212, 231, 248)'
  }

  const stylePurple = {
    backgroundColor: 'rgb(230, 211, 241)',
    boxShadow: '0 2rem 2rem 1rem rgb(230, 211, 241), 0 -2rem 2rem 1rem rgb(230, 211, 241)'
  }

  const destino = {
    direction: 'ltr'
  }

  const destinoInvertido = {
    direction: 'rtl' 
  }

  return (
    <>
      <Navbar/>
      <Hero
        className = 'hero-video'
        title = 'Sua Jornada, sua história'
        txt = 'Escolha sua próxima viagem'
        videoHero = {assetHome}
      />
      <div className="destinos-principal">
        <h1 className='titulo-destinos'>Destinos Mais Visitados</h1>
        <p className='subtitulo'>Sua chance de explorar o mundo</p>
      </div>
      <Destinos
        styleCor = {styleBlue}
        styleDestino = {destino}
        titulo = 'Descubra o Paraíso com a Vem Cá Viagens!'
        texto = 'Deixe-se encantar por destinos dos sonhos: praias de areias brancas, águas cristalinas e um cenário de tirar o fôlego. Explore o Caribe, com seu charme tropical, ou refúgios em ilhas paradisíacas onde a natureza se revela em sua forma mais pura. Planeje sua viagem agora e viva momentos inesquecíveis no paraíso! 🌺✈️'
        assetDestination1 = {assetDestination1}
        assetDestination2 = {assetDestination2}
        alt1 = "Imagem de um barco durante o amanhecer, com céu azul, rosa e roxo"
        altt2 = "Imagem de uma praia nas Maldivas com o clima ensolarado e o mar azul ao fundo" 
        imgClass = 'imagens'
      />
      <Destinos
        styleCor = {stylePurple}
        styleDestino = {destinoInvertido}
        titulo = 'Curta a cultura de uma cidade cosmopolita'
        texto = 'Se o seu estilo é o agito de uma cidade cosmopolita, mergulhe na energia vibrante de metrópoles como Nova York, Tóquio ou Dubai. Descubra culturas fascinantes, gastronomia internacional e uma vida noturna que nunca para. Não importa o seu ritmo, a Vem Cá Viagens tem o destino perfeito para você'
        assetDestination1 = {assetDestination2_1}
        assetDestination2 = {assetDestination2_2}
        alt1 = "Imagem de um rio em uma cidade europeia ao pôr-do-sol"
        altt2 = "Imagem noturna de uma cidade grande toda iluminada"
        imgClass = 'imagens reverse'
      />
      <Destinos
        styleCor = {styleBlue}
        styleDestino = {destino}
        titulo = 'Culturas Milenares Esperam por Você'
        texto = 'Viaje no tempo e explore as raízes da humanidade em destinos fascinantes como a China e a Índia. Descubra templos sagrados, palácios ancestrais e tradições que atravessaram séculos. Experimente a culinária exótica, mergulhe em histórias épicas e viva a magia de culturas que moldaram o mundo. A Vem Cá Viagens leva você a essa jornada inesquecível! '
        assetDestination1 = {assetDestination3_1}
        assetDestination2 = {assetDestination3_2}
        alt1 = "Imagem de um caminho largo de pedras, com detalhes à direita e ao fundo uma torre no estilo chinês"
        altt2 = "Imagem de um prédio ao fundo, no estilo hindu, com um espelho d'água na frente com duas mulheres usando hijab"
        imgClass = 'imagens'
      />
      <Destinos
        styleCor = {stylePurple}
        styleDestino = {destinoInvertido}
        titulo = 'Vamos Conhecer o Mundo Juntos'
        texto = 'Dos paraísos tropicais às cidades que nunca dormem, das culturas milenares aos destinos mais modernos, o mundo está cheio de lugares incríveis esperando por você. Deixe a Vem Cá Viagens guiar sua próxima aventura. Vamos transformar seus sonhos em memórias inesquecíveis. Pronto para embarcar? '
        assetDestination1 = {assetDestination4_1}
        assetDestination2 = {assetDestination4_2}
        alt1 = "Uma imagem aérea de Machu-Picchu, com o céu nublado"
        altt2 = "Imagem de um lago com montanhas altas e congeladas no topo ao fundo, ao lado direito tem uma cabana de pedra"
        imgClass = 'imagens reverse'
      />
      <Footer/>
    </>
  )
}

export default Home
