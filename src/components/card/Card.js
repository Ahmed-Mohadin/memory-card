import React from 'react'

function Card({ name, image, handleGameLogic, id }) {
  
  return (
    <div className='card' onClick={() => handleGameLogic(name)}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-name">
        <h3>{name} - {id}</h3>
      </div>
    </div>
  )
}

export default Card;