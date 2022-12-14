import { useState, useEffect } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";

// Need to pass this down to other components that use flashcards

export default function Flashcards(props) {
  const router = useRouter();

  const [flashcards, setFlashcards] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    const fetchAllFlashcards = async () => {
      try {
        const res = await axios.get(`${props.classPath}`);
        setFlashcards(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllFlashcards();
  }, [router.isReady]);

  const handleDelete = async (idPath) => {
    try {
      await axios.delete(idPath);
      // confirmDelete();
      console.log(idPath);
      window.location.reload();
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleShow = () => {
    setShow((prevState) => !prevState);
  };

  const flipCard = (e) => {
    console.log(e.target);
  };

  // not sure if i can make useEffect a const so torubleshoot later

  return (
    // <div className=" bg-slate-200 m-10 grid grid-cols-3">
    <div
      onClick={flipCard}
      className="bg-slate-600 m-2 p-4 flex w-64 items-center gap-2  flex-col text-slate-200  rounded"
    >
      <h2>{props.english}</h2>
      <h2>{props.japanese}</h2>
      {show && <h4>{props.example_sentence}</h4>}
      {/* <h2>{props.classPath}</h2> */}
      {/* <h3>{props.idPath}</h3> */}
      {/* <button
          onClick={() => {
            handleDelete(props.idPath);
          }}
        >
          X
        </button> */}
    </div>
    // </div>
  );
}
