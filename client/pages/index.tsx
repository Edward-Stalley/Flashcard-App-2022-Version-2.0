import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-600 h-screen">
      <header>
        <div className="bg-slate-800 text-slate-100 text-4xl h-32 flex justify-center items-center">Bear Cards</div>
      </header>
      <body>
        <div className="bg-slate-200 p-10 h-fit ">
          <h1 className="flex justify-center items-center pb-10  text-2xl">Flashcard List</h1>
          <div className="bg-slate-400 h-fit p-5 grid ">
            <div className="bg-slate-500 h-fit m-5 p-5 ">card 1</div>
            <div className="bg-slate-500 h-fit m-5 p-5 ">card 2</div>
            <div className="bg-slate-500 h-fit m-5 p-5 ">card 3</div>
          </div>
        </div>
      </body>
    </main>
  );
}
