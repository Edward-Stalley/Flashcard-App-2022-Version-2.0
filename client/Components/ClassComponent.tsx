import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function Class(props: {
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
      className="hover:bg-blue-300/75 bg-blue-200 dark:hover:bg-zinc-700 dark:bg-bd-1 dark:text-td-1  h-fit w-64 p-5 rounded flex items-center m-1 justify-center"
      href={`api/ClassSelector/${props.year}/${props.week}/${props.class}`}
    >
      {props.class}
    </Link>
  );
}
