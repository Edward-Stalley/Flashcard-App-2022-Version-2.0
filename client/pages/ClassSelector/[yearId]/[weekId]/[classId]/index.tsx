import axios from "axios";
import { Router, useRouter } from "next/router";
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
import { match } from "assert";
import Navbar from "../../../../../Components/Navbar";
import e from "express";
import AlertBox from "../../../../../Components/AlertBox";

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
  const [cards, setCards] = useState<React.ReactElement[]>();
  const [cardsForMatchingGame, setCardsForMatchingGame] = useState<React.ReactElement[]>();
  const [flashcards, setFlashcards] = useState([]);
  const [fetched, setFetched] = useState(false);

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

    if (router.isReady && className) {
      const fetchAllFlashcards = async () => {
        try {
          // NEXT API
          // const res = await axios.get(`./api/ClassSelector/${yearId}/${weekId}/${className}`, {
          // BACKEND (NOT USING ANYMORE)
          const res = await axios.get(`/api/ClassSelector/${yearId}/${weekId}/${className}`, {
            // mode: "cors",
          });

          if (res.data) {
            await setFlashcards(res.data);
          }
          // NEW CODE NEED TO TEST
          // ***************
          else {
            setFlashcards([]);
            console.log("could not fecth the data");
          }
          // ***************
        } catch (err) {
          console.log(err);
        }
      };

      fetchAllFlashcards();
    }
  }, [router.isReady, className, weekId, yearId, classId]);

  useEffect(() => {
    if (!router.isReady || flashcards?.length === 0) return;

    if (router.isReady && flashcards?.length !== 0) {
      const deck = flashcards.map((card) => {
        const { id, english, japanese, example_sentence, week, year } = card;
        return (
          <div key={id + week + year + english} className="flex items-center justify-center">
            <Flashcards
              english={english}
              japanese={japanese}
              classPath={`https://eb-flashcards.vercel.app/ClassSelector/${yearId}/${weekId}/${className}`}
              showDeleteButton={false}
            />
          </div>
        );
      });

      setCards(deck);
    }
  }, [router.isReady, flashcards, className, yearId, weekId]);

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
    if (router.isReady && flashcards.length > 0) {
      const deck = flashcards.map((card) => {
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
    // setCardOne()
    // setCardTwo()
  };

  // create JSX elements------

  // prepare deck for game start -----

  const handleMatchingGameClick = () => {
    // take flahscards and double split them into two - doubling size
    doubleTheDeck(cardsForMatchingGame);

    //  shuffle the deck & sets the shuffledCards
    shuffle(doubledDeck);
    setMatchingGameActive((prevState) => !prevState);
  };

  return (
    <div className="dark:bg-gray-800 bg-bl-1 text-bd-1 dark:text-bl-1  h-full relative grid    ">
      <div>
        <Navbar />
        <Header pageHeader={`${classId}:`} subHeader={`Week ${weekId} `} />
        <div className="pt-6 bg-bl-1 dark:bg-bd-1">
          <MatchingGameButton
            content={matchingGameActive ? "Regular Deck" : "Matching Game"}
            onClick={handleMatchingGameClick}
          />
        </div>

        <div className="h-screen dark:bg-bd-1 bg-bl-1 ">
          {!matchingGameActive ? (
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
          xl:grid-cols-4
           "
            >
              {cards}
            </div>
          ) : (
            <div className="">
              <MatchingGame deck={doubledDeck} />
            </div>
          )}
        </div>
        {cards}
      </div>
    </div>
  );
}

export default Class;

/* <div className="">{!fetched ? <AlertBox message="test" /> : }</div>*/
