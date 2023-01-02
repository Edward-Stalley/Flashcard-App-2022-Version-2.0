import { JSXElementConstructor, MouseEventHandler, ReactElement, ReactFragment, ReactPortal } from "react";
import Link from "next/link";

export default function MatchingGameButton(props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  content: string;
}) {
  return (
    <div className="  bg-bl-1 dark:bg-bd-1 flex items-center justify-center ">
      <button onClick={props.onClick} className=" nav_button rounded-full bg-but-d p-5  w-56 h-16  ">
        {/* <Link className="dark:bg-zinc-200 bg-blue-200  p-5 m-5  rounded" href="/MatchingGame"> */}
        {props.content}
        {/* </Link> */}
      </button>
    </div>
  );
}
