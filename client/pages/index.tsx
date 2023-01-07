import Header from "../Components/Header";
import ToggleButton from "../Components/ToggleButton";
import ManOnBooks from "../Components/ManOnBooks";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
export default function landingPage() {
  return (
    <>
      <div className="bg-green-200">
        <div className="dark:bg-gray-800 bg-bl-1 text-bd-1 dark:text-bl-1  h-full relative grid grid-cols   ">
          <div>
            <Navbar />
          </div>
          {/* <div className="   dark:bg-bd-1  bg-bl-1 flex justify-end bg-blue-200  "> */}
          {/* </div> */}
          <div className=" grid mobile:grid-cols-1 sm:grid-cols-1  xl:grid-cols-2 md:grid-cols-2 p-16 px-32 items-center justify-center dark:bg-bd-1 bg-bl-1 w-fit mobile:p-10 mobile:pt-16  ">
            <div className="flex flex-col gap-8 mobile:gap-8 ">
              <h1 className="font-roboto w-fit  text-5xl sm:text-3xl md:text-7xl xl:text-7xl font-bold  mobile:text-4xl  ">
                Let&apos;s Study English Buffet Vocabulary!
              </h1>
              <h4 className=" ">A Quick & Easy Way to Review + Pre-learn Words From Your Classes!</h4>
              <div className="flex gap-4 mobile:flex-col">
                <Link href={"/ClassSelector/2023"}>
                  <button className=" focus:border-none nav_button bg-but-d hover:bg-but-d hover:text-bd-1  w-56 h-16 rounded-full  text-bd-1">
                    Get Started
                  </button>
                </Link>
                <Link href={"/About"}>
                  <Button content="How To Use" onClick={undefined} />
                </Link>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="w-full h-full">
                <ManOnBooks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
