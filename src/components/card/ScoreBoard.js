import React from 'react'

function ScoreBoard({ score, bestScore }) {
  return (
    <div className='score-board'>
      <div className="text">
        <h2>
          Get points by clicking on an image but 
          <span className='dont'> don't click </span> 
          on any more than once
        </h2>
      </div>
      <div className="score">
        <span className='current-score'>Current Score: {score}</span>
        <span className='best-score'>Best score: {bestScore}</span>
      </div>
    </div>
  )
}

export default ScoreBoard