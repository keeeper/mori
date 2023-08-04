import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Card from './components/Card';
import shuffle from './utils/shuffle';

function App() {
  const [cards, setCards] = useState(shuffle);
  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [wins, setWins] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    let pickTimer;
    if (pickOne && pickTwo) {
      setAttempts(attempts + 1);

      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card)=> {
            if (card.image === pickOne.image) {
              return {...card, matched: true }
            } else {
              return card;
            }
          })
        });
        onTurnHandler();
      } else {
        setIsDisabled(true);
        pickTimer = setTimeout(()=> {
          onTurnHandler();
        }, 1000)
      }
    }
    return () => {
      clearTimeout(pickTimer)
    }
  }, [cards, pickOne, pickTwo]);

  useEffect(() => {
    const checkWin = cards.filter((card) => !card.matched);
    if (cards.length && checkWin.length < 1) {
      setWins(wins + 1);
      setAttempts(0);
      onTurnHandler();
      setCards(shuffle);
    }
  }, [cards, wins])

  const onClickHandler = (card) => {
    if (!isDisabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  }

  const onTurnHandler = () => {
    setPickOne(null);
    setPickTwo(null);
    setIsDisabled(false);
  }

  const onNewGameHandler = () => {
    setWins(0);
    setAttempts(0);
    onTurnHandler();
    setCards(shuffle);
  }
  
  return (
    <>
      <Header handleNewGame={onNewGameHandler} wins={wins} attempts={attempts} />
      <div className="grid">
        {cards.map((card) => {
          const { id, image, matched } = card;
          return (
            <Card 
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClickHandler={() => onClickHandler(card)}
            />
          )
        })}
      </div>
    </>
  );
}

export default App;
