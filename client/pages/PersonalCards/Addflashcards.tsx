import Link from "next/link";
import { useState } from "react";
import axios from "axios";

// My Components
import ToggleButton from "../../Components/ToggleButton";
import HomeButton from "../../Components/HomeButton";
import Header from "../../Components/Header";

export default function AddFlashcardsOld() {
  const [card, setCard] = useState({
    english: "",
    japanese: "",
    example_sentence: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCard((prevCard) => ({ ...prevCard, [event.target.name]: event.target.value }));
    // console.log(card);
  };

  const addFlashcard = async (e: { preventDefault: () => void }) => {
    // const handleClick =  aysnc (e) =>{
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/myflashcards", card);
      location.href = "/PersonalCards/Myflashcards";
      console.log("added", card);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dark:bg-bd-1 h-screen ">
      <Header pageHeader="Add Flashcards To Your Decks" />
      <div className="flex items-center  justify-between bg-slate-200 dark:bg-bd-1 p-5 ">
        <HomeButton />
        <ToggleButton />
      </div>
      <div className="bg-slate-200 p-10 h-4/5 flex-col flex justify-center items-center dark:bg-bd-1">
        <div className="flex m-1 p-5 flex-col   dark:bg-bd-2 justify-center items-center w-5/6">
          <div className="bg-slate-300  dark:bg-bd-1  h-1/4  w-5/6 flex items-center justify-evenly p-5 m-1">
            <label className=" text-slate-700 dark:text-slate-50 w-2/5  ">English Word:</label>
            <input
              // auto change the language to English when this input is selected

              name="english"
              type="text"
              onChange={handleChange}
              placeholder="English word here..."
              className="  text-slate-700  m-1 w-2/5"
            />
          </div>
          <div className="  bg-slate-300  dark:bg-bd-1 h-1/4 w-5/6  flex items-center   justify-evenly p-5 m-1">
            <label className=" text-slate-700   dark:text-slate-50 w-2/5">Japanese Word:</label>
            <input
              // auto change the language to Japanese when this input is selected
              name="japanese"
              type="text"
              onChange={handleChange}
              placeholder="Japanese word here..."
              className=" text-slate-800 m-1 w-2/5"
            />
          </div>
          <div className="bg-slate-300  dark:text-slate-50  dark:bg-bd-1  w-5/6  h-1/4 flex items-center   justify-evenly p-5 m-1">
            <label className="text-slate-700 dark:text-slate-50  w-2/5 ">Example Sentence:</label>
            {/* make a text area in the future - messes with onChange function :(  */}
            <input
              className=" text-slate-700 m-1 w-2/5"
              name="example_sentence"
              type="text"
              // onInput={handleChange}
              onChange={handleChange}
              placeholder="Sentence here..."
            />
          </div>
          <div className="bg-slate-300  dark:bg-bd-1  w-5/6  h-1/4 flex items-center   justify-evenly p-5 m-1">
            <button
              onClick={addFlashcard}
              className=" h-10  bg-bd-2 dark:hover:bg-zinc-500 dark:text-zinc-200 text-slate-50  w-full  "
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
