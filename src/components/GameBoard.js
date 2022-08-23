import React, { useState } from 'react';
import ScoreBoard from './card/ScoreBoard';
import DisplayCards from './card/DisplayCards';

function GameBoard() {
    const [cards, setCards] = useState([]);    
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const handleScore = () => setScore(score + 1);

    const handleBestScore = () => {
        if(score > bestScore) setBestScore(score);
    };

    const handleCard = (card) => {
        setCards([...cards, card])
    }

    const resetScores = () => {
        setScore(0);
        setBestScore(0);
    }

    const reset = () => {
        setScore(0);
        setCards([]);
    }

    const handleGameLogic = (card) => {
        if(cards.length === 20 || score === 20){

        }
        if(!cards.includes(card)) {
            handleCard(card);
            handleScore();
        } else {
            handleBestScore();
            reset();
        }
    }

    return (
        <div className="game-board">
            <ScoreBoard score={score} bestScore={bestScore} />
            <DisplayCards cards={cards} handleGameLogic={handleGameLogic} 
                          score={score} bestScore={bestScore} 
                          resetScores={resetScores}
                          />
        </div>
    )
}

export default GameBoard;