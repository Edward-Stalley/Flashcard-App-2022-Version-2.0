import Header from "../Components/Header";
import ToggleButton from "../Components/ToggleButton";
import ManOnBooks from "../Components/ManOnBooks";
import Link from "next/link";
import Navbar from "../Components/Navbar";
export default function landingPage() {
  return (
    <>
      <div className="dark:bg-gray-800 bg-bl-1 text-bd-1 dark:text-bl-1 relative h-screen grid  ">
        <div>
          <Navbar />
          <ToggleButton />
        </div>
        {/* <div className="   dark:bg-bd-1  bg-bl-1 flex justify-end bg-blue-200  "> */}
        {/* </div> */}
        <div className=" grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-fit pt-16 mx-32 items-center justify-center ">
          <div className="flex flex-col gap-8 ">
            <h1 className="font-roboto w-fit sm:text-5xl md:text-7xl xl:text-8xl font-bold  ">
              Let&apos;s Study English Buffet Vocabulary!
            </h1>
            <h4 className="mb-8 ">A Quick & Easy Way to Review and Pre-learn Words from your classes!</h4>
            <Link href={"/ClassSelector/2023"}>
              <button className="nav_button bg-but-d hover:bg-but-d hover:text-bd-1  w-56 h-16 rounded-full text-yellow-50">
                Get Started
              </button>
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
