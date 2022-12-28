import { JSXElementConstructor, MouseEventHandler, ReactElement, ReactFragment, ReactPortal } from "react";
import Link from "next/link";

export default function MatchingGameButton(props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  content: string;
}) {
  return (
    <div className="   dark:bg-bd-1 flex items-center justify-center ">
      <button
        onClick={props.onClick}
        className="dark:bg-zinc-200  p-5  rounded bg-zinc-600  text-blue-50 dark:text-zinc-700"
      >
        {/* <Link className="dark:bg-zinc-200 bg-blue-200  p-5 m-5  rounded" href="/MatchingGame"> */}
        {props.content}
        {/* </Link> */}
      </button>
    </div>
  );
}
