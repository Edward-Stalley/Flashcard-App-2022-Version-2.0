import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Components
import HomeButton from "../../../../../Components/HomeButton";
import ToggleButton from "../../../../../Components/ToggleButton";
import Header from "../../../../../Components/Header";
import Flashcards from "../../../../../Components/Flashcards";
import React from "react";
import MatchingGameComponent from "../../../../../Components/MatchingGameComponent";
import MatchingGameButton from "../../../../../Components/MatchingGameButton";

// Function Component

function Class() {
  // router parameters
  const router = useRouter();
  const { params = [] } = router.query;
  const yearId = router.query.yearId;
  const weekId = router.query.weekId;
  //   classId is reformatted for database in order to match the database "className"
  const classId = router.query.classId;
  // States
  const [className, setClassname] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  //   Fix the formatting to match the database formatting

  useEffect(() => {
    if (classId) {
      const dbName = classId;
      console.log(dbName);

      if (typeof dbName === "string") {
        // const
        const nameArr = dbName.split(" ");
        const wordOne = nameArr[0];
        const wordTwo = nameArr[1];
        const finalName = `${wordOne[0].toLowerCase() + wordOne.slice(1) + "_"}${
          wordTwo[0].toLowerCase() + wordTwo.slice(1)
        }`;
        setClassname(finalName);
        console.log(className);
      }
    }
  }, [!router.isReady, classId, className]);

  //   FETCH THE DATABASE ROWS BASED ON THE INFO BELOW!

  useEffect(() => {
    if (!router.isReady) return;

    if (router.isReady) {
      const fetchAllFlashcards = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/ClassSelector/${yearId}/${weekId}/${className}`);
          setFlashcards(res.data);
        } catch (err) {
          console.log(err);
        }
      };

      //   console.log("check", classId, className, flashcards);
      fetchAllFlashcards();
    }
  }, [router.isReady, className, weekId, yearId, classId]);

  console.log(flashcards);

  const cards = flashcards.map((card) => {
    const { id, english, japanese, example_sentence, week, year } = card;
    return (
      <div key={id + week + year + english} className="flex items-center justify-center">
        <Flashcards
          english={english}
          japanese={japanese}
          classPath={`http://localhost:8800/ClassSelector/${yearId}/${weekId}/${className}`}
          //   idPath={`http://localhost:8800/classes/${classId}/${id}`}
          showDeleteButton={false}
        />
      </div>
    );
  });

  return (
    <div>
      <div>
        <Header pageHeader="Select Your Class" />
        <div className="flex items-center  justify-between bg-slate-200 dark:bg-bd-1 p-4 ">
          <HomeButton />
          {/* <MatchingGameButton
            content={matchingGameActive ? "Regular Deck" : "Matching Game"}
            onClick={handleMatchingGameClick}
          /> */}
          <ToggleButton />
        </div>
        <div className="bg-slate-200  min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  ">
          <div
            className="
        dark:bg-bd-1
        p-10
      bg-slate-200 gap-5 flex flex-col items-center justify-center
      sm:items-center sm:justify-center
      sm:grid
      sm:grid-cols-2
      md:grid 
      md:grid-cols-3 
      lg:grid-cols-4
       "
          >
            {cards}

            <MatchingGameComponent flashcards={flashcards} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;
