import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

export default function classFlashcards() {
  // dynamic routing
  const router = useRouter();
  const classId = router.query.classId;

  // state
  const [flashcards, setFlashcards] = useState([]);

  // effect

  useEffect(() => {
    const fetchAllFlashcards = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/${classId}`);
        setFlashcards(res.data);
      } catch (err) {
        return console.log(err);
      }
    };
    fetchAllFlashcards();
  }, []);

  return (
    <div>
      <div>
        {" "}
        <span className="bg-slate-300"> {classId}</span> flashcards
      </div>
      ;
    </div>
  );
}
