// Imports

import axios from "axios";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { match } from "assert";
import e from "express";

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
import Navbar from "../../../../../Components/Navbar";
import AlertBox from "../../../../../Components/AlertBox";
import Spinner from "../../../../../Components/Spinner";
import ErrorImage from "../../../../../Components/ErrorImage";
import ErrorComponent from "../../../../../Components/ErrorComponent";
// Function Component

function Class() {
  // router parameters
  const router = useRouter();
  const { params = [] } = router.query;
  const yearId = router.query.yearId;
  const weekId = router.query.weekId;
  //   classId is reformatted for database in order to match the database "className"
  const classId = router.query.classId;
  // States
  const [className, setClassname] = useState("");
  const [cardsForMatchingGame, setCardsForMatchingGame] = useState<React.ReactElement[]>();
  const [flashcards, setFlashcards] = useState<React.ReactElement[]>() || undefined;
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (classId) {
      const dbName = classId;
      console.log(dbName);

      if (typeof dbName === "string") {
        const nameArr = dbName.split(" ");
        const wordOne = nameArr[0];
        const wordTwo = nameArr[1];
        const finalName = `${wordOne[0].toLowerCase() + wordOne.slice(1) + "_"}${
          wordTwo[0].toLowerCase() + wordTwo.slice(1)
        }`;
        setClassname(finalName);
      }
    }
  }, [router.isReady, classId]);

  //   FETCH THE DATABASE ROWS BASED ON THE INFO BELOW!

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    if (router.isReady && className) {
      const fetchAllFlashcards = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
          const res = await axios.get(`/api/ClassSelector/${yearId}/${weekId}/${className}`);

          setFlashcards(res.data || []);
        } catch (err) {
          setIsError(true);
        }
        setIsLoading(false);
      };

      fetchAllFlashcards();
    }
  }, [router.isReady, className, weekId, yearId, classId, setFlashcards]);

  // console.log(flashcards)
  const cards = Array.isArray(flashcards)
    ? flashcards.map((card: any) => {
        const { id, english, japanese, example_sentence, week, year } = card;
        return (
          <div key={id + week + year + english} className="flex items-center justify-center">
            <Flashcards
              english={english}
              japanese={japanese}
              // think i need to edit this path to "/"
              classPath={`https://eb-flashcards.vercel.app/ClassSelector/${yearId}/${weekId}/${className}`}
              showDeleteButton={false}
            />
          </div>
        );
      })
    : [];

  const cardsTest:
    | string
    | number
    | boolean
    | any[]
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | null
    | undefined = [];

  // -----------------Matching Card Game Functionality --------------------
  // --------------------------------------------------------------------------

  // States
  const [doubledDeck, setDoubledDeck] = useState([]);

  const [shuffledDeck, setShuffledDeck] = useState([]);

  const [matchingGameActive, setMatchingGameActive] = useState(false);

  const [choiceOne, setChoiceOne] = useState<number>();
  const [choiceTwo, setChoiceTwo] = useState<number>();

  const [turns, setTurns] = useState<number>(0);

  const [matched, setmatched] = useState(false);

  useEffect(() => {
    if (router.isReady && flashcards instanceof Array) {
      const deck = flashcards.map((card: any) => {
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
      setCardsForMatchingGame(deck);
    }
  }, [router.isReady, flashcards, matched, className]);

  // Take the original double sided deck - split it - and combine into big deck for game

  const doubleTheDeck = (deck: any) => {
    if (deck?.length === 0) return;
    else if (deck?.length > 0) {
      const FlashcardsEnglish = deck.map((card: { props: { children: { props: any }[] } }) => {
        return card.props.children[0].props;
      });
      const FlashcardsJapanese = deck.map((card: { props: { children: { props: any }[] } }) => {
        return card.props.children[1].props;
      });

      const joinedDeck = FlashcardsEnglish.concat(FlashcardsJapanese);

      setDoubledDeck(joinedDeck);
    }
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
  };

  // prepare deck for game start -----
  const handleMatchingGameClick = () => {
    // take flahscards and double split them into two - doubling size
    doubleTheDeck(cardsForMatchingGame);

    //  shuffle the deck & sets the shuffledCards
    shuffle(doubledDeck);
    setMatchingGameActive((prevState) => !prevState);
  };

  return (
    <div className="dark:bg-gray-800 bg-bl-1 text-bd-1 dark:text-bl-1  relative grid">
      <Navbar />

      <div>
        <Header pageHeader={`${classId}:`} subHeader={`Week ${weekId}`} />
      </div>

      {/* Loading Screen */}

      {isLoading && (
        <div className=" h-screen justify-center bg-bl-1 dark:bg-bd-1  ">
          <Spinner />
          <AlertBox message={"Please Wait - Cards Loading!"} />
        </div>
      )}

      {/* Current Selected Mode */}

      {!isLoading && cards.length !== 0 && (
        <div className=" font-roboto bg-bl-1 dark:bg-bd-1 dark:text-bd-1 font-bold text-5xl justify-center  mobile:flex-col  flex relative items-center mobile:text-4xl   ">
          <div className="  mb-10 p-3 rounded-xl dark:bg-bl-1 dark:text-bd-1  bg-bd-1 text-bl-1 flex justify-center items-center">
            {matchingGameActive ? "Matching Game" : "Regular Deck"}
          </div>
        </div>
      )}

      {/* Could Not Load Cards */}
      {!isLoading && cards.length === 0 && (
        <div className="flex justify-center ">
          <div className="  bg-bl-1 dark:bg-bd-1">
            <ErrorComponent message={"Sorry We Couldn't Find The Cards."} />
          </div>
        </div>
      )}

      {/* Cards Loaded - Choose Between Matching & Regular Decks*/}
      {!isLoading && cards.length !== 0 && (
        <div>
          <div className="justify-center items-center flex dark:bg-bd-1 bg-l-1 ">
            <MatchingGameButton
              content={matchingGameActive ? "Change Modes" : "Change Modes"}
              onClick={handleMatchingGameClick}
            />
          </div>

          <div className="h-screen dark:bg-bd-1 bg-bl-1 ">
            {!matchingGameActive ? (
              <div
                className={`
              grid justify-content items-center
               pt-10
                dark:bg-bd-1
                bg-bl-1 gap-5      
          ${
            cards.length != 0 &&
            ` flex-col  sm:grid
          sm:items-center sm:justify-center
          sm:grid-cols-2
          md:grid  
          lg:grid-cols-3
          xl:grid-cols-4
          pb-10
          `
          }
        
           `}
              >
                {cards}
              </div>
            ) : (
              <div className="">
                <MatchingGame deck={doubledDeck} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Class;
