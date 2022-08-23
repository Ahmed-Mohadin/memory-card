import React from 'react'

function Card({ title, handleGameLogic }) {
  
  return (
    <div className='card' onClick={() => handleGameLogic(title)}>
      <h2>{title}</h2>
    </div>
  )
}

export default Card;