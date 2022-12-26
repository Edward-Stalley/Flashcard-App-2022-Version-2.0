import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import HomeButton from "../../components/HomeButton";
import ToggleButton from "../../components/ToggleButton";
import Flashcards from "../../components/Flashcards";
import Header from "../../components/Header";
// I should make the flashcard behaviour to all pages
// do i #1 use context?
//  or  #2 move it up to the top  component and pass it down with props?

export default function MyFlashcards() {
  const [flashcards, setFlashcards] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchAllFlashcards = async () => {
      try {
        const res = await axios.get("http://localhost:8800/myflashcards");
        setFlashcards(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllFlashcards();
  }, []);

  // Solution restarted the server & inserted the slash /

  // NEED TO FIX THIS -this confirmation doesnt work right now
  const confirmDelete = () => {
    confirm("Are you sure you wish to delete this card?");
  };

  const handleDelete = async (id: never) => {
    try {
      confirmDelete();
      await axios.delete(`http://localhost:8800/myflashcards/${id}`);
      // console.log(id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleShow = () => {
    setShow((prevState) => !prevState);
    console.log(show);
  };

  const cards = flashcards.map((card) => {
    const { english, japanese, example_sentence, id } = card;
    return (
      <div key={id + english} className="flex items-center justify-center">
        <Flashcards
          key={id}
          english={english}
          japanese={japanese}
          classPath={`http://localhost:8800/myflashcards`}
          idPath={`http://localhost:8800/myflashcards/${id}`}
          exampleSentence={example_sentence}
          showDeleteButton={true}
        />
      </div>

      // <div
      //   className="flex relative flex-col h-fit w-96 p-2 m-2 gap-4 items-center justify-center bg-slate-500 text-slate-200"
      //   key={id}
      // >
      //   <h1>
      //     <span className="font-bold mr-2 text-slate-900">English:</span>
      //     {english}
      //   </h1>
      //   <h1>
      //     <span className="font-bold mr-2 text-slate-900">Japanese:</span>
      //     {japanese}
      //   </h1>
      //   <button onClick={handleShow} className="hover:bg-slate-800 p-2 border">
      //     Show Example Sentence
      //   </button>
      //   <button
      //     onClick={() => handleDelete(id)}
      //     className="hover:bg-rose-800 p-2 border h-8 flex items-center rounded top-2 right-2 absolute justify-center w-8"
      //   >
      //     X
      //   </button>

      //   {show && (
      //     <h1>
      //       <span className="font-bold mr-2 text-slate-900">Example:</span>
      //       {example_sentence}
      //     </h1>
      //   )}
      // </div>
    );
  });

  return (
    <div>
      <Header pageHeader="My Flashcards" />
      <div className="flex items-center justify-between dark:bg-bd-1 bg-slate-200">
        <ToggleButton />
        <HomeButton />
      </div>

      <div
        className="
    dark:bg-bd-1
    p-10
    bg-slate-200 gap-5 flex flex-col items-center justify-center
    sm:items-center sm:justify-center sm:flex sm:flex-col
    md:grid 
    md:grid-cols-3 
    lg:grid-cols-4
     "
      >
        {cards}
      </div>
    </div>
  );
}

// sm:items-center sm:justify-center sm:flex sm:flex-col
//
