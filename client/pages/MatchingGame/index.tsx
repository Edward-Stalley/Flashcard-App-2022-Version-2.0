import Head from "next/head";
import MatchingCards from "../../Components/MatchingCards";
import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import HomeButton from "../../Components/HomeButton";
import ToggleButton from "../../Components/ToggleButton";
import MatchingGameButton from "../../Components/MatchingGameButton";

export default function MatchingGame(props) {
  const [deck, setDeck] = useState(props.deck);

  // functionaility ------
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [wordOne, setWordOne] = useState("");
  const [wordTwo, setWordTwo] = useState("");
  const [color, setColor] = useState(false);

  const [choiceOne, setChoiceOne] = useState<number>();
  const [choiceTwo, setChoiceTwo] = useState<number>();

  const [gameStarted, setGameStarted] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = deck
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
      }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const startGame = () => {
    setGameStarted(true);
    shuffleCards();
  };

  const handleChoice = (card: any) => {
    console.log("clicked");
    console.log(card.matchId, card);

    if (choiceOne) {
      setChoiceTwo(card.matchId);
      setTurns(0);
      setWordTwo(card.word);
    }

    if (!choiceOne) {
      setChoiceOne(card.matchId);
      setTurns((prevTurn) => prevTurn + 1);
      setWordOne(card.word);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne === choiceTwo && wordOne !== wordTwo) {
        console.log("match");
        setCards((prevCards) => {
          return prevCards.map((c) => {
            if (c.matchId === choiceOne) {
              return { ...c, matched: true, color: true };
            } else {
              return c;
            }
          });
        });
        resetTurn();
      } else {
        setCards((prevCards) => {
          return prevCards.map((c) => {
            if (c.matchId !== choiceOne) {
              return { ...c, matched: false, color: false };
            } else {
              return c;
            }
          });
        });
        console.log("no match");
        resetTurn();
      }

      resetTurn();
    }
  }, [choiceOne, choiceTwo, wordOne, wordTwo]);

  console.log(cards);

  const resetTurn = () => {
    setTurns(0);
    setChoiceOne(NaN);
    setChoiceTwo(NaN);
    setWordOne("");
    setWordTwo("");
  };

  return (
    <div>
      <Button content={gameStarted ? "Shuffle" : "Start Game"} onClick={startGame} />

      <div
        className="
        dark:bg-bd-1
        p-10
      bg-slate-200 gap-5 flex flex-col items-center justify-center
      sm:items-center sm:justify-center
      sm:grid
      sm:grid-cols-2
      md:grid 
      md:grid-cols-3 
      lg:grid-cols-4
       "
      >
        {cards.map((card) => (
          <MatchingCards
            key={card.word + card.match}
            matchId={card.matchId}
            word={card.word}
            card={card}
            handleChoice={handleChoice}
            color={
              card.color === true
              // (card.matchId === choiceOne && card.word === wordOne && wordOne !== wordTwo) ||
              // (card.matchId === choiceTwo && card.word === wordTwo && wordOne !== wordTwo) ||
              // card.matched
            }
          />
        ))}{" "}
      </div>
    </div>
  );
}
