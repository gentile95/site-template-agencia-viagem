import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Swipper.css';

const Swipper = () => {
  
  const fotos = [
    {id: '1', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: '2', image: 'https://images.pexels.com/photos/1813922/pexels-photo-1813922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: '3', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: '4', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
  ]

  return (
    <div className="container">
        <AliceCarousel
          itemsToShow={2}
          itemsToSlide={2}
          responsive={true}
          autoPlay={true}
          infinite={true}
          animationDuration={1500}
          autoPlayInterval={1500}
          items={2}
          lazyLoad={true}
        >
            {fotos.map((foto) => (
              <div className="container-img-2">
                <div className='fotos' key={foto.id}>
                  <img src={foto.image} alt="Foto de um dos nossos colaboradores" className='sliderimg'/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus magni, ad hic non incidunt tempora porro repudiandae tempore, dolores iusto. Non laudantium aliquam sint et sequi adipisci iusto praesentium</p>
              </div>
            ))}
          
        </AliceCarousel>
      </div>
  )
}

export default Swipper
