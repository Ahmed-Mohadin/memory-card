import React, { useEffect, useState } from 'react';
import Card from './Card';

function DisplayCards({ handleGameLogic, score, bestScore, resetScores }) {

    const [cards, setCards] = useState([]);
    const [randomPage, setRandomPage] = useState(1);

    // min and max included 
    const randomIntFromInterval = (min, max) => { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleRandomPage = () => {
        const randomInt = randomIntFromInterval(1, 21);
        setRandomPage(randomInt);
    }

    useEffect(() => {
        const api = `https://rickandmortyapi.com/api/character/?page=${randomPage}`;

        const getData = async () => {
            try{
                const res = await fetch(api);
                if(res.ok){
                    const data = await res.json();
                    const results = data.results;
                    setCards(results);
                    resetScores();        
                } else{
                    setCards([
                        {
                            id: 'Error',
                            name: 'Failed to find',
                            image: 'https://learningactors.com/wp-content/uploads/2018/05/error_handling.jpg'
                        },
                    ])    
                }
            } catch(error) {
                setCards([
                    {
                        id: 'Error',
                        name: 'Failed to fetch',
                        image: 'https://learningactors.com/wp-content/uploads/2018/05/error_handling.jpg'
                    },
                ])
            }
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
                                     handleGameLogic={handleGameLogic} />
                    })
                }
            </div>
        </>
    )
}

export default DisplayCards