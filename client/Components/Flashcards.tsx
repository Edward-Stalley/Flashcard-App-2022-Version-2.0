import { useState, useEffect } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";

// Need to pass this down to other components that use flashcards

export default function Flashcards(props: any) {
  // styles:

  const styleFlip =
    "relative h-full w-full rounded-xl shadow-xl transition-all duration-500  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ";
  const styleStatic =
    "relative h-full w-full rounded-xl shadow-xl transition-all duration-500  [transform-style:preserve-3d]";

  const router = useRouter();

  const [flashcards, setFlashcards] = useState([]);
  const [show, setShow] = useState(false);
  // const path = props.classPath

  const [flip, setFlip] = useState(false);
  const handleToggle = function () {
    setFlip((flip) => !flip);
  };

  useEffect(() => {
    if (!router.isReady) return;
    const fetchAllFlashcards = async () => {
      try {
        const res = await axios.get(props.classPath);
        setFlashcards(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllFlashcards();
  }, [router.isReady, props.classPath]);

  const handleDelete = async (idPath: any) => {
    try {
      await axios.delete(idPath);
      // confirmDelete();
      console.log(idPath);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleShow = () => {
    setShow((prevState) => !prevState);
  };

  const flipCard = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(e.target);
    setShow((prevState) => !prevState);

    // setShow(false);
  };

  // onChange?: ChangeEventHandler<T> | undefined;
  // onClick?: MouseEventHandler<T> | undefined;

  // not sure if i can make useEffect a const so torubleshoot later

  return (
    // <div className=" bg-slate-200 m-10 grid grid-cols-3">
    <div
      onClick={flipCard}
      className="bg-slate-300 m-2 p-2 flex w-fit items-center gap-2 hover:bg-slate-300 flex-col text-slate-200  rounded-xl"
    >
      {/* <h2>{props.english}</h2> */}
      {/* <h2>{props.japanese}</h2> */}
      {/* {show && <h4>{props.example_sentence}</h4>} */}
      {/* <div className="flex min-h-screen flex-col justify-center bg-slate-100"> */}
      <div className="group h-16 w-64 [perspective:1000px]">
        <div className={show ? styleFlip : styleStatic}>
          <div className="absolute inset-0">
            <div className=" text-slate-800 h-full flex justify-center items-center bg-blue-200 rounded-xl ">
              {props.english}
            </div>
          </div>

          <div className="text-slate-200 h-full  flex justify-center items-center bg-slate-800 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] ">
            {props.japanese}
          </div>
        </div>
      </div>

      <div
        // style={mode ? styles.lightMode : styles.darkMode}
        className={`card ${flip ? "flip" : ""}`}
        onClick={handleToggle}
      >
        <div className="front">{props.english}</div>
        <div className="back">{props.japanese} </div>
      </div>
      {/* </div> */}
      {/* <h2>{props.classPath}</h2> */}
      {/* <h3>{props.idPath}</h3> */}
      {/* <button
          onClick={() => {
            handleDelete(props.idPath);
          }}
        >
          X
        </button> */}
      {/* </div> */}
    </div>
  );
}
