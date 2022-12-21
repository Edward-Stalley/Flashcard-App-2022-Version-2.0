import { JSXElementConstructor, MouseEventHandler, ReactElement, ReactFragment, ReactPortal } from "react";
export default function MatchingGameButton(props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  content: string;
}) {
  return (
    <div className="   dark:bg-bd-1 flex items-center justify-center p-4 ">
      <button onClick={props.onClick} className="dark:bg-zinc-200 bg-blue-200 p-5 m-5  rounded">
        {props.content}
      </button>
    </div>
  );
}
