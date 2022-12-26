import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

// My Componentes & Contexts
import MyThemeContext from "../store/myThemeContext";
import Header from "../Components/Header";
import ToggleButton from "../Components/ToggleButton";

export default function Home() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  return (
    <div className="bg-slate-600 h-screen ">
      <Header pageHeader="E.B. Flashcards" />
      {/* <div className=" bg-slate-200  dark:bg-bd-1 flex justify-end p-4 ">
        <ToggleButton />
      </div> */}

      <div className="bg-blue-200 p-10 h-4/5 flex-col flex justify-center items-center dark:bg-bd-1">
        {/* <h1 className="flex justify-center items-center pb-10   text-2xl">Home Page</h1> */}
        <div className="bg-blue-100 h-fit w-96 p-5 grid dark:bg-zinc-600 rounded-md ">
          <Link
            className="hover:bg-blue-300 bg-blue-200 p-5 text-center m-1 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 "
            href={"./Classes"}
          >
            Classes
          </Link>
          <Link
            className="hover:bg-blue-300 bg-blue-200 p-5 text-center m-1 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 "
            href={"./ClassSelector"}
          >
            Class Selector
          </Link>
          {/* <Link className="bg-blue-200 p-6 text-center m-1" href={"/List"}>
            Flashcards List
          </Link> */}
          <Link
            className="hover:bg-blue-300 bg-blue-200 p-6 text-center m-1 dark:bg-zinc-800 dark:text-zinc-100  dark:hover:bg-zinc-700"
            href={"./PersonalCards/Addflashcards"}
          >
            Add Flashcards
          </Link>
          <Link
            className="hover:bg-blue-300 bg-blue-200 p-6 text-center m-1 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
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
