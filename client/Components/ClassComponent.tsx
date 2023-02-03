import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function Class(props: {
  ready: any;
  year: any;
  week: any;
  class:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <Link
      className={`nav_button ${
        props.ready ? "bg-but-d" : "bg-red-400"
      } dark:text-bd-1  w-56 h-16  p-5 rounded-full flex items-center m-1 justify-center`}
      href={`/ClassSelector/${props.year}/${props.week}/${props.class}`}
    >
      {props.class}
    </Link>
  );
}
