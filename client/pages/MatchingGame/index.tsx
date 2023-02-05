import MatchingCards from "../../Components/MatchingCards";
import { ReactNode, SetStateAction, use, useEffect, useState } from "react";
import Button from "../../Components/Button";

import AlertBox from "../../Components/AlertBox";
import WellDone from "../../Components/WellDone";

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
  const [gameFinished, setGameFinished] = useState(false);
  const [wellDone, setWellDone] = useState(false);

  const [time, setTime] = useState(0);
  // const [startTimer, setStartTimer] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = deck
      .sort(() => Math.random() - 0.5)
      .map((card: any) => ({
        ...card,
      }));

    // setTurns(0);
    setCards(shuffledCards);
    setTurns(0);
  };

  // TO DO
  // put the japanese cards on the left for desktop matching game
  // Will make the selection process a little easier
  const SortByLanguage = () => {
    const sortedByLanguage = deck
      .sort(() => Math.random() - 0.5)
      .map((card: any) => ({
        ...card,
      }));

    // setTurns(0);
    setCards(sortedByLanguage);
    setTurns(0);
  };

  const startGame = () => {
    resetGame();
    setTurns(0);
    setGameStarted(true);
    shuffleCards();
    setWellDone(false);
  };

  // This is the click function for the matching cards
  const handleChoice = (card: any) => {
    if (choiceOne && wordOne != wordTwo) {
      setChoiceTwo(card.matchId);
      setTurns(0);
      setWordTwo(card.word);
      console.log("2nd card selected");
    }

    if (!choiceOne) {
      setChoiceOne(card.matchId);
      setTurns((prevTurn) => prevTurn + 1);
      setWordOne(card.word);
      console.log("1st card selected");
    }
  };

  const resetGame = function () {
    setGameFinished(false);
    setCards((prevCards) => {
      return prevCards.map((c: { color: boolean }) => {
        return { ...c, color: false };
      });
    });
  };

  useEffect(() => {
    if (choiceOne) {
      setCards((prevCards) => {
        return prevCards.map((c: { word: string; matchId: number }) => {
          if (c.matchId === choiceOne && c.word === wordOne) {
            return { ...c, selectedColor: true };
          } else {
            return c;
          }
        });
      });
    }

    if (choiceOne && wordOne != wordTwo) {
      setCards((prevCards) => {
        return prevCards.map((c: { word: string; matchId: number }) => {
          if (c.matchId === choiceOne && c.word === wordTwo) {
            return { ...c, selectedColor: true };
          } else {
            return c;
          }
        });
      });
    }

    if (choiceOne) {
      setCards((prevCards) => {
        return prevCards.map((c: { word: string }) => {
          if (c.word === wordOne) {
            return { ...c, color: false };
          } else {
            return c;
          }
        });
      });

      if (choiceTwo && wordTwo != wordOne) {
        setCards((prevCards) => {
          return prevCards.map((c: { word: string }) => {
            if (c.word === wordTwo) {
              return { ...c, color: false, selectedColor: false };
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
              if (c.matchId === choiceOne && c.matchId === choiceTwo) {
                // change card color on correct
                return { ...c, matched: true, color: true, selectedColor: false };
              } else {
                return c;
              }
            });
          });
          resetTurn();
        } else if (choiceOne === choiceTwo && wordOne === wordTwo) {
          setCards((prevCards) => {
            setTurns(0);
            return prevCards.map((c: { matchId: number }) => {
              if (c.matchId === choiceOne) {
                console.log("same card");
                resetTurn();
                return { ...c, matched: false, color: false, selectedColor: false };
              } else {
                return c;
              }
            });
          });
        } else if (choiceTwo !== choiceOne) {
          setCards((prevCards) => {
            return prevCards.map((c: { matchId: number }) => {
              if (c.matchId !== choiceOne) {
                return { ...c, matched: false, selectedColor: false };
              } else {
                return c;
              }
            });
          });
          setCards((prevCards) => {
            return prevCards.map((c: { matchId: number; color: boolean }) => {
              if (c.matchId !== choiceTwo) {
                return { ...c, matched: false, selectedColor: false };
              } else {
                return c;
              }
            });
          });
          console.log("no match");
        }

        resetTurn();
      }
    }
    if (gameStarted && cards.every((c) => c.color === true)) {
      console.log("nice");
      setGameFinished(true);
      setWellDone(true);
    }
  }, [choiceOne, choiceTwo, wordOne, wordTwo, time]);

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

  const finalMatchingCards = cards.map((card) => (
    <MatchingCards
      active={true}
      key={card.word + card.match}
      matchId={card.matchId}
      word={card.word}
      card={card}
      matched={false}
      handleChoice={handleChoice}
      color={card.color === true}
      selectedColor={card.selectedColor === true}
      id={undefined}
    />
  ));

  return (
    <div className=" h-screen dark:bg-bd-1 bg-bl-1    ">
      <div className="flex justify-center pt-4">
        <Button content={!wellDone ? (gameStarted ? "Shuffle" : "Start Game") : "Play Again"} onClick={startGame} />
      </div>

      {/* Game On */}

      {!gameFinished && gameStarted && (
        <div
          className="
        justify-center
pt-10 pb-10
        dark:bg-bd-1
        bg-bl-1 gap-5  flex flex-col items-center
      sm:items-center sm:justify-center
      sm:grid
      sm:grid-cols-2
      md:grid  
      lg:grid-cols-3
      xl:grid-cols-4"
        >
          {finalMatchingCards}
        </div>
      )}

      {/* Well Done Screen */}

      {gameFinished && wellDone && (
        <div className="flex justify-center items-center text-3xl p-5">
          <div className="flex-cols justify-center items-center">
            <WellDone />
            <AlertBox message={`Well Done!!`} />
          </div>
        </div>
      )}

      {/* Play Again*/}
    </div>
  );
}
