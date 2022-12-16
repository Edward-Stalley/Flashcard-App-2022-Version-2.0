import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import MyThemeContext from "../store/myThemeContext";

export default function Home() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  return (
    <div className="bg-slate-600 h-screen ">
      <div className="bg-slate-300 text-slate-800 dark:bg-zinc-600 dark:text-zinc-100 justify-center text-slate-100 text-3xl  h-32 flex items-center">
        E.B Flashcards
      </div>
      <div className=" bg-slate-200 dark:bg-zinc-800 flex justify-end p-4 ">
        <button
          type="button"
          className=" w-32 h-16 bg-blue-200 text-slate-800 dark:bg-zinc-200 dark:text-black rounded  "
          onClick={toggleThemeHandler}
        >
          Toggle Theme
        </button>
      </div>

      <div className="bg-slate-200 p-10 h-4/5 flex-col flex justify-center items-center dark:bg-zinc-800">
        {/* <h1 className="flex justify-center items-center pb-10   text-2xl">Home Page</h1> */}
        <div className="bg-slate-400 h-fit w-96 p-5 grid dark:bg-zinc-600 ">
          <Link
            className="hover:bg-blue-100 bg-blue-200 p-6 text-center m-1 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 "
            href={"/Classes"}
          >
            Classes
          </Link>
          {/* <Link className="bg-blue-200 p-6 text-center m-1" href={"/List"}>
            Flashcards List
          </Link> */}
          <Link
            className="hover:bg-blue-100 bg-blue-200 p-6 text-center m-1 dark:bg-zinc-800 dark:text-zinc-100  dark:hover:bg-zinc-700"
            href={"./PersonalCards/AddflashcardsOld"}
          >
            Add Flashcards
          </Link>
          <Link
            className="hover:bg-blue-100 bg-blue-200 p-6 text-center m-1 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            href={"./PersonalCards/Myflashcards"}
          >
            My Flashcards
          </Link>

          {/* <Link className="bg-blue-200 p-6 text-center m-1" href={"/myflashcards/*"}>
            My Flashcards
          </Link> */}
        </div>
      </div>
    </div>
  );
}
