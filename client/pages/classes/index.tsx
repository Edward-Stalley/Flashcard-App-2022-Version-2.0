import Link from "next/link";
import ToggleButton from "../../Components/ToggleButton";

// My Components
import Header from "../../Components/Header";
import DialogBox from "../../Components/DialogBox";
import HomeButton from "../../Components/HomeButton";
import React from "react";

export default function Classes() {
  return (
    <div>
      <Header pageHeader="Select Your Class" subHeader={""} />
      <div className="flex items-center  justify-between bg-slate-200 dark:bg-bd-1 p-4 ">
        <HomeButton />
        {/* <ToggleButton /> */}
      </div>
      <div className="bg-slate-200  min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  ">
        <div className="bg-slate-400 dark:bg-bd-2   p-5 grid items-center justify-center ">
          <Link
            className="hover:bg-blue-100 bg-blue-200 dark:bg-bd-1 dark:text-td-1  h-fit w-64 p-5 rounded flex items-center m-1 justify-center"
            href="/Classes/listening_kiso"
          >
            Listening Kiso
          </Link>
          <Link
            className="hover:bg-blue-100 bg-blue-200  dark:bg-bd-1 dark:text-td-1 h-fit w-64 p-5 rounded flex items-center  m-1 justify-center"
            href="/Classes/listening_shokyu"
          >
            Listening Shokyu
          </Link>

          <Link
            className="hover:bg-blue-100 bg-blue-200  dark:bg-bd-1 dark:text-td-1 h-fit w-64 p-5 rounded flex items-center  m-1 justify-center"
            href="/ClassSelector"
          >
            Select By Year & Week
          </Link>
        </div>
      </div>
    </div>
  );
}
