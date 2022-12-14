import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-600 h-screen">
      <div className="bg-slate-800 text-slate-100 text-4xl h-32 flex justify-center items-center">Bear Cards</div>
      <div className="bg-slate-200 p-10 h-fit ">
        <h1 className="flex justify-center items-center pb-10  text-2xl">Home Page</h1>
        <div className="bg-slate-400 h-fit p-5 grid ">
          <Link className="bg-blue-200 p-6 text-center m-1" href={"/classes"}>
            Classes
          </Link>
          <Link className="bg-blue-200 p-6 text-center m-1" href={"/list"}>
            Flashcards List
          </Link>
          <Link className="bg-blue-200 p-6 text-center m-1" href={"/addflashcards"}>
            Add Flashcards
          </Link>
          <Link className="bg-blue-200 p-6 text-center m-1" href={"/myflashcards"}>
            My Flashcards
          </Link>
          {/* I need to create a page for the id so i can delet individual cards */}
          {/* <Link className="bg-blue-200 p-6 text-center m-1" href={"/myflashcards/*"}>
            My Flashcards
          </Link> */}
        </div>
      </div>
    </div>
  );
}
