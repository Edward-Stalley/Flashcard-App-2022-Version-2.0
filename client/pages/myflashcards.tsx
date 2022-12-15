import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

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
      <div
        className="flex relative flex-col h-fit w-96 p-2 m-2 gap-4 items-center justify-center bg-slate-500 text-slate-200"
        key={id}
      >
        <h1>
          <span className="font-bold mr-2 text-slate-900">English:</span>
          {english}
        </h1>
        <h1>
          <span className="font-bold mr-2 text-slate-900">Japanese:</span>
          {japanese}
        </h1>
        <button onClick={handleShow} className="hover:bg-slate-800 p-2 border">
          Show Example Sentence
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="hover:bg-rose-800 p-2 border h-8 flex items-center rounded top-2 right-2 absolute justify-center w-8"
        >
          X
        </button>

        {show && (
          <h1>
            <span className="font-bold mr-2 text-slate-900">Example:</span>
            {example_sentence}
          </h1>
        )}
      </div>
    );
  });

  return (
    <div className="bg-slate-200 flex justify-center m-5 flex-col ">
      <h1 className="flex justify-center p-5 text-3xl">My Cards Here</h1>
      <Link className="bg-pink-400  p-2 w-fit rounded" href="/">
        Home
      </Link>
      <div className="bg-slate-900  place-items-center grid grid-h-fit m-2 p-2">{cards}</div>
    </div>
  );
}
