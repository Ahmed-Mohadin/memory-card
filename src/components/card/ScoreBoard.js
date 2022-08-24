import React from 'react'

function ScoreBoard({ score, bestScore, gameText }) {
  const textArr = gameText.split('.');

  return (
    <div className='score-board'>
      <div className="text">
        <h2>
          Get points by clicking on each 
          <span className='different'> different </span>           
          image
        </h2>
      </div>
      <div className="score">
        <span className='current-score'>Current Score: {score}</span>
        <span className='best-score'>Best score: {bestScore}</span>
      </div>
      <p className='game-text'>{textArr[0]} <br></br> {textArr[1]}</p>
    </div>
  )
}

export default ScoreBoard