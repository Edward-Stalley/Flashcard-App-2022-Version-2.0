import Link from "next/link";
import React from "react";

export default function Week(props: any) {
  const week = props.week;

  return (
    <Link
      className={`nav_button ${
        // this is the color for when the vocabulary is not ready for a class
        props.ready ? "bg-but-d" : "bg-red-400"
      } dark:text-bd-1  w-56 h-16  p-5 rounded-full flex items-center m-1 justify-center`}
      href={`/ClassSelector/${props.year}/${week}`}
    >
      Week {props.week}{" "}
    </Link>
  );
}
