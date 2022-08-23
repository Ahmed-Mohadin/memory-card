import React, { useEffect, useState } from 'react';
import Card from './Card';

function DisplayCards({ handleGameLogic, score, bestScore, resetScores }) {

    const [cards, setCards] = useState([]);
    const [randomPage, setRandomPage] = useState(1);

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleRandomPage = () => {
        const randomInt = randomIntFromInterval(1, 21);
        setRandomPage(randomInt);
    }

    useEffect(() => {
        const api = `https://rickandmortyapi.com/api/character/?page=${randomPage}`;

        const getData = async () => {
            const res = await fetch(api);
            const data = await res.json();
            const results = data.results;
            setCards(results);
            resetScores();
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [randomPage])

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
        <>
            <button className='btn refresh' onClick={() => handleRandomPage()}>Refresh</button>
            <div className='display-cards'>
                {
                    cards.map((card, index) => {
                        return <Card key={index} name={card.name} image={card.image} 
                                     id={card.id} handleGameLogic={handleGameLogic} />
                    })
                }
            </div>
        </>
    )
}

export default DisplayCards