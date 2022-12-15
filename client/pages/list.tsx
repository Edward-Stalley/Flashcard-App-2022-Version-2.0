import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function List() {
  // This is where I need to import data from mysql to make the
  // flashcard list.

  const [flashcards, setFlashcards] = useState(["test", "test-2"]);

  useEffect(() => {
    const fetchAllFlashcards = async () => {
      try {
        const res = await axios.get("http://localhost:8800/List");
        setFlashcards(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllFlashcards();
  }, []);

  console.log(flashcards);
  const cards = flashcards.map((f) => {
    const { english, japanese, id, example_sentence } = f;
    return (
      <div className="p-10 h--auto" key={id}>
        <h3 className="bg-slate-300 p-5">English: {english}</h3>
        <h3 className="bg-slate-200 p-5">Japanese:{japanese}</h3>
        <h4 className="bg-slate-300 p-5">Example Sentence: {example_sentence}</h4>
      </div>
    );
  });

  return (
    <div>
      <h1>this is the list page</h1>
      <Link className="bg-pink-300 p-2" href="/">
        Back to Home!
      </Link>
      <div>{cards}</div>
    </div>
  );
}
