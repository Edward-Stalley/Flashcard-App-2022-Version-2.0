import Link from "next/link";
import ToggleButton from "./ToggleButton";

export default function Navbar() {
  return (
    <div className=" ">
      <div className=" h-24 dark:bg-bl-1  dark:text-bd-1 bg-bd-1 text-bl-1 flex gap-8 justify-end w-full items-center pr-20 mobile:justify-center mobile:p-10 ">
        {/* <Link 
              className="navlink font-roboto text-gray-800 dark:hover:text-hov-d  hover:text-hov-l text-xl  "
              href="/"
            >
              Home
            </Link> */}
        <Link
          className="navlink font-roboto   dark:text-bd-1 dark:hover:text-hov-d  hover:text-hov-l text-xl "
          href="/about"
        >
          About
        </Link>
        <Link className="navlink font-roboto dark:hover:text-hov-d  hover:text-hov-l text-xl " href="/ClassSelector">
          Flashcards
        </Link>
        <Link
          className="navlink font-roboto   dark:hover:text-hov-d   hover:text-hov-l text-xl  "
          href="https://englishbuffet.net/"
        >
          E.B.
        </Link>
        {/* <div className="flex  justify-center items-center h-20 w-20"> */}
        {/* <div className="dark:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center"> */}
        <ToggleButton />
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
