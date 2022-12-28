import Link from "next/link";
import React from "react";
export default function HomeButton() {
  return (
    <div className="   dark:bg-bd-1  justify-start  p-4 ">
      <Link className="dark:bg-zinc-200 bg-blue-100  p-5 m-5 mb-10 rounded" href="/">
        Home
      </Link>
    </div>
  );
}
