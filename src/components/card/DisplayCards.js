import React, { useEffect, useState } from 'react';
import Card from './Card';

function DisplayCards({ handleGameLogic, score, bestScore }) {

    const [cards, setCards] = useState([
        {
            title: 'nr 1'
        },
        {
            title: 'nr 2'
        },
        {
            title: 'nr 3'
        },
        {
            title: 'nr 4'
        },
        {
            title: 'nr 5'
        },
        {
            title: 'nr 6'
        },
        {
            title: 'nr 7'
        },
        {
            title: 'nr 8'
        },
        {
            title: 'nr 9'
        },
        {
            title: 'nr 10'
        },
        {
            title: 'nr 11'
        },
        {
            title: 'nr 12'
        }
    ]);

    const shuffleCards = (cards) => {
        for(let i = cards.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * i);
            [cards[randomIndex], cards[i]] = [cards[i], cards[randomIndex]];
        }
    }
    
    useEffect(() => {
        const copyCards = [...cards];
        shuffleCards(copyCards);
        setCards(copyCards);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score, bestScore]);

    return (
        <div className='display-cards'>
            {
                cards.map((card, index) => {
                    return <Card key={index} title={card.title} handleGameLogic={handleGameLogic} />
                })
            }
        </div>
    )
}

export default DisplayCards