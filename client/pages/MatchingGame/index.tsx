import Head from "next/head";
import MatchingCards from "../../Components/MatchingCards";
import { ReactNode, useEffect, useState } from "react";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import HomeButton from "../../Components/HomeButton";
import ToggleButton from "../../Components/ToggleButton";
import MatchingGameButton from "../../Components/MatchingGameButton";

export default function MatchingGame(props: { deck: any }) {
  const [deck, setDeck] = useState(props.deck);

  // console.log(deck);
  // functionaility ------
  const [cards, setCards] = useState([] as any[]);
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
      .map((card: any) => ({
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
    // console.log(card.matchId, card);

    if (choiceOne && wordOne != wordTwo) {
      setChoiceTwo(card.matchId);
      setTurns(0);
      setWordTwo(card.word);
      console.log("2nd card selected");
    }
    if (choiceOne === choiceTwo) {
    }
    if (!choiceOne) {
      setChoiceOne(card.matchId);
      setTurns((prevTurn) => prevTurn + 1);
      setWordOne(card.word);

      console.log("1st card selected");
    }

    // if (!choiceOne && wordTwo === wordOne) {
    //   // setChoiceOne(card.matchId);
    //   setTurns((prevTurn) => prevTurn);
    //   // setWordOne(card.word);

    //   console.log("same card selected so ignore turn");
    // }
  };

  useEffect(() => {
    // this is where I need to figure out logic to highlight 1st selected
    if (choiceOne) {
      setCards((prevCards) => {
        return prevCards.map((c: { word: string }) => {
          if (c.word === wordOne) {
            return { ...c, color: true };
          } else {
            return c;
          }
        });
      });

      if (choiceTwo && wordTwo != wordOne) {
        setCards((prevCards) => {
          return prevCards.map((c: { word: string }) => {
            if (c.word === wordTwo) {
              return { ...c, color: false };
            } else {
              return c;
            }
          });
        });
      }

      if (choiceOne && choiceTwo) {
        if (choiceOne === choiceTwo && wordOne !== wordTwo) {
          console.log("match");
          setCards((prevCards) => {
            return prevCards.map((c: { matchId: number }) => {
              if (c.matchId === choiceOne) {
                return { ...c, matched: true, color: true };
              } else {
                return c;
              }
            });
          });
          resetTurn();
        } else if (choiceOne === choiceTwo && wordOne === wordTwo) {
          setCards((prevCards) => {
            return prevCards.map((c: { matchId: number }) => {
              if (c.matchId === choiceOne) {
                console.log("same card");
                resetTurn();
                return { ...c, matched: false, color: false };
              } else {
                return c;
              }
            });
          });
        } else if (choiceTwo !== choiceOne) {
          setCards((prevCards) => {
            return prevCards.map((c: { matchId: number }) => {
              if (c.matchId !== choiceOne) {
                return { ...c, matched: false, color: false };
              } else {
                return c;
              }
            });
          });
          setCards((prevCards) => {
            return prevCards.map((c: { matchId: number }) => {
              if (c.matchId !== choiceTwo) {
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
    }
  }, [choiceOne, choiceTwo, wordOne, wordTwo]);

  const resetTurn = () => {
    setTurns(0);
    setChoiceOne(NaN);
    setChoiceTwo(NaN);
    setWordOne("");
    setWordTwo("");
  };

  function card(value: never, index: number, array: never[]): ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="h-screen bg-bd-1">
      <Button content={gameStarted ? "Shuffle" : "Start Game"} onClick={startGame} />

      <div
        className="
        dark:bg-bd-1
        p-20
      bg-blue-200 gap-5  flex flex-col items-center justify-center
      sm:items-center sm:justify-center
      sm:grid
      sm:grid-cols-2
      md:grid  
      lg:grid-cols-3
      xl:grid-cols-4
       "
      >
        {cards.map((card) => (
          <MatchingCards
            key={card.word + card.match}
            matchId={card.matchId}
            word={card.word}
            card={card}
            matched={false}
            handleChoice={handleChoice}
            color={
              card.color === true
              // (card.matchId === choiceOne && card.word === wordOne && wordOne !== wordTwo) ||
              // (card.matchId === choiceTwo && card.word === wordTwo && wordOne !== wordTwo) ||
              // card.matched
            }
            id={undefined} // id={undefined}
          />
        ))}
      </div>
    </div>
  );
}
