import React from 'react';
import './Servicos.css';
import assetDestination2 from '../assets/asset-home-destination1-2.jpg'
import assetServicoParis from '../assets/asset-servicos-paris.jpg'
import assetServicoToquio from '../assets/asset-servicos-toquio.jpg'
import assetDestination4_1 from '../assets/asset-home-destination4-1.jpg'

const pacotes = [
  {
    id: 1,
    destino: "Maldivas",
    descricao: "Pacote completo para as Maldivas, incluindo hospedagem em bangalôs sobre o mar e passeios exclusivos.",
    preco: "R$ 15.000",
    imagem: assetDestination2
  },
  {
    id: 2,
    destino: "Paris, França",
    descricao: "Explore a Cidade Luz com passeios guiados pela Torre Eiffel, Museu do Louvre e um jantar romântico no Sena.",
    preco: "R$ 10.500",
    imagem: assetServicoParis
  },
  {
    id: 3,
    destino: "Tóquio, Japão",
    descricao: "Descubra a cultura única do Japão com visitas ao Monte Fuji, templos tradicionais e o moderno distrito de Shibuya.",
    preco: "R$ 12.000",
    imagem: assetServicoToquio
  },
  {
    id: 4,
    destino: "Machu Picchu, Peru",
    descricao: "Uma aventura inesquecível nas montanhas peruanas, com visitas guiadas a sítios históricos e trilhas deslumbrantes.",
    preco: "R$ 7.000",
    imagem: assetDestination4_1
  },
];

const Servicos = () => {
  return (
    <div className="servicos">
      <h2>Pacotes de Viagens</h2>
      <div className="pacotes-container">
        {pacotes.map((pacote) => (
          <div key={pacote.id} className="pacote-card">
            <img src={pacote.imagem} alt={`Imagem de ${pacote.destino}`} />
            <h3>{pacote.destino}</h3>
            <p>{pacote.descricao}</p>
            <p className="preco">{pacote.preco}</p>
            <button>Saiba Mais</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicos;
