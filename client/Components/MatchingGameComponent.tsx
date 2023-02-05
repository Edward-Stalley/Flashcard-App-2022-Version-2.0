import React, { useState, useEffect } from "react";
import MatchingCards from "./MatchingCards";
import MatchingGame from "../pages/MatchingGame";

export default function MatchingGameNew(props: { flashcards: any[] }) {
  // -----------------Matching Card Game Functionality --------------------
  // --------------------------------------------------------------------------

  // States
  const [doubledDeck, setDoubledDeck] = useState([]);

  const [shuffledDeck, setShuffledDeck] = useState([]);

  const [matchingGameActive, setMatchingGameActive] = useState(false);

  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState<number>();
  const [choiceTwo, setChoiceTwo] = useState<number>();
  const [cardOne, setCardOne] = useState();
  const [cardTwo, setCardTwo] = useState();

  const [firstSelected, setFirstSelected] = useState(false);
  const [secondSelected, setSecondSelected] = useState(false);

  const [matched, setmatched] = useState(false);
  const cardsForMatchingGame = props.flashcards.map(
    (card: { id: any; english: any; japanese: any; week: any; year: any }) => {
      const { id, english, japanese, week, year } = card;
      return (
        <div key={week + "match" + id} className="flex items-center justify-center">
          <MatchingCards
            word={english}
            matchId={id}
            matched={matched}
            color={false}
            handleChoice={function (arg0: any): void {
              throw new Error("Function not implemented.");
            }}
            card={undefined}
            id={undefined}
            active={false}
            selectedColor={false}
          />
          <MatchingCards
            word={japanese}
            matchId={id}
            matched={matched}
            color={false}
            handleChoice={function (arg0: any): void {
              throw new Error("Function not implemented.");
            }}
            card={undefined}
            id={undefined}
            active={false}
            selectedColor={false}
          />
        </div>
      );
    }
  );

  // Take the original double sided deck - split it - and combine into big deck for game
  const doubleTheDeck = (deck: any) => {
    const FlashcardsEnglish = deck.map((card: { props: { children: { props: any }[] } }) => {
      return card.props.children[0].props;
    });
    const FlashcardsJapanese = deck.map((card: { props: { children: { props: any }[] } }) => {
      return card.props.children[1].props;
    });

    const joinedDeck = FlashcardsEnglish.concat(FlashcardsJapanese);

    setDoubledDeck(joinedDeck);
  };

  console.log("matchinggame", cardsForMatchingGame);

  // shuffle deck -----

  const shuffle = (deck: any[]) => {
    const shuffledCards: any = deck
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
      }));

    setShuffledDeck(shuffledCards);
  };

  // choice functionality
  const handleChoice = (e: any) => {
    if (!e) return;
    // console.log(e.target.dataset.matched);
    const parsed = parseInt(e.target.dataset.keyMatch);

    // e.target.style.backgroundColor = "green";
    if (choiceOne) {
      setChoiceTwo(parsed);
      setCardTwo(e.target);
      setSecondSelected(true);
      setTurns(0);
    }

    if (!choiceOne) {
      setChoiceOne(parsed);
      setCardOne(e.target);
      setTurns((prevTurn) => prevTurn + 1);
      setFirstSelected(true);
    }

    // choiceOne ? setChoiceTwo(parsed) : setChoiceOne(parsed);
  };

  useEffect(() => {
    // console.log(choiceOne, choiceTwo, turns);
    if (choiceOne && choiceTwo) {
      if (choiceOne === choiceTwo) {
        console.log("match");
        resetTurns();
      } else {
        console.log("no match / reset cards");
        // setFirstSelected(false);
        // setSecondSelected(false);

        resetTurns();
      }
      // console.log(choiceOne, choiceTwo);
    }
  }, [choiceOne, choiceTwo]);

  // useEffect(() => {
  //   console.log(cardOne, cardTwo);
  //   if (firstSelected) {
  //     cardOne.style.backgroundColor = "green";
  //   }
  //   if (secondSelected) {
  //     cardTwo.style.backgroundColor = "green";
  //   }
  // }, [firstSelected, secondSelected]);

  const resetTurns = () => {
    setTurns(0);
    setChoiceOne(NaN);
    setChoiceTwo(NaN);
    // setCardOne()
    // setCardTwo()
  };

  // create JSX elements------

  const finalDeck = shuffledDeck.map((card: { matchId: any; word: string; matched: boolean; color: boolean }) => {
    const { matchId, word } = card;
    return (
      <MatchingCards
        key={matchId + word[0]}
        matchId={matchId}
        word={word}
        handleChoice={handleChoice}
        // firstSelected={firstSelected}
        // secondSelected={secondSelected}
        matched={matched}
        card={undefined}
        id={undefined}
        color={false}
        active={false}
        selectedColor={false}
      ></MatchingCards>
    );
  });

  // prepare deck for game start -----

  const handleMatchingGameClick = () => {
    // take flahscards and double split them into two - doubling size
    doubleTheDeck(cardsForMatchingGame);

    //  shuffle the deck & sets the shuffledCards
    shuffle(doubledDeck);

    setMatchingGameActive((prevState) => !prevState);
  };

  return (
    <div>
      {/* {finalDeck} */}
      <MatchingGame deck={cardsForMatchingGame} />
    </div>
  );
}
