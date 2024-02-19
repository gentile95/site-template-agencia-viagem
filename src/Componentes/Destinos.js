import React, { useState } from 'react'
import './Destinos.css'

const Destinos = (props) => {
  return (
    <section className="destinos">
      <div className="destino-container" style={props.styleCor}>
        <article className="destino" style={props.styleDestino}>
          <div className="destino-texto">
            <h1>{props.titulo}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequi hic beatae eos officiis aliquid inventore expedita quisquam, quam explicabo earum saepe sunt deleniti ducimus dolor quae aspernatur nihil cumque. Ad illum architecto perspiciatis quis cupiditate deleniti veritatis assumenda ipsum doloribus, exercitationem vero atque quibusdam quo fugiat rerum quasi dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error itaque amet ducimus deserunt ratione, reprehenderit dicta maxime veniam quo fugit!</p>
          </div>
          <div className={props.imgClass}>
            <div className="destino-img1">
              <img
                src={props.assetDestination1}
                alt={props.alt1}
              />
            </div>
            <div className="destino-img2">
              <img
                src={props.assetDestination2}
                alt={props.alt2}
              />
            </div>
          </div>
        </article>
      </div>

    </section>  
  )
}

export default Destinos
