import Link from "next/link";
import React from "react";

export default function Week(props: any) {
  const week = props.week;
  console.log(typeof week, typeof props.year);

  return (
    // <div className="hover:bg-blue-100 bg-blue-200 dark:bg-bd-2 dark:text-td-1  h-fit w-64 p-5 rounded flex items-center m-1 justify-center dark:hover:bg-zinc-400">
    <Link
      className="nav_button bg-but-d dark:text-bd-1  w-56 h-16  p-5 rounded-full flex items-center m-1 justify-center"
      href={`/ClassSelector/${props.year}/${week}`}
    >
      Week {props.week}{" "}
    </Link>
    // </div>
  );
}
