import { useState, useEffect } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { useContext } from "react";
import MyThemeContext from "../store/myThemeContext";
import DialogBox from "./DialogBox";
import React from "react";
// Need to pass this down to other components that use flashcards

export default function MatchingCards(props: {
  handleChoice: (arg0: any) => void;
  card: any;
  id: React.Key | null | undefined | string | number;
  matchId: any;
  matched: boolean;
  color: boolean;
  word:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const router = useRouter();

  // States
  // const [firstCard, setFirstCard] = useState("");
  // const [secondCard, setSecondCard] = useState("");
  // const [flashcards, setFlashcards] = useState([]);

  // const [show, setShow] = useState(true);

  // const areYoutSureDelete = (choose: any) => {
  //   if (choose) {
  //   }
  // };

  //   States for matching choices
  //   const [turns, setTurns] = useState(0);
  // const [turn, setTurn] = useState(0);

  // const [firstSelected, setFirstSelected] = useState(false);
  // const [secondSelected, setSecondSelected] = useState(false);

  //   Shuffle Cards

  // # do this later

  // const [dialog, setDialog] = useState({
  //   message: "",
  //   isLoading: false,
  // });

  // Light-Dark Theme

  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  // Check For Match Functionality
  //   Need to get the key value and use that
  const [flip, setFlip] = useState(false);

  // useEffect(() => {
  //   console.log(firstSelected);
  // }, [firstSelected, secondSelected]);

  const handleClick = function () {
    props.handleChoice(props.card);
    console.log(props.card);
    // console.log(e.target.dataset.keyMatch);
    // choiceOne != null ? setChoiceTwo(e.target.dataset.keyMatch) : setChoiceOne(e.target.dataset.keyMatch);
    // console.log(`this is 1st choice - ${choiceOne}`);
    // console.log(`this is 2nd choice - ${choiceTwo}`);

    // setFirstSelected((selected) => !selected);
    // setFlip((flip) => !flip);
    // console.log(`clicked - ${choiceOne}`);
    // console.log(firstSelected);
    // console.log(e.target.dataset.keyMatch);
  };

  // console.log(choiceOne != null);

  // const resetTurn = function () {
  //   setChoiceOne(null);
  //   setChoiceTwo(null);
  //   setTurn((prevTurn) => prevTurn + 1);
  // };

  // useEffect(() => {
  //   if (choiceOne != null && choiceTwo != null) {
  //     if (choiceOne === choiceTwo) {
  //       console.log("match");
  //       resetTurn();
  //       console.log(choiceOne);
  //     } else {
  //       console.log("not a match");
  //       resetTurn();
  //       console.log(choiceTwo);
  //     }
  //   }
  // }, [choiceOne, choiceTwo]);

  // Delete Functionality * ONLY GIVE TO "MY FLASHCARDS"

  // const handleDelete = async (idPath: any) => {
  //   setDialog({
  //     message: "Are you Sure?",
  //     isLoading: true,
  //   });

  //   try {
  //     await axios.delete(idPath);
  //     console.log(idPath);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div key={props.id}>
      {/* {dialog.isLoading && <DialogBox onDialog={areYouSureDelete} />} */}
      {/* need to make a click register for either div - not doubling the key-match  */}
      <div className="relative flex justify-center items-center">
        <div
          onClick={handleClick}
          data-key-match={props.matchId}
          data-matched={props.matched}
          className={`
          ${props.color && " bg-mc-g dark:bg-mc-g dark:text-zinc-800 "}
          card  h-16 w-64     
          rounded-xl shadow-md flex justify-center items-center dark:bg-zinc-700 dark:text-bl-1 `}
        >
          <div
            onClick={handleClick}
            className="front "
            data-key-match={props.matchId}
            data-matched={props.matched}

            // data-key-first-selected={props.firstSelected}
            // data-key-second-selected={props.secondSelected}
          >
            {props.word}
          </div>
        </div>
      </div>
    </div>
  );
}
// ${props.secondSelected && "bg-green-800 dark:bg-green-600"}

// GENERAL IDEA and FUNCTIONALITY

// #1 need to seperate the english & japanese into seperate cards [Done]

// #2 They need to stay linked so that we know they are a match [Done]

// #3 need to create an array with all the cards [Done]

// #4 shuffle button for array [Done]

// #5 when card is selected change color and hold to see if next card is a match

// #6 if a match, stay green else flash red and reset

// FOR MOBILE

// size could be a problem on mobile so may need to rethink the matching component
// perhaps 4 options appear with 1 always being correct and the other 3 incorrect
