import Header from "../Components/Header";
import ToggleButton from "../Components/ToggleButton";
import ManOnBooks from "../Components/ManOnBooks";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import mysql from "mysql";
import Head from "next/head";
export default function landingPage() {
  return (
    <>
      <Head>
        <title>Flashcard App For English Buffet Students in Kyoto, Japan</title>
        <meta
          name="description"
          content="Review your class vocabulary using this online App for English Buffet students."
          key="desc"
        />
      </Head>
      <div className="dark:bg-gray-800 bg-bl-1 text-bd-1 dark:text-bl-1  h-screen relative  flex-col    ">
        <div>
          <Navbar />
        </div>
        <div className=" mt-5 grid mobile:grid-cols-1 sm:grid-cols-1  xl:grid-cols-2 md:grid-cols-2 p-16 px-32 items-center justify-center dark:bg-bd-1 bg-bl-1 w-fit mobile:p-10 mobile:pt-16  ">
          <div className="flex flex-col gap-8 mobile:gap-8 ">
            <h1 className="flex font-roboto w-fit   mobile:text-4xl  sm:text-5xl md:text-6xl xl:text-7xl font-bold  ">
              Let&apos;s Study English Buffet Vocabulary!
            </h1>
            <h4 className="xl:text-3xl">A Quick & Easy Way to Review + Pre-learn Words From Your Classes!</h4>
            <div className="flex gap-4 sm:flex-col mobile:flex-col">
              <Link href={"/ClassSelector"}>
                <button className=" focus:border-none nav_button bg-but-d hover:bg-but-d hover:text-bd-1  w-56 h-16 rounded-full  text-bd-1">
                  Get Started
                </button>
              </Link>
              <Link href={"/About"}>
                <Button content="How To Use" onClick={undefined} />
              </Link>
            </div>
          </div>
          <div>
            <div className="">
              <ManOnBooks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
