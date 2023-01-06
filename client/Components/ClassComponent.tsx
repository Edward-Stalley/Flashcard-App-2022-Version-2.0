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
      className=" nav_button bg-but-d dark:text-bd-1 dark:bg-but-d  w-56 h-16  p-5 rounded-full flex items-center m-1 justify-center"
      // for local host
      // href={`/ClassSelector/${props.year}/${props.week}/${props.class}`}
      // Use the one below for deployed version
      href={`/ClassSelector/${props.year}/${props.week}/${props.class}`}
    >
      {props.class}
    </Link>
  );
}
