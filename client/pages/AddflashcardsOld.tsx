import Link from "next/link";
import { useState } from "react";
import axios from "axios";

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
    // e.preventDefault();

    try {
      await axios.post("http://localhost:8800/myflashcards", card);
      location.href = "/Myflashcards";
      console.log("added", card);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-fit bg-slate-500 flex flex-col items-center justify-center">
      <Link className="bg-slate-100 p-5 m-5 mb-10 rounded" href="/">
        Home
      </Link>
      <div className="bg-slate-800 text-slate-200 h-1/4 w-3/4 flex items-center justify-evenly p-5 m-1">
        <label className=" text-slate-700 text-slate-50 w-2/5  ">English Word:</label>
        <input
          name="english"
          type="text"
          onChange={handleChange}
          placeholder="English word here..."
          className="  text-slate-700  m-1 w-2/5"
        />
      </div>
      <div className="bg-slate-800 text-slate-200 h-1/4 w-3/4 flex items-center   justify-evenly p-5 m-1">
        <label className=" text-slate-700 text-slate-50  w-2/5">Japanese Word:</label>
        <input
          name="japanese"
          type="text"
          onChange={handleChange}
          placeholder="Japanese word here..."
          className=" text-slate-700 m-1 w-2/5"
        />
      </div>
      <div className="bg-slate-800 text-slate-200 h-1/4 w-3/4 flex items-center   justify-evenly p-5 m-1">
        <label className="text-slate-700 text-slate-50  w-2/5">Example Sentence:</label>
        <input
          className=" text-slate-700 m-1 w-2/5"
          name="example_sentence"
          type="text"
          // onInput={handleChange}
          onChange={handleChange}
          placeholder="Sentence here..."
        />
      </div>
      <button onClick={addFlashcard} className="bg-slate-700 h-10 m-2 text-slate-50  w-2/5">
        Add Card
      </button>
    </div>
  );
}
