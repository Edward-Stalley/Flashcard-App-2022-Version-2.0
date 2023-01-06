import { useState, useEffect } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { useContext } from "react";
import MyThemeContext from "../store/myThemeContext";
import DialogBox from "./DialogBox";
import React from "react";
// Need to pass this down to other components that use flashcards

export default function Flashcards(props: any) {
  const router = useRouter();

  // States

  const [flashcards, setFlashcards] = useState([]);
  const [show, setShow] = useState(true);
  const areYoutSureDelete = (choose: any) => {
    if (choose) {
    }
  };

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });

  // Light-Dark Theme

  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  // Flip Functionality
  const [flip, setFlip] = useState(false);
  const handleToggle = function () {
    setFlip((flip) => !flip);
  };

  // Delete Functionality * ONLY GIVE TO "MY FLASHCARDS"

  const handleDelete = async (idPath: any) => {
    setDialog({
      message: "Are you Sure?",
      isLoading: true,
    });

    try {
      await axios.delete(idPath);
      console.log(idPath);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // Effects
  // useEffect(() => {
  //   // if (!router.isReady) return;
  //   const fetchAllFlashcards = async () => {
  //     try {
  //       const res = await axios.get(props.classPath);
  //       setFlashcards(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchAllFlashcards();
  // }, [router.isReady, props.classPath]);

  // onChange?: ChangeEventHandler<T> | undefined;
  // onClick?: MouseEventHandler<T> | undefined;

  // return (
  //   <div className="relative flex justify-center items-center">
  //     <div
  //       className={`card h-16 w-64  rounded-xl shadow-md flex  justify-center items-center text-bd-1  dark:bg-bd-3   d`}
  //       onClick={handleToggle}
  //     >
  //       <div className="back">{props.english}</div>
  //       <div className="front">{props.japanese}</div>
  //     </div>
  //   </div>
  // );

  return (
    <div key={props.id}>
      {/* {dialog.isLoading && <DialogBox onDialog={areYouSureDelete} />} */}

      <div className="relative flex justify-center items-center">
        <div
          className={`card ${
            flip ? "flip" : ""
          } h-16 w-64  rounded-xl shadow-md flex  justify-center items-center text-bd-1  dark:bg-bd-3   dark:bg-zinc-700  bg-bl-2  dark:text-bl-1  `}
          onClick={handleToggle}
        >
          <div className="front ">{props.japanese}</div>
          <div className="back">{props.english} </div>
        </div>
        {/* {props.showDeleteButton && (
          <div className="absolute top-0 right-0 flex items-center justify-center dark:text-slate-200 h-5 w-5 m-1 ">
            <button
              onClick={() => {
                handleDelete(props.idPath);
              }}
              className="relative"
            >
              x
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}

{
  /* <div key={props.id}>
<div className="relative flex justify-center items-center">
  <div
    onClick={handleClick}
    data-key-match={props.matchId}
    data-matched={props.matched}
    className={`
    ${props.color ? " bg-mc-g  dark:bg-mc-gx " : "dark:bg-zinc-700  bg-bl-2  dark:text-bl-1"}
    card  h-16 w-64     
    rounded-xl shadow-md  flex justify-center items-center text-bd-1  `}
  >
    <div
      onClick={handleClick}
      className="front "
      data-key-match={props.matchId}
      data-matched={props.matched}

    >
      {props.word}
    </div>
  </div>
</div>
</div> */
}
