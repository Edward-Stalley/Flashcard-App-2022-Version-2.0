import Header from "../Components/Header";
import ToggleButton from "../Components/ToggleButton";
import ManOnBooks from "../Components/ManOnBooks";
import Link from "next/link";
export default function landingPage() {
  return (
    <>
      <div className="dark:bg-gray-800 dark:text-yellow-50 relative h-screen  ">
        <div className="h-20 dark:bg-gray-50 flex gap-8 items-center justify-end px-20">
          <Link className="navlink font-roboto text-gray-800 dark:hover:text-orange-600 " href="/">
            Home
          </Link>
          <Link className="navlink font-roboto text-gray-800 dark:hover:text-orange-600 text-bold" href="/about">
            About
          </Link>
          <Link className="navlink font-roboto text-gray-800 dark:hover:text-orange-600  " href="/ClassSelector">
            Flashcards
          </Link>
          <Link
            className="navlink font-roboto text-gray-800 dark:hover:text-orange-600  "
            href="https://englishbuffet.net/"
          >
            E.B. Homepage
          </Link>
        </div>
        {/* <div className="   dark:bg-bd-1 flex justify-end bg-blue-200  ">
          <ToggleButton />
        </div> */}
        <div className=" grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-fit mt-16 mx-32  items-center justify-center ">
          <div className="flex flex-col gap-8 ">
            <h1 className="font-roboto w-fit sm:text-5xl md:text-7xl xl:text-8xl font-bold  ">
              Let&apos;s Study English Buffet Vocabulary!
            </h1>
            <h4 className="mb-8 ">A Quick & Easy Way to Review and Pre-learn Words from your classes!</h4>
            <Link href={"/ClassSelector/2023"}>
              <button className="landing_button w-56 h-16 rounded-full">Get Started</button>
            </Link>
          </div>
          <div className="flex justify-end items-center">
            <div className="w-full h-full">
              <ManOnBooks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
