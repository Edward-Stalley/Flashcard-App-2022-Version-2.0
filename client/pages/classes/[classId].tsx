// Imported from Dependencies
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, useContext, createContext } from "react";
import MyThemeContext from "../../store/myThemeContext";
// Imported Components

import Flashcards from "../../Components/Flashcards";
import ToggleButton from "../../Components/ToggleButton";
import Header from "../../Components/Header";
import HomeButton from "../../Components/HomeButton";
import MatchingGameButton from "../../Components/MatchingGameButton";
import MatchingCards from "../../Components/MatchingCards";
import ShuffleButton from "../../Components/Button";

import { parse } from "path";
import MatchingGame from "../MatchingGame";

export default function ClassFlashcards() {
  // Theme

  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext);

  // States

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  // dynamic routing
  const router = useRouter();
  const classId = router.query.classId;
  const [className, setClassname] = useState("");

  // Formatting the class Title

  useEffect(() => {
    const dbName = classId;

    if (typeof dbName === "string") {
      const nameArr = dbName.split("_");
      const wordOne = nameArr[0];
      const wordTwo = nameArr[1];
      const finalName = `${wordOne[0].toUpperCase() + wordOne.slice(1)} ${wordTwo[0].toUpperCase() + wordTwo.slice(1)}`;

      setClassname(finalName);
    } else console.log("no");
  }, [!router.isReady]);
  // ------------------------

  // state
  const [flashcards, setFlashcards] = useState([]);

  // effect
  // note for myself: .isReady ensures it doesnt try to fetch until the classId is set

  useEffect(() => {
    if (!router.isReady) return;

    const fetchAllFlashcards = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/Classes/${classId}`);
        setFlashcards(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllFlashcards();
  }, [router.isReady, classId]);

  const cards = flashcards.map((card) => {
    const { id, english, japanese, example_sentence, week, year } = card;

    return (
      <div key={id + week + year + english} className="flex items-center justify-center">
        <Flashcards
          english={english}
          japanese={japanese}
          classPath={`http://localhost:8800/classes/${classId}`}
          idPath={`http://localhost:8800/classes/${classId}/${id}`}
          showDeleteButton={false}
        />
      </div>
    );
  });

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
  //
  // const firstSelected = "bg-green";
  // const secondSelected = "bg-green";

  const cardsForMatchingGame = flashcards.map((card) => {
    const { id, english, japanese, week, year } = card;
    return (
      <div key={className + week + "match" + id} className="flex items-center justify-center">
        <MatchingCards word={english} matchId={id} matched={matched} color={false} />
        <MatchingCards word={japanese} matchId={id} matched={matched} color={false} />
      </div>
    );
  });

  console.log(doubledDeck);
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

  // doubledDeck is what I need to modify

  const testDeck = doubledDeck;
  console.log(testDeck);

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
  const handleChoice = (e) => {
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

  const finalDeck = shuffledDeck.map((card: { matchId: any; word: string; matched: boolean }) => {
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
      <div>
        <Header pageHeader={className} />
      </div>
      {/* <ToggleButton /> */}
      <div className="flex items-center  justify-between bg-slate-200 dark:bg-bd-1 p-4 ">
        <HomeButton />
        {/* <button onClick={handleMatchingGameClick}>start game</button> */}
        {/* <ShuffleButton onClick={shuffle(doubledDeck)} /> */}
        <MatchingGameButton
          content={matchingGameActive ? "Regular Deck" : "Matching Game"}
          onClick={handleMatchingGameClick}
        />
        <ToggleButton />
      </div>
      {!matchingGameActive ? (
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
          {cards}
        </div>
      ) : (
        <div>
          <MatchingGame deck={doubledDeck} />
        </div>
      )}
    </div>
  );
}

// heart syndrome --uh-oh

// tuesday wednesday friday
// 8-30 - 12
// heart specialist
