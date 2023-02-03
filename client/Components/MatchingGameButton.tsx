import { JSXElementConstructor, MouseEventHandler, ReactElement, ReactFragment, ReactPortal } from "react";
import Link from "next/link";

export default function MatchingGameButton(props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  content: string;
}) {
  return (
    <div className=" flex items-center justify-center bg-bl-1 dark:bg-bd-1   ">
      <button
        onClick={props.onClick}
        className=" flex justify-center nav_button rounded-full bg-but-d p-5 text-bd-1  w-56 h-16  "
      >
        {/* <Link className="dark:bg-zinc-200 bg-blue-200  p-5 m-5  rounded" href="/MatchingGame"> */}
        {props.content}
        {/* </Link> */}
      </button>
    </div>
  );
}
