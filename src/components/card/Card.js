import React from 'react'

function Card({ name, image, handleGameLogic}) {
  
  return (
    <div className='card' onClick={() => handleGameLogic(name)}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-name">
        <h3>{name}</h3>
      </div>
      <div className='under-line'></div>
    </div>
  )
}

export default Card;