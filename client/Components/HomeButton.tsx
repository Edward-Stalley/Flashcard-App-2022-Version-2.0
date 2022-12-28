import Link from "next/link";
import React from "react";
export default function HomeButton() {
  return (
    <div className="   dark:bg-bd-1  flex justify-start  pl-10 ">
      <Link
        className="dark:hover:bg-zinc-200/75 dark:bg-zinc-200 bg-zinc-600  text-blue-50 dark:text-zinc-700 hover:bg-blue-300/75 p-5  rounded"
        href="/"
      >
        Home
      </Link>
    </div>
  );
}
