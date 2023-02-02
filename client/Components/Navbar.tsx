import Link from "next/link";
import ToggleButton from "./ToggleButton";

export default function Navbar() {
  return (
    <div className=" h-24 dark:bg-bl-1 gap-8 dark:text-bd-1 bg-bd-1 text-bl-1 flex  justify-end w-full items-center pr-8 mobile:justify-center mobile:p-10 ">
      <Link className="navlink font-roboto   dark:text-bd-1 dark:hover:text-hov-d  hover:text-hov-l text-md " href="/">
        Home
      </Link>
      {/* <ToggleButton /> */}

      <Link className="navlink font-roboto dark:hover:text-hov-d  hover:text-hov-l text-md " href="/About">
        About
      </Link>
      <Link className="navlink font-roboto dark:hover:text-hov-d  hover:text-hov-l text-md " href="/ClassSelector">
        Flashcards
      </Link>
      <Link
        className="navlink font-roboto   dark:hover:text-hov-d   hover:text-hov-l text-md  "
        href="https://englishbuffet.net/"
      >
        E.B.
      </Link>
      <ToggleButton />
    </div>
  );
}
