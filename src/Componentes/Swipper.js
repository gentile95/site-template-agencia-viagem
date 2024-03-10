import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import './Swipper.css'

// Import Swiper styles
import 'swiper/css';


const Swipper = () => {

  const fotos = [
    {id: '1', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: '2', image: 'https://images.pexels.com/photos/1813922/pexels-photo-1813922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: '3', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: '4', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
  ]

  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        pagination={{clickable:true}}
        navigation
        scrollbar={{draggable:true}}
      >
        {fotos.map((foto) => (
          <SwiperSlide key={foto.id}>
            <img src={foto.image} alt="Foto de um dos nossos colaboradores" className='slide-item' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Swipper
