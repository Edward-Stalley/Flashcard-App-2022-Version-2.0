// Imported from Dependencies
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

// Imported Components

import Flashcards from "../Flashcards";

export default function ClassFlashcards() {
  // dynamic routing
  const router = useRouter();
  const classId = router.query.classId;

  // state
  const [flashcards, setFlashcards] = useState([]);
  console.log(flashcards);
  // effect

  // is Ready ensures it doesnt try to fetch until the classId is set

  useEffect(() => {
    if (!router.isReady) return;

    const fetchAllFlashcards = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/Classes/${classId}`);
        setFlashcards(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllFlashcards();
  }, [router.isReady, classId]);

  const cards = flashcards.map((card) => {
    const { id, english, japanese, example_sentence, week, year } = card;

    return (
      <div key={id + week + year + english}>
        <Flashcards
          english={english}
          japanese={japanese}
          classPath={`http://localhost:8800/classes/${classId}`}
          idPath={`http://localhost:8800/classes/${classId}/${id}`}
        />
      </div>
    );
  });

  return (
    <div>
      <div className="bg-slate-300 h-32 flex items-center justify-center">
        <span className="bg-slate-300 m-2 "> {classId}</span> flashcards
      </div>
      <div className="bg-slate-100 grid grid-cols-3 gap-2">{cards};</div>
    </div>
  );
}

// heart syndrome --uh-oh

// tuesday wednesday friday
// 8-30 - 12
// heart specialist
