import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Components
import Header from "../../../../../Components/Header";
import ToggleButton from "../../../../../Components/ToggleButton";
import HomeButton from "../../../../../Components/HomeButton";
import Flashcards from "../../../../../Components/Flashcards";
import React from "react";
import MatchingCards from "../../../../../Components/MatchingCards";
import MatchingGameComponent from "../../../../../Components/MatchingGameComponent";
import MatchingGameButton from "../../../../../Components/MatchingGameButton";
import MatchingGame from "../../../../MatchingGame";

// Function Component

function Class() {
  // router parameters
  const router = useRouter();
  // const ready = router.isReady
  const { params = [] } = router.query;
  const yearId = router.query.yearId;
  const weekId = router.query.weekId;
  //   classId is reformatted for database in order to match the database "className"
  const classId = router.query.classId;
  // States
  const [className, setClassname] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  //   Fix the formatting to match the database formatting

  useEffect(() => {
    if (classId) {
      const dbName = classId;
      console.log(dbName);

      if (typeof dbName === "string") {
        // const
        const nameArr = dbName.split(" ");
        const wordOne = nameArr[0];
        const wordTwo = nameArr[1];
        const finalName = `${wordOne[0].toLowerCase() + wordOne.slice(1) + "_"}${
          wordTwo[0].toLowerCase() + wordTwo.slice(1)
        }`;
        setClassname(finalName);
        // console.log(className);
      }
    }
  }, [router.isReady, classId]);

  //   FETCH THE DATABASE ROWS BASED ON THE INFO BELOW!

  useEffect(() => {
    if (!router.isReady) return;

    if (router.isReady) {
      const fetchAllFlashcards = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/ClassSelector/${yearId}/${weekId}/${className}`);
          setFlashcards(res.data);
        } catch (err) {
          console.log(err);
        }
      };

      fetchAllFlashcards();
    }
  }, [router.isReady, className, weekId, yearId, classId]);

  const cards = flashcards.map((card) => {
    const { id, english, japanese, example_sentence, week, year } = card;
    return (
      <div key={id + week + year + english} className="flex items-center justify-center">
        <Flashcards
          english={english}
          japanese={japanese}
          classPath={`http://localhost:8800/ClassSelector/${yearId}/${weekId}/${className}`}
          //   idPath={`http://localhost:8800/classes/${classId}/${id}`}
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

  const [choiceOne, setChoiceOne] = useState<number>();
  const [choiceTwo, setChoiceTwo] = useState<number>();

  const [matched, setmatched] = useState(false);

  const cardsForMatchingGame = flashcards.map((card) => {
    const { id, english, japanese, week, year } = card;
    return (
      <div key={className + week + "match" + id} className="flex items-center justify-center">
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
        />
      </div>
    );
  });

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
  // const handleChoice = (e: any) => {
  //   // console.log(e.target.dataset.matched);
  //   const parsed = parseInt(e.target.dataset.keyMatch);

  //   // e.target.style.backgroundColor = "green";
  //   if (choiceOne) {
  //     setChoiceTwo(parsed);
  //     setCardTwo(e.target);
  //     setSecondSelected(true);
  //     setTurns(0);
  //   }

  //   if (!choiceOne) {
  //     setChoiceOne(parsed);
  //     setCardOne(e.target);
  //     setTurns((prevTurn) => prevTurn + 1);
  //     setFirstSelected(true);
  //   }

  // };

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

  const resetTurns = () => {
    setTurns(0);
    setChoiceOne(NaN);
    setChoiceTwo(NaN);
    // setCardOne()
    // setCardTwo()
  };

  // create JSX elements------

  // const finalDeck = shuffledDeck.map((card: { matchId: any; word: string; matched: boolean; id: number | string }) => {
  //   const { matchId, word, id } = card;
  //   return (
  //     <MatchingCards
  //       key={matchId + word[0]}
  //       matchId={matchId}
  //       word={word}
  //       handleChoice={handleChoice}
  //       // firstSelected={firstSelected}
  //       // secondSelected={secondSelected}
  //       matched={matched}
  //       card={card}
  //       id={id}
  //       color={false}
  //     ></MatchingCards>
  //   );
  // });

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
      <Header pageHeader="Select Your Class" />
      <div className="flex items-center  justify-between bg-blue-200 dark:bg-bd-1 p-4 ">
        <HomeButton />
        <MatchingGameButton
          content={matchingGameActive ? "Regular Deck" : "Matching Game"}
          onClick={handleMatchingGameClick}
        />
      </div>
      <div>
        {!matchingGameActive ? (
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
            {cards}
          </div>
        ) : (
          <div>
            <MatchingGame deck={doubledDeck} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Class;
